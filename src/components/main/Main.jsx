import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../Context/Context'


function Main() {

    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)



    return (
        <div className='main flex-1 min-h-[100vh] pb-15vh relative'>
            <div className="nav flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
                <p>Gemini</p>
                <img className='w-[40px] rounded-[50%]' src={assets.user_icon} alt="" />
            </div>
            <div className="maincontainer max-w-[900px] m-auto">

                {!showResult?
                <>
                <div className="greet mt-[50px] mb-[50px] text-[56px] text-[#c4c7c5] font-[500] p-[20px]">
                    <p><span className='span'>Hello, Abhishek</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards grid gap-[15px] p-[20px]">
                    <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                        <p className='text-[#585858] text-[17px] '>Suggest any beautiful place where i can vist</p>
                        <img className='w-[35px] p-[5px] absolute bg-[white] rounded-[20px] bottom-[10px] right-[10px]' src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                        <p className='text-[#585858] text-[17px]'>Suggest any beautiful place where i can vist</p>
                        <img className='w-[35px] p-[5px] absolute bg-[white] rounded-[20px] bottom-[10px] right-[10px]' src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                        <p className='text-[#585858] text-[17px]'>Suggest any beautiful place where i can vist</p>
                        <img className='w-[35px] p-[5px] absolute bg-[white] rounded-[20px] bottom-[10px] right-[10px]' src={assets.message_icon} alt="" />
                    </div>
                    <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                        <p className='text-[#585858] text-[17px]'>Suggest any beautiful place where i can vist</p>
                        <img className='w-[35px] p-[5px] absolute bg-[white] rounded-[20px] bottom-[10px] right-[10px]' src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>:
                <div className='result px-[5%] py-[5%] max-h-[70vh] overflow-y-scroll '>
                    <div className="result-title flex  items-center gap-[20px]">
                        <img className='w-[40px] rounded-[50%]' src={assets.user_icon} alt="" />
                        <p className=''>{recentPrompt}</p>
                    </div>
                    <div className="result-data text-[17px] text-[300] leading-[1.8] w-[100%] flex items-start gap-[20px] mt-[10px]">
                        <img className='w-[40px] ' src={assets.gemini_icon} alt="" />
                        { loading ?
                        
                        <div className="loader w-[100%] flex flex-col gap-[10px]">
                            <div className="bar">

                            </div>
                            <div className="bar">

                            </div>
                            <div className="bar">

                            </div>
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                        

                    </div>
                    </div>
                }
                
                <div className="main-bottom absolute bottom-0 w-[100%] max-w-[900px] pr-[20px] pl-[20px] m-auto">
                    <div className="search-box flex items-center justify-between gap-[20px] bg-[#f0f4f9] py-[10px] px-[20px] rounded-[50px]">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter your prompt..." className=" outline-0 bg-transparent border-transparent bg-[#f0f4f9] flex-1 p-[8px] text-[18px]"  />
                        <div className='flex items-center gap-[15px] ' >
                            <img className='w-[20px]' src={assets.gallery_icon} alt="" />
                            <img className='w-[20px]' src={assets.mic_icon} alt="" />
                            {input?<img onClick={()=>onSent()} className='w-[20px]' src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info text-[13px] mt-[15px] mx-auto text-center text-[300]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, accusantium eligendi. Deserunt repellendus velit nam maiores ducimus eaque molestiae porro?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main