import { Container } from '@/components/Container'

/**
 * A simple page layout with a big title, a summary, and a container below. Animated to fade in upwards.
 */
export function SimpleLayout({
    title,
    intro,
    children,
}: {
    title: string
    intro: string
    children?: React.ReactNode
}) {
    return (
        <Container className="mt-16 sm:mt-32">
            <header className="max-w-2xl">
                {/* The page title */}
                <div className='animate__animated animate__fadeInUp'>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        {title}
                    </h1>
                </div>

                {/* The page description */}
                <div className='animate__animated animate__fadeInUp'>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        {intro}
                    </p>
                </div>
            </header>
            {children && <div className="mt-16 sm:mt-20">{children}</div>}
        </Container>
    )
}
