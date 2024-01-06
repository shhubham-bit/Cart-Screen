import { SafeAreaView, View, StyleSheet } from "react-native";
import CartHeader from "./CartHeader";
import CartDetail from "./CartDetail";
import CartTheme from "../styles/theme";


function CartScreen(){
    
    return(
        <SafeAreaView style = {style.surfaceView}>
            <CartHeader/>
            <CartDetail/>
        </SafeAreaView>
    )

}

const style = StyleSheet.create({
    surfaceView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: CartTheme.color.white
    },
    bodyStyle: {
        backgroundColor: CartTheme.color.white
    }
})


export default CartScreen