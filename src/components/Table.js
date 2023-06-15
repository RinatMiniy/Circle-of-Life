import { useSelector } from "react-redux"

const config = [
  {
    label: 'Months',
    render: (data) => data.monthName,
  },
  {
    label: 'work',
    render: (data) => data.spheres.work,
  },
  {
    label: 'hobby',
    render: (data) => data.spheres.hobby,
  },
  {
    label: 'family',
    render: (data) => data.spheres.family,
  },
  {
    label: 'friends',
    render: (data) => data.spheres.friends,
  },
  {
    label: 'rest',
    render: (data) => data.spheres.rest,
  },
  {
    label: 'self-development',
    render: (data) => data.spheres.selfDevelopment,
  },
  {
    label: 'spiritual',
    render: (data) => data.spheres.spiritual,
  },
  {
    label: 'physical',
    render: (data) => data.spheres.physical,
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
                <th>{cellData.render(month)}</th>
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