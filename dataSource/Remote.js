
export default class ApiMethods{

    static fetchCartDetail(success, error){
        fetch("https://fakestoreapi.com/products")
        .then((apiResponse) => apiResponse.json())
        .then((data) => {
            success(data)
        } )
        .catch((ex) => {
            error(ex)
        })
    }

}