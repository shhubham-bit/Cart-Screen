import { StyleSheet, View} from "react-native"
import { CustomImage } from "../components/CustomImage"
import { CustomText } from "../components/CustomText"
import { ItemInformation } from "./ProductInformation"
import { CustomButton, CounterButton } from "../components/CustomButton"
import CartTheme from "../styles/theme"


const CartProductItem = (props) => {


    const increseCount = ()=> {
        props.countCallback(props.product, +1)
    }

    const decreaseCount = ()=> {
        props.countCallback(props.product, -1)
    }

    return(
        <View style = {style.ProductCarStyle}>
            <CustomImage  
                imageUrl={props.product.item.image}
                style={style.productImageStyle}
                />
            <View style={style.viewStyel}>
                <CustomText 
                    style= {style.productNameStyel}
                    value = {props.product.item.category}
                />
                <ItemInformation product={props.product} />
            </View>
            <View >
            {   props.product.item.added == 0 ?
                    <CustomButton
                    buttonStyle={style.addCTAStyle}
                        text={"ADD"} 
                        textStyle={style.addCtaLabel}
                        clickListener={increseCount}
                    /> :
                    <CounterButton 
                        countValue={props.product.item.added}
                        addCallback={increseCount}
                        removeCallback={decreaseCount}
                    />             
            } 
            </View>
            
        </View>
    )
}

export default CartProductItem

const style = StyleSheet.create({
    ProductCarStyle:{
        backgroundColor: CartTheme.color.white,
        paddingBottom: CartTheme.spacing.s,
        margin: CartTheme.spacing.m,
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: .4,
        borderBlockColor: CartTheme.color.grey
    },
    productImageStyle: {
        height: 60,
        width:  60,
        borderColor: CartTheme.color.grey,
        borderWidth: 1,
        padding: CartTheme.spacing.s
    },
    viewStyel: {
        paddingStart: CartTheme.spacing.m,
        flex: 1,
        justifyContent: 'space-between'
    },
    productNameStyel: {
        ...CartTheme.typoGraphy.heading4Body,
        color: 'black',
        fontWeight: '600',
    },
    addCtaLabel: {
        ...CartTheme.typoGraphy.paragraph,
        color: CartTheme.color.white
    },
    addCTAStyle: {
        backgroundColor: CartTheme.color.greenA200,
        position: "absolute", 
        paddingHorizontal: CartTheme.spacing.l,
        paddingVertical: 3,
        borderRadius: 15,
        top: 0,
        right: 10,
        alignItems: 'flex-end',
        alignContent: 'center'
    }
})
