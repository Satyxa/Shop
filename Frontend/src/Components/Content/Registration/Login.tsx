import React, {useRef} from 'react';
import MenuPlace from "../../Menu/MenuPlace";
import {Navigate} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {LoginUser} from "../../../REDUX/LoginReducer";
import {RootState} from "../../../REDUX/store";

const Login: React.FC = () => {
    const loginInfo = useSelector((state: RootState) => state.login)
    const dispatch = useDispatch()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const send = async (e) => {
        e.preventDefault()
        try {
            const email: string = emailRef.current.value
            const password: string = passwordRef.current.value
            const user = await axios.post('http://localhost:1002/auth/login', {
                email, password
            })
            dispatch(LoginUser(user.data.user))
            const test = user.data.user
            localStorage.setItem('userInfo', JSON.stringify(test))
            localStorage.setItem('authStatus', loginInfo.authStatus)
        } catch (err) {
            console.log(err)
        }
    }
            if(localStorage.getItem('authStatus') === 'active'){
                return <Navigate to='/'/>
            }

    return (
        <div>
            <MenuPlace/>
            <div className="page__title-box">
                <div className="container">
                    <h3 className='page__title'>Login</h3>
                </div>
            </div>

            <div className="container">
                <div className="registration__block">
                    <div className="registration__form">
                        <form action="">
                            <label htmlFor="" className='registration__form__label'>Login</label>
                            <input ref={emailRef} type="text" className='registration__form__input'
                                   placeholder='Email'/>
                            <input ref={passwordRef} type="password" className='registration__form__input'
                                   placeholder='Password'/>
                            <button onClick={send} className='register__button'>JOIN NOW</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;