import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const { logIn, signInWithGoogle } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleLoginGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-100 w-full">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div>
                        <img className="w-full min-h-screen" src="https://img.freepik.com/free-vector/key-concept-illustration_114360-6305.jpg?w=360&t=st=1684466446~exp=1684467046~hmac=f9e3a2ebc05701378bf5a7133bd1b25f42660a73eeb9faae865bd5e5c44e2dee" alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold mx-auto my-4">Login now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered"
                                        name="email" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password"
                                        name="password" className="input input-bordered" />

                                </div>
                                <p className="text-red-500">{error}</p>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>

                            </form>
                            <div className="form-control mt-6">
                                <button onClick={handleLoginGoogle} className="btn btn-primary">Sign In With Google</button>
                            </div>
                            <label className="label">
                                <Link to='/registration' className="label-text-alt link link-hover">New to kids zone?? Please Register</Link>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;