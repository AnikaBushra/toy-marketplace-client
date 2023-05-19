import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Registration = () => {
    const { signUp } = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password);
        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-100 w-full">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold mx-auto my-4">Register Now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name"
                                        name="name"
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="Photo"
                                        name="photoUrl"
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email"
                                        name="email"
                                        className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        name="password"
                                        placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>

                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account?? Please sign in.</Link>
                            </label>
                        </div>
                    </div>
                    <div>
                        <img className="w-full min-h-screen" src="https://img.freepik.com/free-vector/key-concept-illustration_114360-6305.jpg?w=360&t=st=1684466446~exp=1684467046~hmac=f9e3a2ebc05701378bf5a7133bd1b25f42660a73eeb9faae865bd5e5c44e2dee" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;