import React from "react"
import "./Sidebar.css"
import { Link } from "react-router-dom"
import {
  TrendingUp,
  PermIdentity,
} from "@mui/icons-material"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/product" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>

            <li className="sidebarListItem">
              {/* <Timeline className="sidebarIcon" /> */}
              Analytics
            </li>
            <li className="sidebarListItem">
              {/* <TrendingUp className="sidebarIcon" /> */}
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
