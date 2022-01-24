import React from 'react'
import "./style.css"
import {FaUserCircle} from "react-icons/fa"


 const SidebarChat = () => {
    return (
        <div className='sidebarChat'>
            <FaUserCircle />
            
            <div className='sidebarChat-info'>
                <h3>Channel Name</h3>
                <p>Last message sent...</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default SidebarChat;
