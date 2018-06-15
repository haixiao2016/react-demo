import React from 'react'

export default class Details extends React.Component{
  render() {
    return(
      <div>
        商品详情页，你点击的商品id是：{this.props.location.state.id}
      </div>
    )
  }
}