import { useState } from "react";
import Cartproducts from "./CartProducts";
import PriceLayout from "./PriceLayout";
import { View } from "react-native";

const CartDetail= ()=> {

    const [totalPrice, setTotalPrice] = useState()
    const [addedProduct, setAddedProduct] = useState(0)

    const priceUpdateCallback = (totalPrice, productCount) => {
        console.log("========price====", totalPrice, productCount)
        setTotalPrice(totalPrice)
        setAddedProduct(productCount)
    }

    return(
        <View style = {style.surface}>
            <View style = {style.cartListing}>
                <Cartproducts  priceCallback = {priceUpdateCallback}/>
            </View>
            { addedProduct > 0 && <View style = {style.priceStyle}>
                    <PriceLayout totalPrice={totalPrice} addedProduct={addedProduct} />
                </View>
            }
        </View>
    )
}
const style = {
    surface: {
        flex: 1, flexDirection: 'column'
    },
    cartListing: {
        flex: 1
    },
    priceStyle: {
        flex: 0.1
    }
}

export default CartDetail