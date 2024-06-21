import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([ ]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara=(index,nextword)=>{
      setTimeout(function (){
        setResultData(prev=>prev+nextword)
      },70*index)
  }

  const newChat=()=>{
    setLoading(false)
    setShowResult(false)
    
  }

  const onSent = async (prompt) => {
    
    setResultData("")
    setLoading(true);
    setShowResult(true);
    let response;
    
    
    

    try {
      if(prompt!== undefined){
        response=await run(prompt)
        
      }
      else{
        if (input.trim()) { // Check if input has any characters after trimming
          setPrevPrompt((prev) => [...prev, input]);
        }
        
        setRecentPrompt(input)
        response= await run(input)
      }
      

      let responseArray=response.split("**")
      let newResponse="";
      for(let i=0;i<responseArray.length;i++){
        if(i===0 || i%2 !== 1){
            newResponse+=responseArray[i]
        }
        else{
          newResponse+= "<b>"+ responseArray[i]+"</b>"
        }
      }
      
      let newResponse2=newResponse.split("*").join("</br>")
      let newResponseArray= newResponse2.split(" ")
      for (let i =0; i<newResponseArray.length;i++){
            const nextword=newResponseArray[i]
            delayPara(i,nextword+" ")
      }
      setPrevPrompt((prev) => [...prev, input]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResultData("An error occurred. Please try again.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
