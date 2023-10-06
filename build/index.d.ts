import * as react_jsx_runtime from 'react/jsx-runtime';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
declare const Button: {
    ({ primary, backgroundColor, size, label, ...props }: any): react_jsx_runtime.JSX.Element;
    propTypes: {
        /**
         * Is this the principal call to action on the page?
         */
        primary: PropTypes.Requireable<boolean>;
        /**
         * What background color to use
         */
        backgroundColor: PropTypes.Requireable<string>;
        /**
         * How large should the button be?
         */
        size: PropTypes.Requireable<string>;
        /**
         * Button contents
         */
        label: PropTypes.Validator<string>;
        /**
         * Optional click handler
         */
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        backgroundColor: null;
        primary: boolean;
        size: string;
        onClick: undefined;
    };
};

declare const Header: {
    ({ user, onLogin, onLogout, onCreateAccount }: any): react_jsx_runtime.JSX.Element;
    propTypes: {
        user: PropTypes.Requireable<PropTypes.InferProps<{
            name: PropTypes.Validator<string>;
        }>>;
        onLogin: PropTypes.Validator<(...args: any[]) => any>;
        onLogout: PropTypes.Validator<(...args: any[]) => any>;
        onCreateAccount: PropTypes.Validator<(...args: any[]) => any>;
    };
    defaultProps: {
        user: null;
    };
};

export { Button, Header };
