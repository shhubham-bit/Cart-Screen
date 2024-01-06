import { useEffect, useState } from "react";
import { FlatList} from "react-native";
import ApiMethods from "../dataSource/Remote";
import CartProductItem from "./CartItem";


function Cartproducts(props){

    const [cartProducts, setCartData] = useState([])

    useEffect(() => {
        fetchCartApi()
    }, []) 

    function fetchCartApi(){
        ApiMethods.fetchCartDetail( (data) => {
            data.map(element => {
                element.added = 0
                return element
            })
            //console.log("=================== after map ", data)
            setCartData(data)
        }, (error) => {
            console.log("fetchcart api error: ", error)
        })
    }

    const increseCount = (cartItem, value) => {
        let totalPrice = 0
        let productCount = 0
        cartProducts.map((data) => {
            if(data.id===cartItem.item.id){
                data.added += value
            }
            if(data.added >= 1){
                totalPrice += (data.price * data.added)
                ++productCount
            }
            return data
        })
        props.priceCallback(totalPrice, productCount)
        console.log("increase count =======+++++kkk+p------", totalPrice, productCount, props)
    }

    return(
        <FlatList
            data = {cartProducts}
            renderItem={(cartItem) => 
                <CartProductItem 
                    product={cartItem}
                    countCallback = {increseCount}
                />
            }
            keyExtractor={data => data.id}
        >
        </FlatList>   
    )
}


export default Cartproducts