import {useCallback, useRef} from 'react'

function useDebounce(fn,delay){

  const timerRef = useRef(null);
  const debounceFunc = useCallback((...args)=>{
    clearTimeout(timerRef.current)
      timerRef.current = setTimeout(()=>{
        fn(...args)
      },delay)
  },[fn,delay])

  return debounceFunc;
}


export default useDebounce;