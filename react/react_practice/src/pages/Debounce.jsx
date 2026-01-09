import { useCallback } from "react";





function DebounceComp(){

  const handleChange = (e)=>{
    console.log(e.target.value);
  }

  const debounce =  function(func,delay){
    let timer;
    return function(...args){
      clearTimeout(timer)
      timer = setTimeout(()=>{
        func(...args)
      },1000)
    }
  }

  const useDebounceSearch = useCallback(debounce(handleChange,1000),[]);


  return (
    <>
  
      <input className="border border-red-500" type="text" onChange={useDebounceSearch} />
    </>
)
}

export default DebounceComp;