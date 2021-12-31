import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign.styles.scss';

const Sign = () => {
    return (
        <div className='sign'>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    );
};




export default Sign;