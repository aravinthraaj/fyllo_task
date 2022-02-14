import { useState } from "react"
import "./Bigchart.css"
import { months, states } from "../../utils.js"

import {
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  Legend,
} from "recharts"

function Bigchart({
  title,
  data,
  dataKey,
  grid,
  parent,
  child,
  subtitle,
  defaultValue,
}) {
  const [statevalue, setStatevalue] = useState(states[0])
  const [monthvalue, setMonthvalue] = useState(months[0])

  function OnchangeSetstatevalue(e) {
    setStatevalue(e.target.value)
  }
  function OnchangeSetmonthvalue(e) {
    setMonthvalue(e.target.value)
  }

  let chartData = data.filter((obj) => {
    if (obj["state"] === statevalue && obj["month"] === monthvalue) {
      return true
    }
  })
  for (let element of chartData) {
    element["requirement_in_mt_"] = parseFloat(element["requirement_in_mt_"])
    element["availability_in_mt_"] = parseFloat(element["availability_in_mt_"])
  }


  return (
    <div className="bigchart">
      <h3 className="bigchartTitle">{title}</h3>

      <div className="bigchartSelect">
        <h5>Month</h5>
        <select onChange={OnchangeSetmonthvalue}>
          {months.map((e) => {
            return <option key={e} value={e}>{e}</option>
          })}
        </select>
        <h5>State</h5>
        <select onChange={OnchangeSetstatevalue}>
          {states.map((e) => {
            return <option key={e} value={e}>{e}</option>
          })}
        </select>
        {chartData.length ? null : (
          <h6 className="errordata">No data available to show</h6>
        )}
      </div>
      <ResponsiveContainer width="100%" height="100%" aspect={2 / 1}>
        <BarChart
          width={700}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"product"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="requirement_in_mt_" fill="#8884d8" />
          <Bar dataKey="availability_in_mt_" fill="#FF6347" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Bigchart