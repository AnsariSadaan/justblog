import '../../App.css'
import Header from '../Header'
import Sidebar from './Sidebar'
import Posts from './Posts'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
    const [post, usePosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res =await axios.get('/posts')
            console.log(res);
        }
        fetchPosts();
    }, [])
    return (
        <>
            <Header />
            <div className='home'>
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}

export default Home