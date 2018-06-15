import React from 'react'
import { NavLink  } from 'react-router-dom' // # 如果需要使用`active`
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to = '/'>首页</NavLink ></li>
        </ul>
      </div>
    )
  }
}