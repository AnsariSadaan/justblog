import '../../App.css'
import Sidebar from '../views/Sidebar'

const Settings = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://img.freepik.com/free-photo/portrait-cool-handsome-man-with-sunglasses_23-2149022668.jpg?w=740&t=st=1692185424~exp=1692186024~hmac=794570e4feaefe8175a8ea43f92ae69a5c74f2c5a39739c628f8fed54bda2cc5" alt="Profile picture" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display: 'none'}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='enter your username' />
                    <label>Email</label>
                    <input type="email" placeholder='enter your email' />
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
