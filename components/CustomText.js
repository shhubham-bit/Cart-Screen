import { Text, View } from "react-native"


const CustomText = ({value, style})=>{
    return(
        <Text style = {style}>
            {value}
        </Text>
    )
}

const PriceText = ({currency, price, style})=>{
    return(
        <Text style = {style}>
            {currency}{price}
        </Text>
    )
}

const TextWithLabel = ({orientation, label, labelStyle, textValue, textStyle})=> {
    return(
        <View style = {{flexDirection: {orientation}}}>
                <Text style= {labelStyle}>
                    {label.toUpperCase()}
                </Text>
                <Text style= {textStyle}>
                    {textValue}
                </Text>
        </View>
    )
}

export {CustomText, TextWithLabel, PriceText}