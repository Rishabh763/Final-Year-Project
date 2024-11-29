import React, { useState,useEffect } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useFirebase } from '../../context/Firebase'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';


const Register = () => {
    const firebase = useFirebase();
    const navigate = useNavigate()
    const [user,setUser] = useState(); 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    // const [isRegistering, setIsRegistering] = useState(false)
    // const [errorMessage, setErrorMessage] = useState('')


    const onSubmit = async (e) => {
        e.preventDefault()
        if(password==confirmPassword){
            await firebase.signupUsingEmailAndPassword(email, password);
            console.log(user);
        }else{
            alert("Passwords do not match");
        }
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }else{
                setUser(null)
            }
        })
    },[user])

    return (
        <div className='content-grid'>
            {user && (<Navigate to={'/'} replace={true} />)}

            <main className="w-full min-h-screen flex self-center place-content-center place-items-center bg-muted full-width">
                <div className="max-w-96 bg-background text-gray-100 space-y-5 p-4 md:p-8 shadow-xl border rounded-xl">
                    <div className="text-center mb-6">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Create a New Account</h3>
                        </div>

                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Email
                            </label>
                            <input
                                placeholder='Enter your email'
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Password
                            </label>
                            <input
                                placeholder='Enter password'
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Confirm Password
                            </label>
                            <input
                                placeholder='Enter password'
                                type="password"
                                autoComplete='off'
                                required
                                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg transition duration-300"
                            />
                        </div>


                        <button
                            type="submit"
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg bg-primary hover:bg-primary/90 hover:shadow-xl transition duration-300'}`}
                        >
                            Sign Up
                        </button>
                        <div className="text-sm text-center text-foreground">
                            Already have an account? {'   '}
                            <Link to={'/signin'} className="text-center  text-sm hover:underline font-bold">Continue</Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Register