import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../App.css'
import M from 'materialize-css'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const PostData = ()=>{

        if (! /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid Email Id", classes: "#f44336 red" })
            return;
        }

        fetch("/server/auth/register",{
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username:username,
                email:email,
                password:password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.error) {
                M.toast({ html: data.error, classes: "#f44336 red" })
            }
            else {
                M.toast({ html: data.message, classes: "#4caf50 green" })
                navigate('/login');
            }
        }).catch(err=>{
            console.log(err)
        }) 
    }

    return (
        <>
            <div className="mycard">
                <div className="card auth-card input-field">
                    <h2>Register</h2>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="btn waves-effect waves-light blue" onClick={() => PostData()} >Sign up</button>
                    <h5>Have an account?<Link to="/login"> Sign In</Link></h5>
                </div>
            </div>
        
        </>
    )
}

export default Register


{/* <div className='register'>
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className='registerInput' placeholder='Enter your username..' value={username} 
                onChange={(e)=>setUsername(e.target.value)} />
                <label>Email</label>
                <input type="email" className='registerInput' placeholder='Enter your email..' value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" className='registerInput' placeholder='Enter your password..' value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button className="registerButton" onClick={()=>PostData()} >Register</button>
            </form>
            <button className="registerLoginButton"><Link to='/login' className='link'>Login</Link></button>
        </div> */}