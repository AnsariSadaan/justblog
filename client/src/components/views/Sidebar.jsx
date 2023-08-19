import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/server/categories');
            setCats(res.data)
        }
        getCats();
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="/src/assets/sadaan.jpg" alt="profile img" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, reprehenderit vitae velit facilis perspiciatis sunt quidem cupiditate deleniti, maiores dolorem itaque ab possimus doloremque obcaecati! Exercitationem ullam aperiam accusantium nobis.</p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-github"></i>
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar