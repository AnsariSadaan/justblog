import '../../App.css'
import Sidebar from './Sidebar'
import Singlepost from './Singlepost'

const Single = () => {
    return (
        <div className='single'>
            <Singlepost />
            <Sidebar/>
        </div>
    )
}

export default Single