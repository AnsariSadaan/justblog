import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../App.css'
import M from 'materialize-css'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const PostData = ()=>{

        fetch("/server/auth/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    M.toast({ html: data.error, classes: "#f44336 red" })
                }
                else {
                    M.toast({ html: "Signed in Successfully", classes: "#4caf50 green" })
                    navigate('/');
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <div className="mycard">
                <div className="card auth-card input-field">
                    <h2>Login</h2>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}  />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                    <button className="btn waves-effect waves-light blue" type="submit" onClick={() => PostData()}>
                        Sign in
                    </button>
                    <h5>Dont have an account? <Link to="/register">Sign Up</Link></h5>
                </div>
            </div>
        </>
        // <div className='login'>
        //     <span className="loginTitle">Login</span>
        //     <form className="loginForm">
        //         <label>Username</label>
        //         <input type="text" className='loginInput' placeholder='Enter your username..' />
        //         <label>Password</label>
        //         <input type="password" className='loginInput' placeholder='Enter your password..' />
        //         <button className="loginButton">Login</button>
        //     </form>
        //     <button className="loginRegisterButton"><Link to='/register' className='link'>Register</Link></button>
        // </div>
    )
}

export default Login
