import React from "react";

export const Register = (props) => {
    return (
        <div className="auth-form-container">
            <h1>JPP LMS Project</h1>
            <h2>Register</h2>
        <form className="register-form">
            <label htmlFor="name">Full name</label>
            <input id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
