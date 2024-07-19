/**
 * Linked text that is faintly underlined and turns fully underlined when hovered over. 
 * Both text and underline become the same deeper color when hovered over, while initially 
 * the underline is faint. 
 * 
 * Default to opening in a new tab.
 */
interface LinkedTextProps {
    text: string;
    link: string;
    newTab?: boolean;
}
export function LinkedText({ text, link, newTab = true }: LinkedTextProps) {
    return (
        <a
            href={link}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noopener noreferrer' : undefined}
            className="font-semibold text-zinc-800 dark:text-zinc-100 decoration-zinc-300 dark:decoration-zinc-700 underline duration-150 ease-in-out hover:text-zinc-800 dark:hover:text-zinc-100 hover:decoration-zinc-800 dark:hover:decoration-zinc-100"
        >
            {text}
        </a>
    );
}

/**
 * Linked text that is faintly underlined and turns fully underlined when hovered over. 
 * Both text and underline become the same deeper color when hovered over, while initially 
 * the underline is faint. Is teal.
 */
interface LinkedTextProps {
    text: string;
    link: string;
    newTab?: boolean;
}
export function LinkedTextTeal({ text, link, newTab = true }: LinkedTextProps) {
    return (
        <a
            href={link}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noopener noreferrer' : undefined}
            className="font-semibold text-teal-500 decoration-teal-100 dark:decoration-teal-800 underline duration-150 ease-in-out hover:text-teal-500 dark:hover:text-teal-500 hover:decoration-teal-500 dark:hover:decoration-teal-500"
        >
            {text}
        </a>
    );
}
