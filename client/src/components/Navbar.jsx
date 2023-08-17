import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
    const user = false;
    return (
        <div className="navbar">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-github"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
            </div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className="topListItem">
                        <Link to='/' className='link'>HOME</Link>
                    </li>
                    <li className="topListItem"><Link to='/about' className='link'>ABOUT</Link></li>
                    <li className="topListItem"><Link to='/contact' className='link'>CONTACT</Link></li>
                    <li className="topListItem"><Link to='/write' className='link'>WRITE</Link></li>
                    <li className="topListItem">{user && 'LOGOUT'}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img className='topImg' src="/src/assets/sadaan.jpg" alt="profile img" />
                ):(
                    <ul className='topList'>
                        <li className='topListItem'>
                        <Link to='/login' className='link'>LOGIN</Link>
                        </li>
                        <li className='topListItem'>
                        <Link to='/register' className='link'>REGISTER</Link>
                        </li>
                    </ul>
                )
            }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Navbar