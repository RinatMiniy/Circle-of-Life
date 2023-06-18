import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { updateMonthsData } from "../store/monthsDataSlice";

function Cell({startValue, monthData, sphere}) {
  const [editValue, setEditValue] = useState(false)
  const [inputValue, setInputValue] = useState(startValue)
  const cellRef = useRef();
  const dispatch = useDispatch()

  useEffect(() => {
    if(!editValue)
      return

    const handleClickOutside = (event) => {
      if (!cellRef.current.contains(event.target)) {
        setEditValue(false);

        if (inputValue < 0 || inputValue > 10) {
          setInputValue(startValue)
          return
        }

        const newData = {
          ...monthData,
          spheres: {
            ...monthData.spheres,
            [sphere]: Number(inputValue)
          }
        };
        
        dispatch(updateMonthsData(newData))
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [editValue, inputValue]);

  const handleClick = () => {
    setEditValue(true)
  }

  let content = inputValue

  if (editValue) {
    content = <input
      type = "number"
      value = {inputValue}
      onChange = {(e) => setInputValue(e.target.value)}
      max = "10"
      min = "0"
    />
  }
  return(
    <th onClick={handleClick} ref={cellRef}>
      {content}
    </th>
  )
}

export default Cell