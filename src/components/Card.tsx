import Link from 'next/link'
import clsx from 'clsx'
import { ChevronRightIcon } from './Icons'
import 'animate.css' /* Need to import in this class or reload doesn't animate */

/**
 * A card.
 */
export function Card<T extends React.ElementType = 'div'>({
    as,
    className,
    children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
    as?: T
    className?: string
}) {
    let Component = as ?? 'div'

    return (
        <Component
            className={clsx(className, 'group relative flex flex-col items-start animate__animated animate__fadeInUp')}
        >
            {children}
        </Component>
    )
}

/**
 * A title text with a link.
 */
Card.Link = function CardLink({
    children,
    ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
    return (
        <>
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
            <Link {...props} target='_blank'>
                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl " />
                <span className="relative z-10">{children}</span>
            </Link>
        </>
    )
}

/**
 * Title of a card.
 */
Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
    as,
    href,
    children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
    as?: T
    href?: string
}) {
    let Component = as ?? 'h2'

    return (
        <Component className="text-base font-semibold text-lg tracking-tight text-zinc-800 dark:text-zinc-100">
            {href ? <Card.Link href={href}>{children}</Card.Link> : children}
        </Component>
    )
}

/**
 * Subtitle of a card.
 */
Card.Subtitle = function CardSubtitle({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <p className="relative z-10 font-medium mt-0 text-sm text-zinc-800 dark:text-zinc-100 transition group-hover:text-teal-500">
                {children}
            </p>
        </>
    )
}

/**
 * Subtitle of a card with right facing chevron.
 */
Card.SubtitleWithChevron = function CardSubtitleWithChevron({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative z-10 flex items-center text-sm font-medium text-zinc-800 dark:text-zinc-100 transition group-hover:text-teal-500">
            <p className="mr-0">
                {children}
            </p>
            <ChevronRightIcon className="h-4 w-4 stroke-current" />
        </div>
    )
}

/**
 * Sub-Subtitle of a card.
 */
Card.Subsubtitle = function CardSubsubtitle({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <p className="relative z-10 font-normal mt-0 text-sm text-zinc-800 dark:text-zinc-100" style={{ lineHeight: '1.2' }}>
            {children}
        </p>
    )
}

/**
 * Description of a card.
 */
Card.Description = function CardDescription({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400" style={{ lineHeight: '1.2' }}>
            {children}
        </p>
    )
}

/**
 * Description list of a card with bullet points.
 */
Card.DescriptionList = function CardDescriptionList({
    items,
}: {
    items: string[]
}) {
    return (
        <ul className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
            {items.map((item, index) => (
                <li key={index} className="" style={{ lineHeight: '1.2' }}>
                    {item}
                </li>
            ))}
        </ul>
    )
}

/**
 * Description list of a card with bullet points.
 */
Card.DescriptionBulletList = function CardDescriptionBulletList({
    items,
}: {
    items: string[]
}) {
    return (
        <ul className="relative z-10 mt-2 ml-4 list-disc text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
            {items.map((item, index) => (
                <li key={index} className="pl-0" style={{ lineHeight: '1.2' }}>
                    {item}
                </li>
            ))}
        </ul>
    )
}

/**
 * A highlighted teal text with chevron right icon indicated to open a link.
 */
Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
    return (
        <div
            aria-hidden="true"
            className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
        >
            {children}
            <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
        </div>
    )
}

/**
 * An eyebrow to the left side of a card.
 */
Card.Eyebrow = function CardEyebrow<T extends React.ElementType = 'p'>({
    as,
    decorate = false,
    className,
    children,
    ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
    as?: T
    decorate?: boolean
}) {
    let Component = as ?? 'p'

    return (
        <Component
            className={clsx(
                className,
                'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 animate__animated animate__fadeInUp',
                decorate && 'pl-3.5',
            )}
            {...props}
        >
            {decorate && (
                <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                </span>
            )}
            {children}
        </Component>
    )
}
