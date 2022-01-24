import React, { useState } from 'react'
import "./style.css"
import {BsMic} from "react-icons/bs"

 const Chat = () => {
     const [input, setInput] = useState("")

    const sendMessage = (e) => {
        e.preventDefault();

        //firebase magic...
    }
    return (
        <div className='chat'>
            {/* Chat header */}  
            <div className='chat-header'>
                <h4>To: <span className='chat-name'>Channel Name</span></h4>
                <strong>Details</strong>
            </div>
            {/* Chat messages*/}

            <div className='chat-messages'>
                <h2>message</h2>
                <h2>message</h2>
                <h2>message</h2>

            </div>
            {/* Chat input */} 

            <div className='chat-input'>
                <form>
                    <input value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder = "iMessage" 
                    type="text" />
                    <button onClick={sendMessage}> Send Message </button>
                </form>

                <button>
                <BsMic className="chat-mic" />
                </button>
            </div> 


            
        </div>
    )
}

export default Chat;
