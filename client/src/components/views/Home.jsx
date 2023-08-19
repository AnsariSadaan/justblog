import '../../App.css'
import Header from '../Header'
import Sidebar from './Sidebar'
import Posts from './Posts'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    // console.log(location);

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("server/posts" + search) 
            setPosts(res.data)
        }
        fetchPosts();
    }, [search])
    return (
        <>
            <Header />
            <div className='home'>
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}

export default Home