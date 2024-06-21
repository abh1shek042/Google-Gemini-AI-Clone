import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

function Sidebar() {

    const [extended, setextended] = useState(false)
    const {onSent,prevPrompt,setRecentPrompt,newChat}=useContext(Context)

    const loadprompt = async (prompt)=>{
            setRecentPrompt(prompt)
            await onSent(prompt)
    }
    return (
        <div className=' min-h-screen inline-flex flex-col bg-[#f0f4f9] justify-between py-[25px] px-[15px] '>
            <div className='top'>
                <img onClick={()=>setextended(prev=>!prev)} className='menu block cursor-pointer ml-[10px]' src={assets.menu_icon} alt="" />
                <div onClick={()=>newChat()} className="new-chat mt-[30px] inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-[grey] text-[15px] cursor-pointer">
                    <img  src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent flex flex-col">
                        <p className="recent-title mt-[30px] mb-[20px] ">Recent</p>
                        {prevPrompt.map((item,index)=>{
                            return(
                                <div  key={index} onClick={()=>loadprompt(item)} className="recent-entry flex gap-[10px] items-center p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] animate-[fadeIn_1.5s] ">
                                <img  src={assets.message_icon} alt="" />
                                <p>{item.slice(0,18)}...</p>
                            </div>
                            )
                        })}
                       
                    </div> : null}
            </div>

            <div className="bottom flex flex-col ">
                <div className="bottom-item recent-entry flex gap-[10px] items-center p-[10px] pr-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                    <img src={assets.question_icon} alt="" />
                    {extended?<p>help</p>:null}
                </div>
                <div className="bottom-item recent-entry flex gap-[10px] items-center p-[10px] pr-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Axtivity</p>:null}
                </div>
                <div className="bottom-item recent-entry flex gap-[10px] items-center p-[10px] pr-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Settings</p>:null}
                </div>

            </div>

        </div>
    )
}

export default Sidebar