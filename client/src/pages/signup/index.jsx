import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { ClTitleBar, ClForm, ClFormItem, ClInput, ClRadio, ClCheckbox, ClButton } from "mp-colorui"
import "./index.scss"

const classGroup = [{
    key: "大一",
    value: "1"
}, {
    key: "大二",
    value: "2"
}]

const majorGroup = [{
    key: "CSE",
    value: "CSE"
}, {
    key: "ACMS",
    value: "ACMS"
}, {
    key: "Psychology",
    value: "Psychology"
}, {
    key: "English",
    value: "English"
}]

export default class Signup extends Component {
    config = {
        navigationBarTitleText: 'Major Fair 报名'
    }

    render() {
        return (
            <View>
                <ClTitleBar
                    title="报名表"
                    bgColor="gradualPurple"
                    textColor="white"
                    borderColor="white"
                />
                <ClForm
                    className="form"
                >
                    <ClFormItem>
                        <ClInput
                            title="姓名"
                            placeholder="请输入姓名"
                        />
                    </ClFormItem>
                    <ClFormItem>
                        <ClRadio
                            title="年级"
                            radioGroup={classGroup}
                            type="form"
                        />
                    </ClFormItem>
                    <ClFormItem>
                        <ClCheckbox
                            title="感兴趣的专业"
                            type="form"
                            checkboxGroup={majorGroup}
                        />                   
                    </ClFormItem>
                    <ClFormItem>
                        <ClButton
                            className="button"
                            shape="round"
                            long
                            onClick={() => {
                                Taro.navigateTo({
                                    url: "../confirm/index"
                                })
                            }}
                        >提交报名信息</ClButton>
                    </ClFormItem>
                </ClForm>
            </View>
        )
    }
}
