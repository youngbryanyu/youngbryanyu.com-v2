/**
 * Linked text that is underlined and turns white or black when hovered over.
 */
export function LinkedText(text: string, link: string) {
    return (<a href={link} target='_blank' className="font-semibold hover:underline hover:text-black dark:hover:text-white">{text}</a>)
}