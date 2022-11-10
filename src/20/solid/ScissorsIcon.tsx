import { component$, HTMLAttributes } from "@builder.io/qwik";
export default component$(({
  title,
  titleId,
  ...props
}: HTMLAttributes<HTMLOrSVGElement> & {
  title?: string;
  titleId?: string;
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fillRule="evenodd" d="M1.469 3.75a3.5 3.5 0 005.617 4.11l.883.51c.025.092.147.116.21.043a3.75 3.75 0 01.5-.484c.286-.23.3-.709-.018-.892l-.825-.477A3.501 3.501 0 001.47 3.75zm2.03 3.482a2 2 0 112-3.464 2 2 0 01-2 3.464zM9.956 8.322a2.75 2.75 0 00-1.588 1.822L7.97 11.63l-.884.51a3.501 3.501 0 10.75 1.3l10.68-6.166a.75.75 0 00-.182-1.374l-.703-.189a2.75 2.75 0 00-1.78.123L9.955 8.322zM2.768 15.5a2 2 0 113.464-2 2 2 0 01-3.464 2z" clipRule="evenodd" /><path d="M12.52 11.89a.5.5 0 00.056.894l3.274 1.381a2.75 2.75 0 001.78.123l.704-.188a.75.75 0 00.18-1.374l-3.47-2.004a.5.5 0 00-.5 0L12.52 11.89z" /></svg>;
});