import PropTypes from 'prop-types';
import './header.css';
export declare const Header: {
    ({ user, onLogin, onLogout, onCreateAccount }: any): import("react/jsx-runtime").JSX.Element;
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
