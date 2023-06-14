import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMonthsData } from "./store/monthsDataSlice";

function App() {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchMonthsData())
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
