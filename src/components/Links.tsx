/**
 * Linked text that is faintly underlined and turns fully underlined when hovered over. Both text and underline become the same deeper color when hovered over, while initially the underline is faint.
 */
export function LinkedText(text: string, link: string) {
    return (<a href={link} target='_blank' className="decoration-zinc-300 dark:decoration-zinc-700 underline duration-150 ease-in-out hover:text-zinc-800 dark:hover:text-zinc-100 hover:decoration-zinc-800 dark:hover:decoration-zinc-100">{text}</a>)
}
