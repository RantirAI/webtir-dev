import { SidebarIconType } from "./types";

export const LogoIcon = ({ width, height }: { width?: string, height?: string }) => {
    return (
        <svg width={width ? width : "24"} height={height ? height : "25"} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_730_45782)">
                <rect y="0.847168" width="23.3056" height="23.3056" rx="4.82185" fill="url(#paint0_linear_730_45782)" />
                <circle cx="11.251" cy="8.07987" r="13.6619" fill="white" fill-opacity="0.18" />
                <circle cx="11.251" cy="3.2581" r="13.6619" fill="white" fill-opacity="0.18" />
                <circle cx="11.251" cy="-1.56368" r="13.6619" fill="white" fill-opacity="0.18" />
                <g filter="url(#filter0_d_730_45782)">
                    <path d="M18.4837 7.47828V11.0897C18.4837 12.0845 17.7504 12.8991 16.8402 12.8991H12.9182C12.0146 12.8991 11.2747 13.7064 11.2747 14.7084V18.3252C11.2747 19.3199 10.5413 20.1345 9.63112 20.1345H5.66174C4.75812 20.1345 4.01819 19.3271 4.01819 18.3252V14.7084C4.01819 13.7136 4.75157 12.8991 5.66174 12.8991H9.63112C10.5347 12.8991 11.2747 12.0917 11.2747 11.0897V7.47828C11.2747 6.48351 12.008 5.66895 12.9182 5.66895H16.8402C17.7438 5.66895 18.4837 6.4763 18.4837 7.47828Z" fill="#1F6BFF" />
                </g>
            </g>
            <rect x="0.5" y="1.34717" width="22.3056" height="22.3056" rx="4.32185" stroke="#D7D7D7" stroke-opacity="0.66" />
            <defs>
                <filter id="filter0_d_730_45782" x="-2.41094" y="-0.760187" width="27.3238" height="27.3238" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="3.21457" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.539556 0 0 0 0 0.626707 0 0 0 0 0.935698 0 0 0 0.84 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_730_45782" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_730_45782" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_730_45782" x1="6.42913" y1="3.25809" x2="17.2783" y2="20.9382" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E7EAF6" />
                    <stop offset="1" stop-color="#C0E0FE" />
                </linearGradient>
                <clipPath id="clip0_730_45782">
                    <rect y="0.847168" width="23.3056" height="23.3056" rx="4.82185" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export const PlusCircledIcon = ({ styles, activeLink, page }: SidebarIconType) => {
    const customClasses = "size-[16.84px] " + styles;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`${activeLink() === page ? "text-blue-500" : ""} ${customClasses}`}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    )
}

export const DataStackIcon = ({ styles, activeLink, page }: SidebarIconType) => {
    const customClasses = "size-[16.84px] " + styles;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`${activeLink() === page ? "text-blue-500" : ""} ${customClasses}`}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
    )
}

export const PaperStackIcon = ({ styles, activeLink, page }: SidebarIconType) => {
    const customClasses = "size-[16.84px] " + styles;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`${activeLink() === page ? "text-blue-500" : ""} ${customClasses}`}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
        </svg>
    )
}

export const GridIcon = ({ styles, activeLink, page }: SidebarIconType) => {
    const customClasses = "size-[16.84px] rotate-45 " + styles;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`${activeLink() === page ? "text-blue-500" : ""} ${customClasses}`}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>
    )
}

export const SparklesIcon = ({ styles, activeLink, page }: SidebarIconType) => {
    const customClasses = "size-[16.84px] transform -scale-x-100 " + styles;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`${activeLink() === page ? "text-blue-500" : ""} ${customClasses}`}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
        </svg>
    )
}

export const BoxIcon = () => {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    )
}