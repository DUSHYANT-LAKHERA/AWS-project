import { useState } from 'react';

function App() {

  const [inputData, setInputData] = useState("")
  const [showData, setShowData] = useState("")

  const handleinput = (e) => {
    console.log(e)
    console.log("asdasd")
    let inputValue = e.target.value
    setInputData(inputValue)
  }
console.log(inputData)
  const HandleSave =()=>{
    setShowData(inputData)
  } 
  return (

    <>
    <div>
    
    <input
    onChange={handleinput}
    />
    
    <button onClick={HandleSave}>Show button</button>
    {showData}
    </div>
    </>
  )
}

export default App;
