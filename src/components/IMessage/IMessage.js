import React from 'react'
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import "./style.css"

const IMessage = () => {
    return (
        <div className='IMessage'>
            {/* Sidebar */}
            <Sidebar />
            {/* Chat */}
            <Chat />
        </div>
    )
}

export default IMessage;