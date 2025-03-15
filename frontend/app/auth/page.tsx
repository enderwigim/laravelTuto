"use client";

import React, { useState } from "react";

const Auth: React.FC = () => {

    const [isLogin, setIsLogin] = useState<boolean>(true);

    return <>
        <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4" style={{ width: "400px" }}>
            
            <h3 className="text-center">{ isLogin ? "Login" : "Register" }</h3>
            <form>
                { !isLogin && <input className="form-control mb-2" name="name" 
                    type="text" placeholder="Name" required />}
                
                <input className="form-control mb-2" name="email" type="email" 
                    placeholder="Email" required />
                <input className="form-control mb-2" name="password" type="password" 
                    placeholder="Password" required />
                {
                    !isLogin && <input className="form-control mb-2" name="password_confirmation" type="password" 
                    placeholder="Confirm Password" required />
                }
                <button className="btn btn-primary w-100" type="submit">{ isLogin ? "Login" : "Register" }</button>
            </form>

            <p className="mt-3 text-center" >{ !isLogin ? "Don't have an account? " : "Already have an account? " }
                <span onClick={ () => setIsLogin(!isLogin) } style={{ cursor: "pointer", color: "blue" }}>
                    {
                        !isLogin ? "Login" : "Register"
                    }
                </span>

            </p>
        </div>
    </div>"
    </>
}
export default Auth;