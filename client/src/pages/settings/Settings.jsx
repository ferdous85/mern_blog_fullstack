import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form  className="settingsForm">
                <label htmlFor="">Profile Picture</label>
                <div className="settingPP">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWgYbs6SQrAEknTLAEbcoPaMAKNWu0NSt_nerHx-q3MTDqiZK&s" alt="" srcset="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fas fa-user-circle"></i>
                    </label>
                    <input type="file"  id="fileInput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='safakur' id="" />
                <label>Email</label>
                <input type="email" placeholder='safakur@gmail.com' id="" />
                <label>Password</label>
                <input type="password" placeholder='password' id="" />
                <button className="settingsSubmit">Update</button>

            </form>
            </div>
            <Sidebar />
        </div>
    )
}
