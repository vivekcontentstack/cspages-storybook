import { FooterProps } from "./types";

export const RequireProps = {
    company: [{
        title: '',
        link: ''
    }, 4],
    resource: [{
        title: '',
        link: ''
    }, 4],
    extraLinks: [{
        title: '',
        link: ''
    }, 4],
    help: [{
        title: '',
        link: ''
    }, 4],
    logoSrc: '',
    description: '',
}

export const data: FooterProps = {
    logoSrc : "https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    socialLinks:[
        {
            link: "",
            type: "facebook"
        },
        {
            link: "",
            type: "twitter",
        },
        {
            link: "",
            type: "github"
        },
        {
            link: "",
            type: "instagram"
        },
    ],
    company: [
        {title: "About", link: "#"},
        {title: "Features", link: "#"},
        {title: "Works", link: "#"},
        {title: "Career", link: "#"},
    ],
    resource: [
        {title: "Free eBooks", link: "#"},
        {title: "how to Blog", link: "#"},
        {title: "Develop", link: "#"},
        {title: "Youtube playlist", link: "#"},
    ],
    extraLinks: [
        {title: "Customer Support", link: "#"},
        {title: "Delivery Details", link: "#"},
        {title: "Terms & Conditions", link: "#"},
        {title: "Privacy Policy", link: "#"},
    ],
    help: [
        {title: "Customer Support", link: "#"},
        {title: "Delivery Details", link: "#"},
        {title: "Terms & Conditions", link: "#"},
        {title: "Privacy Policy", link: "#"},
    ]
}