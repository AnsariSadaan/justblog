import '../../App.css'

const Sidebar = () => {
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
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Movies</li>
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