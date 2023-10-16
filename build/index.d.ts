import * as react_jsx_runtime from 'react/jsx-runtime';

type HeaderProps = {
    features: Array<{
        title: string;
        href?: string;
    }>;
    logoSrc?: string;
};

declare function C001$4({ features, logoSrc }: HeaderProps): react_jsx_runtime.JSX.Element;
declare namespace C001$4 {
    var propRequire: {
        features: (number | {
            title: string;
            href: string;
        })[];
        logoSrc: string;
    };
}

declare function C002$4({ features, logoSrc }: HeaderProps): react_jsx_runtime.JSX.Element;
declare namespace C002$4 {
    var propRequire: {
        features: (number | {
            title: string;
            href: string;
        })[];
        logoSrc: string;
    };
}

declare namespace index_d$4 {
  export { C001$4 as C001, C002$4 as C002 };
}

type FooterProps = {
    logoSrc?: string;
    description?: string;
    socialLinks?: Array<{
        link: string;
        type: "facebook" | "twitter" | "instagram" | "github";
    }>;
    company?: {
        title: string;
        link: string;
    }[];
    help?: {
        title: string;
        link: string;
    }[];
    resource?: {
        title: string;
        link: string;
    }[];
    extraLinks?: {
        title: string;
        link: string;
    }[];
};

declare const C001$3: {
    ({ logoSrc, description, socialLinks, company, help, resource, extraLinks }: FooterProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        company: (number | {
            title: string;
            link: string;
        })[];
        resource: (number | {
            title: string;
            link: string;
        })[];
        extraLinks: (number | {
            title: string;
            link: string;
        })[];
        help: (number | {
            title: string;
            link: string;
        })[];
        logoSrc: string;
        description: string;
    };
};

declare const C002$3: {
    ({ logoSrc, description, socialLinks, company, help }: FooterProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        company: (number | {
            title: string;
            link: string;
        })[];
        resource: (number | {
            title: string;
            link: string;
        })[];
        extraLinks: (number | {
            title: string;
            link: string;
        })[];
        help: (number | {
            title: string;
            link: string;
        })[];
        logoSrc: string;
        description: string;
    };
};

declare namespace index_d$3 {
  export { C001$3 as C001, C002$3 as C002 };
}

type FaqProps = {
    title?: string;
    description?: string;
    queries?: {
        title: string;
        description: string;
    }[];
    contactLink?: string;
};

declare const C001$2: {
    ({ title, description, contactLink, queries }: FaqProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        queries: (number | {
            title: string;
            description: string;
        })[];
        title: string;
        description: string;
        contactLink: string;
    };
};

declare const C002$2: {
    ({ title, queries }: FaqProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        queries: (number | {
            title: string;
            description: string;
        })[];
        title: string;
        description: string;
        contactLink: string;
    };
};

declare namespace index_d$2 {
  export { C001$2 as C001, C002$2 as C002 };
}

type FeatureProps = {
    shortTitle?: string;
    title?: string;
    description?: string;
    items?: Array<{
        title: string;
        description: string;
    }>;
};

declare const C001$1: {
    ({ shortTitle: title, items, }: FeatureProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        shortTitle: string;
        title: string;
        description: string;
        items: (number | {
            title: string;
            description: string;
        })[];
    };
};

declare const C002$1: {
    ({ shortTitle, title, description, items, }: FeatureProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        shortTitle: string;
        title: string;
        description: string;
        items: (number | {
            title: string;
            description: string;
        })[];
    };
};

declare namespace index_d$1 {
  export { C001$1 as C001, C002$1 as C002 };
}

type CallToActionProps = {
    title?: string;
    description?: string;
    shortTitle?: string;
    items?: Array<{
        title: string;
        subtitle: string;
    }>;
};

declare const C001: {
    ({ title, description, items }: CallToActionProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        shortTitle: string;
        title: string;
        description: string;
        items: (number | {
            title: string;
            subtitle: string;
        })[];
    };
};

declare const C002: {
    ({ title, description, }: CallToActionProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        shortTitle: string;
        title: string;
        description: string;
        items: (number | {
            title: string;
            subtitle: string;
        })[];
    };
};

declare const C003: {
    ({ title, shortTitle, }: CallToActionProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        shortTitle: string;
        title: string;
        description: string;
        items: (number | {
            title: string;
            subtitle: string;
        })[];
    };
};

declare const index_d_C001: typeof C001;
declare const index_d_C002: typeof C002;
declare const index_d_C003: typeof C003;
declare namespace index_d {
  export { index_d_C001 as C001, index_d_C002 as C002, index_d_C003 as C003 };
}

export { index_d as CallToAction, index_d$2 as Faq, index_d$1 as Feature, index_d$3 as Footer, index_d$4 as Header };
