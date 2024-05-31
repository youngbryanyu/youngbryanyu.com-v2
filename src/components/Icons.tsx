/**
 * An arrow pointing to the left icon.
 */
export function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
        <path
          d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

/**
 * A brief case icon.
 * 
 * This icon is not meant to be hovered over, as it will not change much color during a hover.
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
 * A downwards chevron icon.
 */
export function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
            <path
                d="M1.75 1.75 4 4.25l2.25-2.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

/**
 * A rightwards chevron icon.
 */
export function ChevronRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

/**
 * A close icon. Shaped like an 'X'.
 */
export function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

/**
 * A link icon.
 */
export function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>
    )
}

/**
 * A moon icon.
 */
export function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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

/**
 * A sun icon.
 */
export function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
            <path
                d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                fill="none"
            />
        </svg>
    )
}