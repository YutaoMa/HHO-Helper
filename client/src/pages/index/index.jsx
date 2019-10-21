import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

import Banner from "../../components/banner/index"
import Timeline from "../../components/timeline/index"

export default class Index extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Banner />
        <Timeline />
      </View>
    )
  }
}
