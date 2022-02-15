import { PieChart, Pie, Cell, Tooltip } from "recharts"
import "./Piechart.css"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

function Piechart({ data,title,dataKey }) {
  let chartData = {}
  for (let element of data) {
    if (chartData[element["product"]]) {
      chartData[element["product"]] += parseFloat(element[dataKey])
    } else {
      chartData[element["product"]] = parseFloat(element[dataKey])
    }
  }
  console.log(chartData)
  var sortable = []
  for (let data in chartData) {
    sortable.push([data, chartData[data]])
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1]
  })
  let finaldata = []
  for (let i = 0; i < 5; i++) {
    finaldata.push({ name: sortable[i][0], value: sortable[i][1] })
  }
  console.log(finaldata)
  return (
    <div className="piechart">
      <h3 className="piechartTitle">{title}</h3>
      <PieChart width={500} height={500} aspect={2/1}>
        <Pie
          data={finaldata}
          cx={250}
          cy={220}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={170}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  )
}

export default Piechart
