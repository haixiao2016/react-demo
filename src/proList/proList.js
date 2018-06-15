import React from 'react'
import './proList.scss'
import axois from 'axios'
import { withRouter } from 'react-router-dom'

export default withRouter(class ProList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      proLists:[]
    }
  }
  
  componentDidMount() {
    // dom渲染完成，获取数据
    axois.get( `/subject/502/sorted_goods`,{sort_type:'PRIORITY',page:1,size:100})
      .then(res=>{
        const proLists = res.data.goods_list
        this.setState({
          proLists
        })
      }).catch(err=>{
        console.log(err)
      })
  }

  render(){
    return (
      <div>
        <div className = "pro-container">
          {
            this.state.proLists.map(item=>
              <div className = "pro-item" key = {item.goods_id} onClick = {()=>this.seeDetails(item)}>
                <img src = {item.thumb_url} alt = {item.short_name} className = "item-img"/>
                <p className="item-title">{item.goods_name}</p>
                <div className = "item-bottom">
                  <span className = "item-price">￥{item.normal_price/100}</span>
                  <span className = "item-old-price">￥{item.market_price/100}</span>
                  <span className = "item-total">已团{date_format(item.cnt)}件</span>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
  seeDetails(row){
    this.props.history.push({pathname:`/details`,state: {id:row.goods_id}})
  }
})

const date_format = date => {
  if(date>1000){
    return (date/10000).toFixed(1)  + '万'
  }
  return date
}