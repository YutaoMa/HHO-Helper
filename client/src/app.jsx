import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/signup/index',
      'pages/confirm/index',
      'pages/me/index'
    ],
    tabBar: {
      selectedColor: "#4b2e83",
      list: [{
        text: "活动",
        pagePath: "pages/index/index",
        iconPath: "images/index.png",
        selectedIconPath: "images/index-active.png"
      }, {
        text: "我",
        pagePath: "pages/me/index",
        iconPath: "images/me.png",
        selectedIconPath: "images/me-active.png"
      }]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#4b2e83',
      navigationBarTitleText: 'UW 小帮手',
      navigationBarTextStyle: 'white'
    },
    cloud: true
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
