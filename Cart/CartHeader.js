import { StyleSheet, View } from "react-native";
import { CustomText } from "../components/CustomText";
import CartTheme from "../styles/theme";
import { CustomImageWithId } from "../components/CustomImage";




function CartHeader(){
    return(
        <View >
            <View style = {style.headerViewStyle}>
                <CustomImageWithId
                    style = {style.iconStyle}
                    resourseId={require("../assets/resources/menu.png")}
                />
                <CustomText 
                    style={style.headerTextStyle}
                    value={"Golder Corral - Addison"}
                />
                <View style = {style.rightIcons}>
                    <CustomImageWithId
                        style = {style.iconStyle}
                        resourseId={require("../assets/resources/filter.png")}
                    />
                    <CustomImageWithId
                        style = {style.iconStyle}
                        resourseId={require("../assets/resources/search.png")}
                    />
                </View>  
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    headerViewStyle: {
        backgroundColor: CartTheme.color.greenA200,
        padding: CartTheme.spacing.m,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTextStyle: {
        ...CartTheme.typoGraphy.title,
        color: CartTheme.color.white,
        paddingStart: CartTheme.spacing.s,
        textAlign: 'left',
        
    },
    iconStyle: {
        ...CartTheme.iconStyle.large,
        marginHorizontal: CartTheme.spacing.s
    },
    rightIcons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

export default CartHeader