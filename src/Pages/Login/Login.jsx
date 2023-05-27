import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import img from '../../assets/others/authentication2.png';
import { useEffect, useRef, useState } from 'react';
const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    const handleValidateCaptchaValue = () => {
        const userCaptchaValue = captchaRef.current.value;
        console.log(userCaptchaValue);
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex flex-col md:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogIn}>
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input ref={captchaRef} type="text" name='captcha' placeholder="captcha" className="input input-bordered" />
                                    <button onClick={handleValidateCaptchaValue} className='btn btn-xs btn-outline my-3'>Validate</button>
                                </div>
                                <div className="form-control mt-6">
                                    <button disabled={disabled} className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;