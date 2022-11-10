import React, {useContext} from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    return (
        <div>
            <p className='text-center'>
                <button className='btn btn-ghost bg-black'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;