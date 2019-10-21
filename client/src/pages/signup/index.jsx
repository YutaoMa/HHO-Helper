import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { ClForm, ClFormItem, ClInput, ClRadio, ClCheckbox } from "mp-colorui"

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
                <ClForm>
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
                        />
                    </ClFormItem>
                    <ClFormItem>
                        <ClCheckbox
                            title="感兴趣的专业"
                            type="form"
                            checkboxGroup={majorGroup}
                        />                   
                    </ClFormItem>
                </ClForm>
            </View>
        )
    }
}
