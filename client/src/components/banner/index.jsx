import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"
import { ClSwiper } from "mp-colorui"
import event1Image from "../../images/event-1.png"
import event2Image from "../../images/event-2.png"

const imgList = [{
    url: event1Image,
    type: "image"
}, {
    url: event2Image,
    type: "image"
}]

export default function Banner() {
    return (
        <View>
            <ClSwiper
                type="card"
                list={imgList}
                autoplay
                circular
            />
        </View>
    )
}
