import Taro, { Component } from "@tarojs/taro"
import { Text } from "@tarojs/components"
import { ClIcon, ClButton } from "mp-colorui"
import "./index.scss"

export default class Confirm extends Component {
    config = {
        navigationBarTitleText: '报名成功'
    }

    render () {
        return (
            <View
                className="confirm"
            >
                <ClIcon
                    className="icon"
                    iconName="roundcheck"
                    size="slarge"
                    color="purple"
                />
                <View className="text">
                    <Text>我们已经收到你的报名，请在 “我” 页面确认签到二维码</Text>
                </View>
                <ClButton
                    className="button"
                    shape="round"
                    long
                    onClick={() => {
                        Taro.switchTab({
                            url: "../index/index"
                        })
                    }}
                >返回首页</ClButton>
            </View>
        )      
    }
}
