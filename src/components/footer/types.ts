export type FooterProps = {
    logoSrc?: string,
    description?: string,
    socialLinks?: Array<{
        link: string,
        type: "facebook" | "twitter" | "instagram" | "github"
    }>
    company?: { title: string, link: string }[],
    help?: { title: string, link: string }[],
    resource?: { title: string, link: string }[],
    extraLinks?: { title: string, link: string }[],
}