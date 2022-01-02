import React from 'react';
import './custom-button.styles.scss'
const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button onClick={otherProps.handleAuth}
         className={` ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button `} >
            {children}
        </button>
    );
}

export default CustomButton;
