import { useRef } from 'react';

const Login = () => {

    const loginbtn = () => {
        const user = username.current.value;
        const pass = password.current.value;

        fetch('http://localhost:8080/login', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user, password: pass }),
        })
            .then((res) => {
                return res.json()
            });
    }

    let username = useRef();
    let password = useRef();

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-sm-12 col-md-8 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <img
                                src=""
                                alt=""
                                className="img-fluid mb-4"
                            />
                            <h4 className="mb-4 text-center">Sign in to Name</h4>

                            {/* Login Form */}
                            <div>
                                <div className="form-group">
                                    <label htmlFor="username" className="p-1">Username or email address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Enter your username or email"
                                        ref={username}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="password" className="p-1">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter your password"
                                        ref={password}
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={loginbtn}
                                    className="btn mt-3 btn-primary btn-block">
                                    Sign in
                                </button>
                            </div>

                            <hr />

                            {/* Additional Options */}
                            <div className="text-center">
                                <a href="#" className="d-block d-sm-inline">Forgot password?</a>
                                <span className="mx-2 d-none d-sm-inline">|</span>
                                <a href="#" className="d-block d-sm-inline">Sign up for Name</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
