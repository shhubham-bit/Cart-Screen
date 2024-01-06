import { StyleSheet, View } from "react-native"
import { TextWithLabel } from "../components/CustomText"
import CartTheme from "../styles/theme"


const ItemInformation = (props)=> {
    return(
        <View 
            style={style.productDetailView}>
            <TextWithLabel 
                orientation={'column'}
                label={"Per Unit"}
                labelStyle={style.itemlabel}
                textValue={"$"+props.product.item.price.toFixed(2)}
                textStyle={style.itemValue}
            />
            <TextWithLabel 
                orientation={'column'}
                label={"rate"}
                labelStyle={style.itemlabel}
                textValue={props.product.item.rating.rate}
                textStyle={style.itemValue}
            />
            <TextWithLabel 
                orientation={'column'}
                label={"Pack Size"}
                labelStyle={style.itemlabel}
                textValue={2}
                textStyle={style.itemValue}
            />
            <TextWithLabel 
                orientation={'column'}
                label={"Total"}
                labelStyle={style.itemlabel}
                textValue={"$"+(props.product.item.price* props.product.item.added).toFixed(2)}
                textStyle={style.itemValue}
            />
        </View>
    )
}

export {ItemInformation}

const style = StyleSheet.create({
    itemlabel: {
        ...CartTheme.typoGraphy.smallLabel,
        color: 'grey',
    },
    itemValue: {
        ...CartTheme.typoGraphy.paragraph,
        color: 'black',
    },
    productDetailView: {
        flex: '0.8',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginEnd: 40
    }
})