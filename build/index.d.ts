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

declare const C001$4: {
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

declare const C002$4: {
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

declare namespace index_d$4 {
  export { C001$4 as Faq_C001, C002$4 as Faq_C002 };
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

declare const C001$3: {
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

declare const C002$3: {
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

declare namespace index_d$3 {
  export { C001$3 as Feature_C001, C002$3 as Feature_C002 };
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

declare const C001$2: {
    ({ description, company, help, resource, extraLinks }: FooterProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        company: (string | number)[];
        resource: (string | number)[];
        extraLinks: (string | number)[];
        help: (string | number)[];
        description: string;
    };
};

declare const C002$2: {
    ({ description, socialLinks, company, help }: FooterProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        company: (string | number)[];
        resource: (string | number)[];
        extraLinks: (string | number)[];
        help: (string | number)[];
        description: string;
    };
};

declare namespace index_d$2 {
  export { C001$2 as Footer_C001, C002$2 as Footer_C002 };
}

type HeaderProps = {
    menu: string[];
};

declare function C001$1({ menu }: HeaderProps): react_jsx_runtime.JSX.Element;
declare namespace C001$1 {
    var propRequire: {
        menu: (string | number)[];
    };
}

declare function C002$1({ menu }: HeaderProps): react_jsx_runtime.JSX.Element;
declare namespace C002$1 {
    var propRequire: {
        menu: (string | number)[];
    };
}

declare namespace index_d$1 {
  export { C001$1 as Header_C001, C002$1 as Header_C002 };
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

declare namespace index_d {
  export { C001 as CallToAction_C001, C002 as CallToAction_C002, C003 as CallToAction_C003 };
}

export { index_d as CallToAction, index_d$4 as Faq, index_d$3 as Feature, index_d$2 as Footer, index_d$1 as Header };
