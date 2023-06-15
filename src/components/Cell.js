import { useEffect, useRef, useState } from "react"

function Cell({startValue}) {
  const [editValue, setEditValue] = useState(false)
  const [value, setValue] = useState(startValue)
  const cellRef = useRef(null);
  console.log(cellRef.current, 'cellRef.current')
  useEffect(() => {
    if(!editValue)
      return

    const handleClickOutside = (event) => {
      if (!cellRef.current.contains(event.target)) {
        setEditValue(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [editValue]);
  // useEffect(() => {
  //   if (editValue) {
  //     document.addEventListener("click", )
  //   }
  // }, [editValue])

  const handleClick = () => {
    setEditValue(true)
  }

  let content = value

  if (editValue) {
    content = <input value = {value} onChange = {(e) => setValue(e.target.value)}/>
  }
  return(
    <th onClick={handleClick} ref={cellRef}>
      {content}
    </th>
  )
}

export default Cell