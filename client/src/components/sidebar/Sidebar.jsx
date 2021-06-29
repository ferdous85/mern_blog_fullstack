import './sidebar.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    const [cats, setCats] =useState([])

    useEffect(()=>{
        const getCats = async()=>{
            const res = await axios.get('/categories')
            setCats(res.data)
        }
        getCats()
    },[])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img src="https://www.tecnomint.com/images/brand/1.jpg" alt="" srcset="" width='300px' />
                <p>Lorem ro ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quis voluptas ullam veritatis rem similique commodi, </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    Categories
                </span>
                <ul className="sidebarList">
                    {cats.map(c=>(
                        <Link to={`/?cat=${c.name}`} className='link'>
                        <li className="sidebarListItem"> {c.name} </li>
                        </Link>
                    ))}
                    
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
