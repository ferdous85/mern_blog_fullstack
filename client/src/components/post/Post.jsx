import './post.css'
import {Link} from 'react-router-dom'

export default function Post({post}) {
    const PF = "http://localhost:5000/image/"
    return (
        <div className="post">
            <img src={PF+post.photo} alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">{post.categories}</span>
                                   </div>
                <Link to={`/posts/${post._id}`} className='link'>
                <span className="postTitle">
                    {post.title} 
                </span>
                </Link>                                   
                
                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    )
}
