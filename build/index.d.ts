import * as react_jsx_runtime from 'react/jsx-runtime';

type FaqProps = {
    title?: string;
    description?: string;
    queries?: {
        title: string;
        description: string;
    }[];
    contactLink?: string;
};

declare const C001$3: {
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

declare const C002$3: {
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

declare namespace index_d$3 {
  export { C001$3 as C001, C002$3 as C002 };
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

declare const C001$2: {
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

declare const C002$2: {
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

declare namespace index_d$2 {
  export { C001$2 as C001, C002$2 as C002 };
}

type FooterProps = {
    logoSrc?: string;
    description?: string;
    socialLinks?: string[];
    company?: string[];
    help?: string[];
    resource?: string[];
    extraLinks?: string[];
};

declare const C001$1: {
    ({ description, company, help, resource, extraLinks }: FooterProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        company: (string | number)[];
        resource: (string | number)[];
        extraLinks: (string | number)[];
        help: (string | number)[];
        description: string;
    };
};

declare const C002$1: {
    ({ description, socialLinks, company, help }: FooterProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        company: (string | number)[];
        resource: (string | number)[];
        extraLinks: (string | number)[];
        help: (string | number)[];
        description: string;
    };
};

declare namespace index_d$1 {
  export { C001$1 as C001, C002$1 as C002 };
}

type HeaderProps = {
    menu: string[];
};

declare function C001({ menu }: HeaderProps): react_jsx_runtime.JSX.Element;
declare namespace C001 {
    var propRequire: {
        menu: (string | number)[];
    };
}

declare function C002({ menu }: HeaderProps): react_jsx_runtime.JSX.Element;
declare namespace C002 {
    var propRequire: {
        menu: (string | number)[];
    };
}

declare const index_d_C001: typeof C001;
declare const index_d_C002: typeof C002;
declare namespace index_d {
  export { index_d_C001 as C001, index_d_C002 as C002 };
}

export { index_d$3 as Faq, index_d$2 as Feature, index_d$1 as Footer, index_d as Header };
