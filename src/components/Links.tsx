/**
 * Linked text that is faintly underlined and turns fully underlined when hovered over. 
 * Both text and underline become the same deeper color when hovered over, while initially 
 * the underline is faint.
 */
export function LinkedText(text: string, link: string) {
    return (<a href={link} target='_blank' className="font-semibold text-zinc-800 dark:text-zinc-100 decoration-zinc-300 dark:decoration-zinc-700 underline duration-150 ease-in-out hover:text-zinc-800 dark:hover:text-zinc-100 hover:decoration-zinc-800 dark:hover:decoration-zinc-100">{text}</a>)
}

/**
 * Linked text that is faintly underlined and turns fully underlined when hovered over. 
 * Both text and underline become the same deeper color when hovered over, while initially 
 * the underline is faint. Is teal.
 */
export function LinkedTextTeal(text: string, link: string) {
    return (<a href={link} target='_blank' className="font-semibold text-teal-500 decoration-teal-100 dark:decoration-teal-800 underline duration-150 ease-in-out hover:text-teal-500 dark:hover:text-teal-500 hover:decoration-teal-500 dark:hover:decoration-teal-500">{text}</a>)
}
