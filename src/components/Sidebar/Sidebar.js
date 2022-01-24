import React from 'react'
import "./style.css"
import {FaUserCircle} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdOutlineRateReview} from "react-icons/md"
import SidebarChat from '../SidebarChat/SidebarChat'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase'
import { selectUser } from '../../features/userSlice'

 const Sidebar = () => {
     const user = useSelector(selectUser);

    return (
        <div className="sidebar">
            

            <div className='sidebar-header'>
                {/* <Avatar /> */}
                <FaUserCircle 
                onClick={() => auth.signOut()} 
                src={user.photo} 
                className='sidebar-avatar'/>

                <div className='sidebar-input'>
                {/* <SearchIcon /> */}
                <AiOutlineSearch />
                <input placeholder='Search' />
            </div>

            <button variant="outlined" className='sidebar-inputBtn'>
                <MdOutlineRateReview />
            </button>
            
            {/* <IconButton><RateReviewOutlined /></IconButton> */}
            
            </div>

           

            <div className='sidebar-chats'>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar;
