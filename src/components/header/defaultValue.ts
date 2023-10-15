import { HeaderProps } from "./types";

export const RequireProps = {
    title: '',
    features: [{
        title: '',
        href: ''
    }, 12],
    logoSrc: ''
}

export const data: HeaderProps = {
    features: [
        {
            title: "Features",
            href:"/"
        },
        { title: "Solutions", href:"/" },
        { title: "Resources", href:"/" },
        { title: "Pricing", href:"/" },
    ],
    logoSrc: "https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg",
    
}