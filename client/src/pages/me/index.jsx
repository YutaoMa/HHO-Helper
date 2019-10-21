import Taro, { Component } from "@tarojs/taro"
import qrImage from "../../images/qr.jpg"
import "./index.scss"

export default class Me extends Component {
    render() {
        return (
            <View className="me">
                <Image
                    className="image"
                    src={qrImage}
                    mode="aspectFill"
                />
            </View>
        )
    }
}
