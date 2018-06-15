import React,{Component} from 'react'
import './proList.scss'
import axois from 'axios'
class ProList extends Component {
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
        <div className="pro-container">
          {
            this.state.proLists.map(item=>
              <div className="pro-item" key={item.goods_id}>
                <img src={item.thumb_url} alt={item.short_name} className="item-img"/>
                <p className="item-title">{item.goods_name}</p>
                <div className="item-bottom">
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
}
const date_format = date => {
  if(date>1000){
    return (date/10000).toFixed(1) +'万'
  }
  return date
}
export default  ProList