import '../../App.css'

const Write = () => {
    return (
        <div className='write'>
            <form className="writeForm">
                <img className='writeImg' src="https://img.freepik.com/free-vector/blog-concept-illustration-idea-posting-sharing-following_613284-2970.jpg?w=900&t=st=1692100539~exp=1692101139~hmac=ba303db7552585b776df6137ade01ccd2e0c570d5ecc35bdaee252f1d359b0b8" alt="blogselectedimg" />
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: 'none' }} />
                    <input type="text" placeholder="Title" className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write
