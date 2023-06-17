import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { updateMonthsData } from "../store/monthsDataSlice";

function Cell({startValue, monthData, sphere}) {
  const [editValue, setEditValue] = useState(false)
  const [inputValue, setInputValue] = useState(startValue)
  const cellRef = useRef();
  const dispatch = useDispatch()

  const newData = {
    ...monthData,
    spheres: {
      ...monthData.spheres,
      [sphere]: Number(inputValue)
    }
  };

  console.log(newData, "newData")


  useEffect(() => {
    if(!editValue)
      return

    const handleClickOutside = (event) => {
      if (!cellRef.current.contains(event.target)) {
        setEditValue(false);
        console.log(inputValue, "inputValue")
        

        dispatch(updateMonthsData(newData))
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [editValue]);

  const handleClick = () => {
    setEditValue(true)
  }

  let content = inputValue

  if (editValue) {
    content = <input value = {inputValue} onChange = {(e) => setInputValue(e.target.value)}/>
  }
  return(
    <th onClick={handleClick} ref={cellRef}>
      {content}
    </th>
  )
}

export default Cell