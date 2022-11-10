const fs = require("fs").promises;
const camelcase = require("camelcase");
const { promisify } = require("util");
const rimraf = promisify(require("rimraf"));
const svgr = require('@svgr/core').transform
const { dirname } = require("path");

async function getIcons(style) {
  let files = await fs.readdir(`./svgs/${style}`);
  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(`./svgs/${style}/${file}`, "utf8"),
      componentName: `${camelcase(file.replace(/\.svg$/, ""), {
        pascalCase: true,
      })}Icon`,
    }))
  );
}

function exportAll(icons, includeExtension = true) {
  return icons
    .map(({ componentName }) => {
      let extension = includeExtension ? ".js" : "";
      return `export { default as ${componentName} } from './${componentName}${extension}'`;
    })
    .join("\n");
}

async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true });
  await fs.writeFile(file, text, "utf8");
}

async function createIcon(svg) {
  const template = ({ jsx }, { tpl }) => {
    return tpl`
    import { component$, HTMLAttributes } from "@builder.io/qwik";
    export default component$(({ title, titleId, ...props }: HTMLAttributes<HTMLOrSVGElement> & { title?: string, titleId?: string }) => {
      return ${jsx};
    })`;
  };

  const component = await svgr(svg, {
    template,
    svgo: true,
    typescript: true,
    titleProp: true,
  });

  return component;
}

async function buildIcons(style) {
  const icons = await getIcons(style);
  const outDir = `./src/${style}`;

  await Promise.all(
    icons.flatMap(async ({ componentName, svg }) => {
      const content = await createIcon(svg, componentName);
      return [ensureWrite(`${outDir}/${componentName}.tsx`, content)];
    })
  );

  await ensureWrite(`${outDir}/index.ts`, exportAll(icons));
}

async function main() {
  console.log(`Building qwik icons...`);

  await Promise.all([rimraf(`src/20`), rimraf(`src/24`)]);

  await Promise.all([
    buildIcons("20/solid"),
    buildIcons("24/outline"),
    buildIcons("24/solid"),
  ]);

  return console.log(`Finished building qwik icons.`);
}

main();
