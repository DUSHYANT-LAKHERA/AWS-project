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
    
    <h1>Welcome</h1>
    <div>
        <h1>We are under maintenance</h1>
        <h1>Testing</h1>
    </div>
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
