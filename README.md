### 通过`create-react-app`搭建

###### 遇见的一些问题和解决办法

###### 跨域访问

```
//修改package.json,直接在最后就行

"proxy": "你设置的网址"

```
###### sass 支持(开发环境设置，生产环境同理)
* 安装sass必须的插件:``` npm i sass-loader node-sass -D```
* 
  * 在`node_modules/react-scripts/config`下找到`webpack.config.dev.js`
  * 在`exclude`中加上`/\.scss$/,/.sass$/`
  * 在loaders中添加
    ```
      {
        test: /\.(scss|sass)$/,
        loaders:['style-loader','css-loader','sass-loader']
      }
    ```
#### react-router相关（4.x版本）
 ###### 设置路由激活状态
 ```
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
 ```
 ###### 使用js跳转路由
```

// 使用 withRouter(component)

import { withRouter } from 'react-router-dom'
export default withRouter(
  class XXX extends React.Component{
    ...
  } 
  click(){
    this.props.history.push()
  }
)
```
###### 接收路由传递过来的参数
>查了好多相关资料，都说可以使用 `this.props.params`访问，但是我怎么都访问不到
我于是打印了相关数据，发现 `this.props.match.params`可以获得相关参数，不知道是我的问题还是新的路由修改了。。。

