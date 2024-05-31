'use client'

import { createContext, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { ThemeProvider, useTheme } from 'next-themes'

/**
 * Use previous ref function.
 */
function usePrevious<T>(value: T) {
    let ref = useRef<T>()

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

/**
 * Theme watcher.
 */
function ThemeWatcher() {
    let { resolvedTheme, setTheme } = useTheme()

    useEffect(() => {
        let media = window.matchMedia('(prefers-color-scheme: dark)')

        function onMediaChange() {
            let systemTheme = media.matches ? 'dark' : 'light'
            if (resolvedTheme === systemTheme) {
                setTheme('system')
            }
        }

        onMediaChange()
        media.addEventListener('change', onMediaChange)

        return () => {
            media.removeEventListener('change', onMediaChange)
        }
    }, [resolvedTheme, setTheme])

    return null
}

/**
 * App context.
 */
export const AppContext = createContext<{ previousPathname?: string }>({})

/**
 * Providers.
 */
export function Providers({ children }: { children: React.ReactNode }) {
    let pathname = usePathname()
    let previousPathname = usePrevious(pathname)

    return (
        <AppContext.Provider value={{ previousPathname }}>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                <ThemeWatcher />
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    )
}
