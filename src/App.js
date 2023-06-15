import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Table from "./components/Table";
import { fetchMonthsData } from "./store/monthsDataSlice";

function App() {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchMonthsData())
  }, [])
  return (
    <div className="App">
      <Table/>
    </div>
  );
}

export default App;
