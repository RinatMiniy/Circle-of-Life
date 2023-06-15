import { useSelector } from "react-redux"
import Cell from "./Cell"

const config = [
  {
    label: 'Months',
    render: (data) => <th>{data.monthName}</th>,
  },
  {
    label: 'work',
    render: (data) => <Cell startValue={data.spheres.work}/>,
  },
  {
    label: 'hobby',
    render: (data) => <Cell startValue={data.spheres.hobby}/>,
  },
  {
    label: 'family',
    render: (data) => <Cell startValue={data.spheres.family}/>,
  },
  {
    label: 'friends',
    render: (data) => <Cell startValue={data.spheres.friends}/>,
  },
  {
    label: 'rest',
    render: (data) => <Cell startValue={data.spheres.rest}/>,
  },
  {
    label: 'self-development',
    render: (data) => <Cell startValue={data.spheres.selfDevelopment}/>,
  },
  {
    label: 'spiritual',
    render: (data) => <Cell startValue={data.spheres.spiritual}/>,
  },
  {
    label: 'physical',
    render: (data) => <Cell startValue={data.spheres.physical}/>,
  },
  {
    label: 'score',
    render: (data) => <th>{Object.values(data.spheres).reduce((a,b) => a + b)}</th>
  },
]

function Table() {
  const dataStore = useSelector((state) => state.monthsData)

  return(
    <table>
    <thead>
      <tr>
        {config.map((headerData)=> {
          return <th  key = {headerData.id} >{headerData.label}</th>
        })}
      </tr>
    </thead>
    <tbody>
       {
        dataStore.map((month) => 
          <tr>
            {
              config.map((cellData) => 
                cellData.render(month)
              )
            }
          </tr>
        )
       }
    </tbody>
  </table>
  )
}

export default Table