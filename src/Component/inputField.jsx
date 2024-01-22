// import {useState} from 'react'
import useLocalStorage from './useStorage';

const InputField=()=> {
    // const [inputFieldValue,setInputFieldValue] = useState("")
    let [value,updateValue]=useLocalStorage("inputData")
    function savingInputValue(e){
        let data =e.target.value;
        updateValue(data)
    }
    console.log("value",value)
    return (
    <div>
      <input 
      type="text" 
      value={value}
      onChange={savingInputValue}
      />
      <h1>Data that is getting stored : {value}</h1>
    </div>
  )
}

export default InputField
