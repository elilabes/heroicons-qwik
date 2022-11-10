<p align="center">
  <a href="https://heroicons.com/#gh-light-mode-only" target="_blank">
    <img src="./.github/logo-light.svg" alt="Heroicons" width="300">
  </a>
  <a href="https://heroicons.com/#gh-dark-mode-only" target="_blank">
    <img src="./.github/logo-dark.svg" alt="Heroicons" width="300">
  </a>
</p>

<p align="center">
  Qwik implementation of heroicons<a href="https://heroicons.com"><strong>Browse at Heroicons.com &rarr;</strong></a>  
</p>

This is an implementation of Heroicons in the [Qwik](https://qwik.builder.io/) framework.

Both icon styles are preconfigured to be stylable by setting the `color` CSS property, either manually or using utility classes like `text-gray-500` in a framework like [Tailwind CSS](https://tailwindcss.com).

## Quick start

Install `heroicons-qwik` from npm:

```sh
npm install heroicons-qwik
```

Now each icon can be imported individually as a Qwik component:

```js
import { component$ } from "@builder.io/qwik";
import { BeakerIcon } from "heroicons-qwik/24/solid";

export default component$(() => {
  return (
    <div>
      <BeakerIcon className="h-6 w-6 text-blue-500" />
      <p>...</p>
    </div>
  );
});
```

The 24x24 outline icons can be imported from `heroicons-qwik/24/outline`, the 24x24 solid icons can be imported from `heroicons-qwik/24/solid`, and the 20x20 solid icons can be imported from `heroicons-qwik/20/solid`.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

## License

This library is MIT licensed.
