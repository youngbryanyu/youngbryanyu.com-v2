import clsx from "clsx"
import Link from "next/link"
import { ChevronRightIcon } from "./Icons"

/**
 * A social link shown that is made up of a simple social link plus text below it when hovered over.
 */
export function HoverSocialLink({
    href,
    ariaLabel,
    icon: Icon,
    label,
}: {
    href: string;
    ariaLabel: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
}) {
    return (
        <div className="relative flex flex-col items-center">
            <div className="group flex flex-col items-center">
                <SimpleSocialLink href={href} aria-label={ariaLabel} icon={Icon} />
                <div className="absolute top-8 flex items-center opacity-0 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100">
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">{label}</span>
                </div>
            </div>
        </div>
    );
}

/**
 * A verbose social link with icon and text (e.g. LinkedIn, GitHub, email, etc).
 * 
 * Highlights in teal when hovered over. This looks better than zinc for text.
 */
export function VerboseSocialLink({
    className,
    href,
    children,
    icon: Icon,
}: {
    className?: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                target='_blank'
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

/**
 * A simple social link with just the icon (e.g. LinkedIn, GitHub, email, etc).
 * 
 * Highlights in zinc when hovered over. This looks better than teal for just an icon.
 */
export function SimpleSocialLink({
    icon: Icon,
    ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
    icon: React.ComponentType<{ className?: string }>
}) {
    return (
        <Link className="group -m-1 p-1" {...props} target='_blank'>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    )
}
