import '../../App.css'

const Post = () => {
    return (
        <div className='post'>
            <img className='postImg' src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="blog image" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam expedita quae in dolore aut maxime illum doloribus voluptates consectetur assumenda! 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque excepturi dignissimos voluptas officiis et asperiores, vitae quibusdam magni velit ipsum! Commodi, soluta facilis consequuntur deleniti eum mollitia nostrum, voluptates nihil architecto rem voluptatem iusto quis nulla sed unde, amet tempora maiores. Voluptas doloribus id esse possimus natus, consectetur quibusdam tenetur unde totam animi ipsum vero laboriosam rem, dolorum deserunt hic pariatur exercitationem beatae inventore ipsa temporibus! Adipisci quaerat esse praesentium veniam nihil fuga voluptatem eum labore autem provident consectetur illo libero possimus nesciunt quod molestiae tempore ipsa repellendus id quisquam, accusantium vel. Aliquam itaque, harum saepe quia eos aut!</p>
        </div>
    )
}

export default Post
