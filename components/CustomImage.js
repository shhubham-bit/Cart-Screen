import { Image } from "react-native"

const CustomImage = ({imageUrl, style})=> {
    return(
        <Image
            style = {style}
            source={{
                uri: imageUrl
            }}>
        </Image>
    )
}

const CustomImageWithId = ({resourseId, style})=> {
    return(
        <Image
            style = {style}
            source={resourseId}>
        </Image>
    )
}


export {CustomImage, CustomImageWithId}