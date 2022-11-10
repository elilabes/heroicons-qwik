import { component$, HTMLAttributes } from "@builder.io/qwik";
export default component$(({
  title,
  titleId,
  ...props
}: HTMLAttributes<HTMLOrSVGElement> & {
  title?: string;
  titleId?: string;
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>;
});