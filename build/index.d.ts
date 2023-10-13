import * as react_jsx_runtime from 'react/jsx-runtime';

declare const C001: {
    (): react_jsx_runtime.JSX.Element;
    propRequire: {
        title: number;
        desc: number;
    };
};

declare const C002: () => react_jsx_runtime.JSX.Element;

declare const index_d_C001: typeof C001;
declare const index_d_C002: typeof C002;
declare namespace index_d {
  export { index_d_C001 as C001, index_d_C002 as C002 };
}

export { index_d as Header };
