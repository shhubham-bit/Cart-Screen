import { Pressable, StyleSheet, Text, View } from "react-native"
import CartTheme from "../styles/theme"


const CustomButton = ({text, buttonStyle = {}, textStyle, clickListener})=> {
    return(
        <Pressable
            style={buttonStyle|| {}}
            onPress={clickListener}>
                <Text style={textStyle}>
                    {text}
                </Text>
        </Pressable>
    )
}

const CounterButton = ({countValue, addCallback, removeCallback})=> {
    return(
        <View >
            <View style = {style.counterAddView}>
                <CustomButton
                    buttonStyle={style.removeAddItemStyle}
                    text = {"-"}
                    textStyle = {style.labelStyle}
                    clickListener = {removeCallback}
                />
                <Text style = {style.counterView}>
                    {countValue}
                </Text>
                <CustomButton 
                    buttonStyle={style.increaseAddItemStyle}
                    text = {"+"}
                    textStyle = {style.labelStyle}
                    clickListener = {addCallback}
                />
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    removeAddItemStyle: {
        backgroundColor: CartTheme.color.greenA200,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        color: CartTheme.color.white,
        textAlign: 'justify',
        textAlignVertical: 'center',
        paddingHorizontal: 5,
        paddingVertical: 1
    },
    increaseAddItemStyle: {
        backgroundColor: CartTheme.color.greenA200,
        borderTopRightRadius: 15,
        borderBottomEndRadius: 15,
        color: CartTheme.color.white,
        textAlignVertical: 'center',
        paddingHorizontal: 5,
        paddingVertical: 1
    },
    counterView: {
        ...CartTheme.typoGraphy.s,
        alignItems: 'center',
        color: CartTheme.color.black,
        textAlign: 'center',
        paddingHorizontal: 6,
        paddingVertical: 1
    },
    counterAddView: {
        flex: 1,
        borderRadius: 15,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        right: 15,
        alignItems: 'center',
    },
    labelStyle: {
        color: CartTheme.color.white
    }
})



export {CustomButton, CounterButton}