import * as react_jsx_runtime from 'react/jsx-runtime';

declare const C001: {
    (): react_jsx_runtime.JSX.Element;
    propRequire: {
        title: string;
        features: (number | {
            feat_title: string;
            feat_desc: string;
            feat_icon: string;
        })[];
        user_info: {
            age: string;
            addr: {
                type: string;
                pincode: (string | number)[];
            };
            files: (number | {
                file_no: string;
                file_type: {
                    is_deleted: string;
                    is_video: string;
                };
            })[];
        };
    };
};

declare const C002: () => react_jsx_runtime.JSX.Element;

declare const index_d_C001: typeof C001;
declare const index_d_C002: typeof C002;
declare namespace index_d {
  export { index_d_C001 as C001, index_d_C002 as C002 };
}

export { index_d as Header };
