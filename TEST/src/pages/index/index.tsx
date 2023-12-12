import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

interface IImage {
  id: number
  url: string
}

interface IState {
  dateList:IImage[]
} 

export default class Index extends Component<any,IState> {
  constructor(props:any){
    super(props)
    this.state = {
      dateList:[]
    }
  }
  componentDidMount () {
    let imgList:IImage[]=[]
    for(let i = 1;i<15;i++){
      imgList.push({
        id:i,
        url:''
      })
    }
    this.setState({
      dataList: imgList
    })
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        {
          this.state.dateList.map(imgItem =>(
            <View key={imgItem.id}>
              <Image mode='heightFix' src={imgItem.url} />
            </View>
          ))
        }
      </View>
    )
  }
}
