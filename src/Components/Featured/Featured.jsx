import { data } from "../../result.js"
import "./Featured.css"
import Chart from "../Chart/Chart"

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <Chart
          data={data}
          title="State wise product"
          grid
          parent="state"
          child="month"
          defaultValue={data[0]}
        />
      </div>
      <div className="featuredItem">
        <Chart
          data={data}
          title="Year wise product"
          grid
          parent="_year"
          child="product"
          defaultValue={data[0]}
        />
      </div>
      <div className="featuredItem">
        <Chart
          data={data}
          title="Month wise product"
          grid
          parent="month"
          child="product"
          defaultValue={data[0]}
        />
      </div>
    </div>
  )
}

export default Featured
