import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import img from '../../assets/others/authentication2.png';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }
    const handleValidateCaptchaValue = (event) => {
        const userCaptchaValue = event.target.value;
        console.log(userCaptchaValue);
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }
    return (
        <div>
            <Helmet>
                <title> BISTRO | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex flex-col md:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptchaValue} type="text" name='captcha' placeholder="captcha" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button disabled={disabled} className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p>Dont have an account? <Link className='text-red-600 font-semibold my-3' to='/signUp'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;