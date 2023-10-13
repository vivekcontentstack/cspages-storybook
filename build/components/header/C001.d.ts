declare const C001: {
    (): import("react/jsx-runtime").JSX.Element;
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
export default C001;
