import React from "react";

export const Login = (props) => {
    return (
        <div className="auth-form-container">
        <h1>JPP LMS Project</h1>
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">email</label>
                <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input  type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}