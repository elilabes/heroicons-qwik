import { component$, HTMLAttributes } from "@builder.io/qwik";
export default component$(({
  title,
  titleId,
  ...props
}: HTMLAttributes<HTMLOrSVGElement> & {
  title?: string;
  titleId?: string;
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M3.97 3.97a.75.75 0 011.06 0l13.72 13.72V8.25a.75.75 0 011.5 0V19.5a.75.75 0 01-.75.75H8.25a.75.75 0 010-1.5h9.44L3.97 5.03a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>;
});