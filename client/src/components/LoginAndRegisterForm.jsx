import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { doLogin, doRegister } from "../store/action"

export default function LoginAndRegisterForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const [registerData, setRegisterData] = useState({
        username : '',
        password : '',
        confirmationPassword : '',
        fullname : ''
    })

    const handleRegister = (e) => {
        e.preventDefault()
        const { name, value} = e.target
        
        return setRegisterData({
            ...registerData,
            [name] : value
        })
    }


    const handleLogin = (e) => {
        e.preventDefault()
        const { name, value } = e.target

        return setLoginData({
            ...loginData,
            [name]: value
        })
    }
    const navigateToHome = () => {
        navigate('/')
    }
    return (
        <>

            <div className="section">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3">
                                <span>Log In </span>
                                <span>Sign Up</span>
                            </h6>
                            <input
                                className="checkbox"
                                type="checkbox"
                                id="reg-log"
                                name="reg-log"
                            />
                            <label htmlFor="reg-log" />
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Log In</h4>
                                                <div className="form-group">
                                                    <input
                                                        value={loginData.username}
                                                        type="text"
                                                        name="username"
                                                        className="form-style"
                                                        placeholder="Your Username"
                                                        id="username"
                                                        autoComplete="off"
                                                        onChange={handleLogin}
                                                    />
                                                    <i className="input-icon uil uil-at" />
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input
                                                        value={loginData.password}
                                                        type="password"
                                                        name="password"
                                                        className="form-style"
                                                        placeholder="Your Password"
                                                        id="password"
                                                        autoComplete="off"
                                                        onChange={handleLogin}
                                                    />
                                                    <i className="input-icon uil uil-lock-alt" />
                                                </div>
                                                <a href="#" className="btn mt-4"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        dispatch(doLogin(loginData, navigateToHome))
                                                    }}
                                                >
                                                    submit
                                                </a>
                                                <p className="mb-0 mt-4 text-center">
                                                    <a href="#0" className="link">
                                                        Forgot your password?
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Sign Up</h4>
                                                <div className="form-group">
                                                    <input
                                                    value={registerData.username}
                                                        type="text"
                                                        name="username"
                                                        className="form-style"
                                                        placeholder="Your Username"
                                                        id="registerUsername"
                                                        autoComplete="off"
                                                        onChange={handleRegister}
                                                    />
                                                    <i className="input-icon uil uil-user" />
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input
                                                    value={registerData.fullname}
                                                        type="text"
                                                        name="fullname"
                                                        className="form-style"
                                                        placeholder="Your Full Name"
                                                        id="fullname"
                                                        autoComplete="off"
                                                        onChange={handleRegister}
                                                    />
                                                    <i className="input-icon uil uil-lock-alt" />
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input
                                                    value={registerData.password}
                                                        type="password"
                                                        name="password"
                                                        className="form-style"
                                                        placeholder="Your Password"
                                                        id="registerPassword"
                                                        autoComplete="off"
                                                        onChange={handleRegister}
                                                    />
                                                    <i className="input-icon uil uil-at" />
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input
                                                    value={registerData.confirmationPassword}
                                                        type="password"
                                                        name="confirmationPassword"
                                                        className="form-style"
                                                        placeholder="Your Confirmation Password"
                                                        id="confirmationPassword"
                                                        autoComplete="off"
                                                        onChange={handleRegister}
                                                    />
                                                    <i className="input-icon uil uil-lock-alt" />
                                                </div>
                                                <a href="#" className="btn mt-4"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    dispatch(doRegister(registerData))
                                                }}
                                                >
                                                    submit
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}