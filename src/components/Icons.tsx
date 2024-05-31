import { SVGProps } from "react";

/**
 * A brief case icon.
 */
export function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

/**
 * A graduation cap icon.
 */
export function GraduationCapIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M12 3L1 9l11 6 11-6-11-6zm0 6l9-5-9-5-9 5 9 5zm0 6v6M3 16v4M21 16v4"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
        </svg>
    )
}

/**
 * A mail icon.
 */
export function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

/**
 * A resume (or CV) icon.
 */
export function ResumeIcon(
    props: React.ComponentPropsWithoutRef<'svg'>
) {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M629.76 42.666667L896 310.357333v573.525334c0 30.08-24.405333 54.613333-54.314667 54.613333H224.981333A54.528 54.528 0 0 1 170.666667 883.882667V97.28C170.666667 67.2 195.072 42.666667 224.981333 42.666667h404.778667z m-23.466667 64H234.794667c-0.128 0-0.128 0.128-0.128 0.128v767.744c0 0.128 0.128 0.128 0.128 0.128l597.205333-0.128V339.413333h-162.005333a62.293333 62.293333 0 0 1-61.653334-62.464V108.757333L606.293333 106.666667zM740.906667 725.333333c14.933333 0 27.306667 14.464 27.306666 32s-12.373333 32-27.306666 32h-408.32c-14.933333 0-27.306667-14.464-27.306667-32s12.373333-32 27.306667-32z m0-128c14.933333 0 27.306667 14.464 27.306666 32s-12.373333 32-27.306666 32h-408.32c-14.933333 0-27.306667-14.464-27.306667-32s12.202667-32 27.306667-32z m-313.301334-252.672c67.456 0 122.325333 49.066667 122.325334 109.226667a27.264 27.264 0 1 1-54.613334 0c0-29.696-30.976-54.613333-67.712-54.613333-36.693333 0-67.712 25.045333-67.712 54.613333a27.264 27.264 0 1 1-54.613333 0c0-60.16 54.869333-109.226667 122.325333-109.226667z m0-187.733333a87.04 87.04 0 1 1 0 174.08 87.04 87.04 0 1 1 0-174.08z m0 47.658667a39.381333 39.381333 0 1 0 0 78.762666 39.381333 39.381333 0 0 0 0-78.762666z m240.128-49.152V271.786667c0 5.034667 4.394667 9.386667 9.386667 9.386666h116.394667L667.733333 155.477333z"
            />
        </svg>
    );
}
