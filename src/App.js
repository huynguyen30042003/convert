import { useEffect,useRef,useState } from "react";

function App() {
  const inputRef= useRef();
  const [output,setOutput]= useState("")
  const [inputValue,setInputValue] = useState("")
  const [inputMetValue,setInputMetValue] = useState("km")
  const [outputMetValue,setOutputMetValue] = useState("km")
  let check=0;
  let checkInput
  useEffect(()=>{
    setOutput(0)
  },[inputValue]) 
  
  const met=()=>{
    switch (inputMetValue){
      case 'km':
        // console.log(+inputValue);
        return  +inputValue * 1000;
      case 'ha':
        return  +inputValue *100;
      case 'dam':
        return  +inputValue *10;
      case 'm':
        return  +inputValue;
      case 'dm':        
        return  +inputValue *0.1;
      case 'cm':        
        return  +inputValue *0.01;
      case 'mm':        
        return  +inputValue *0.001;
    }

  }
  const out=()=>{
    switch (outputMetValue){
      case 'km':
        return  checkInput *0.001;
      case 'ha':
        return  checkInput *0.0100;
      case 'dam':
        return  checkInput *0.1;
      case 'm':
        return  checkInput;
      case 'dm':        
        return  checkInput *10;
      case 'cm':        
        return  checkInput *100;
      case 'mm':        
        return  checkInput *1000;
    }
  }
  const isNumber= (inputValue)=>{
    if (Number.isNaN(+inputValue)==false){
      return "true"
    }else {
      setInputValue('')
      alert("error: input is not a Number");
      return "false"
    }
  }
  const handleConvert = (e) =>{
    if(inputValue !== "" ){
      if (isNumber(inputValue)=== "false"){
        return;
      }
      if (inputMetValue===''){
        alert("pls chose input of value")
      }else if(outputMetValue ===''){
        alert("pls chose output of value")
      }
      checkInput = met()
      setOutput(String(out()))
      inputRef.current.focus();
      if(output!=0){
        inputRef.current.focus();
        setInputValue('')
      }
    }else{
      alert("pls write somethingS")
    }
  }
  const handleMetValue = (e)=>{
    setInputMetValue(e.target.value)

  }
  const handleMetValueOutput = (e)=>{
    setOutputMetValue(e.target.value)
  }
  const handleOnChange = (e)=>{
    setInputValue(e.target.value)
  }
  const handleOnKeyDown = (e) =>{
    if (e.code === "Enter"){
      handleConvert();
    }
  }
  return (
    <>
      <div className="w-full h-screen flex flex-row justify-center items-center gap-10">
        <div className="flex flex-col">
          <input type="text" className="border-2 border-lime-600 px-6 py-2 rounded-md outline-none" placeholder="Enter value..."
          onChange={(e)=>handleOnChange(e)}
          onKeyDown={(e)=>handleOnKeyDown(e)}
          ref={inputRef}
          value={inputValue}
          ></input>
          <select 
          onChange={(e)=>handleMetValue(e)}>
            {/* <option value="" className="opacity-25">chọn giá trị</option> */}
            <option value="km">km</option>
            <option value="ha">ha</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
        </div>
        <div className="flex flex-col">
          <button type="" className="px-6 py-2 bg-lime-600 rounded-md text-white"
          onClick={handleConvert}
          >Convert</button>
        </div>
        <div className="flex flex-col">
          <input type="text" className="border-2 border-lime-600 px-6 py-2 rounded-md outline-none"  value={output}></input>
          <select 
          onChange={(e)=>handleMetValueOutput(e)}>
            {/* <option value="" className="opacity-50">chọn giá trị</option> */}
            <option value="km">km</option>
            <option value="ha">ha</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default App;