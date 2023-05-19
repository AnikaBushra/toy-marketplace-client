

const Login = () => {
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;