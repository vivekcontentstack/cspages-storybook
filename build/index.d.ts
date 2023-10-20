import * as react_jsx_runtime from 'react/jsx-runtime';

type CallToActionProps = {
    title?: string;
    description?: string;
    shortTitle?: string;
    items?: Array<{
        title: string;
        subtitle: string;
    }>;
};

declare const CallToAction_C001: {
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

declare const CallToAction_C002: {
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

declare const CallToAction_C003$1: {
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

declare const CallToAction_C003: {
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

declare const index_d$5_CallToAction_C001: typeof CallToAction_C001;
declare const index_d$5_CallToAction_C002: typeof CallToAction_C002;
declare namespace index_d$5 {
  export { index_d$5_CallToAction_C001 as CallToAction_C001, index_d$5_CallToAction_C002 as CallToAction_C002, CallToAction_C003$1 as CallToAction_C003, CallToAction_C003 as CallToAction_C004 };
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

declare const Faq_C001: {
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

declare const Faq_C002$1: {
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

declare const Faq_C002: {
    ({ title, description, queries, contactLink }: FaqProps): react_jsx_runtime.JSX.Element;
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

declare const index_d$4_Faq_C001: typeof Faq_C001;
declare namespace index_d$4 {
  export { index_d$4_Faq_C001 as Faq_C001, Faq_C002$1 as Faq_C002, Faq_C002 as Faq_C003 };
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

declare const Feature_C001: {
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

declare const Feature_C002: {
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

declare const index_d$3_Feature_C001: typeof Feature_C001;
declare const index_d$3_Feature_C002: typeof Feature_C002;
declare namespace index_d$3 {
  export { index_d$3_Feature_C001 as Feature_C001, index_d$3_Feature_C002 as Feature_C002 };
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

declare const Footer_C001: {
    ({ description, company, help, resource, extraLinks }: FooterProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        company: (string | number)[];
        resource: (string | number)[];
        extraLinks: (string | number)[];
        help: (string | number)[];
        description: string;
    };
};

declare const Footer_C002: {
    ({ description, socialLinks, company, help }: FooterProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        company: (string | number)[];
        resource: (string | number)[];
        extraLinks: (string | number)[];
        help: (string | number)[];
        description: string;
    };
};

declare const Footer_C003: {
    ({ description, socialLinks, company, help, extraLinks, resource }: FooterProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        company: (string | number)[];
        resource: (string | number)[];
        extraLinks: (string | number)[];
        help: (string | number)[];
        description: string;
    };
};

declare const index_d$2_Footer_C001: typeof Footer_C001;
declare const index_d$2_Footer_C002: typeof Footer_C002;
declare const index_d$2_Footer_C003: typeof Footer_C003;
declare namespace index_d$2 {
  export { index_d$2_Footer_C001 as Footer_C001, index_d$2_Footer_C002 as Footer_C002, index_d$2_Footer_C003 as Footer_C003 };
}

type HeaderProps = {
    menu: string[];
};

declare function Header_C001({ menu }: HeaderProps): react_jsx_runtime.JSX.Element;
declare namespace Header_C001 {
    var propRequire: {
        menu: (string | number)[];
    };
}

declare function Header_C002({ menu }: HeaderProps): react_jsx_runtime.JSX.Element;
declare namespace Header_C002 {
    var propRequire: {
        menu: (string | number)[];
    };
}

declare const index_d$1_Header_C001: typeof Header_C001;
declare const index_d$1_Header_C002: typeof Header_C002;
declare namespace index_d$1 {
  export { index_d$1_Header_C001 as Header_C001, index_d$1_Header_C002 as Header_C002 };
}

type ProductProps = {
    title?: string;
    description?: string;
    products?: {
        title: string;
        description?: string;
    }[];
};

declare const Product_C001: {
    ({ title, description, products }: ProductProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        description: string;
        products: (number | {
            title: string;
        })[];
    };
};

declare const Product_C002: {
    ({ title, description, products }: ProductProps): react_jsx_runtime.JSX.Element;
    propRequire: {
        description: string;
        products: (number | {
            title: string;
        })[];
    };
};

declare const index_d_Product_C001: typeof Product_C001;
declare const index_d_Product_C002: typeof Product_C002;
declare namespace index_d {
  export { index_d_Product_C001 as Product_C001, index_d_Product_C002 as Product_C002 };
}

export { index_d$5 as CallToAction, index_d$4 as Faq, index_d$3 as Feature, index_d$2 as Footer, index_d$1 as Header, index_d as Products };
