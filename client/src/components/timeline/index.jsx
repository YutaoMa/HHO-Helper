import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"
import { ClTitleBar, ClTimeline } from "mp-colorui"

const evtList = [{
    node: "2019-10"
},{
    time: "2019-10-11",
    title: "Major Fair",
    content: ["我和专业有个约会"]
}, {
    time: "2019-10-8",
    title: "秋季招新",
    content: ["HHO 因你们而美好"]
}, {
    node: "2019-9"
}, {
    time: "2019-9-27",
    title: "新生趴",
    content: ["开学第一件事做什么"]
}, {
    node: "2019-7"
}, {
    time: "2019-7-1",
    title: "新生见面会",
    content: ["Hello, New Huskies!"]
}]

export default function Timeline() {
    return (
        <View
            onClick={() => {
                Taro.navigateTo({
                    url: "../../pages/signup/index"
                })
            }}
        >
            <ClTitleBar
                title="近期活动"
                bgColor="gradualPurple"
                textColor="white"
                borderColor="white"
            />
            <ClTimeline
                times={evtList}
            />
        </View>
    )
}
