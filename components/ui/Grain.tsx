/** Fixed film-grain overlay — gives the dark surfaces the texture of velvet
 * instead of flat hex. Pure CSS (see .grain in globals); zero JS cost. */
export default function Grain() {
  return <div aria-hidden className="grain" />;
}
