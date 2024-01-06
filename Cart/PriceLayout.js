import { StyleSheet, Text, View } from "react-native"
import CartTheme from "../styles/theme"
import { PriceText, CustomText } from "../components/CustomText"

const PriceLayout = ({totalPrice, addedProduct}) => {

    return(
        <View >
            <View style= {style.cardStyle}>
                <PriceText 
                        style = {style.priceStyle}
                        price = {totalPrice.toFixed(2)}
                        currency = {"$"}
                ></PriceText>
                
                <CustomText 
                    style={style.viewCartLabel}
                    value={`VIEW CART (${addedProduct})`}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    cardStyle: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute'
    },
    priceStyle: {
        ...CartTheme.typoGraphy.titleBold,
        backgroundColor: CartTheme.color.yellowA700,
        paddingStart: CartTheme.spacing.m,
        paddingHorizontal: CartTheme.spacing.m,
        textAlign: 'center',
        paddingVertical: CartTheme.spacing.l,
        flex: 0.3
    },
    viewCartLabel: {
        flex: 0.7,
        ...CartTheme.typoGraphy.title,
        textAlign: 'center',
        backgroundColor: CartTheme.color.yellow600,
        paddingVertical: CartTheme.spacing.l,
    }
})

export default PriceLayout