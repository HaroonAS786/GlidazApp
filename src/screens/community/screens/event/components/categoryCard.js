import React from 'react'
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native'

import CustomText from '../../../../../components/CustomText'

const CategoryCard = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyQ1nzcsckeOHfGoHxrQPe_BRYvCUqwPaaTKXwQ4hkvqZbU3z8SUZWzEz4KJA_iizoPU&usqp=CAU" }} />
            <CustomText bold body>Favoruite</CustomText>
        </TouchableOpacity>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 12
    },
    container: {
        width: Dimensions.get('window').width / 2.2,
        alignItems: 'center',
        marginTop: 10,
    }

})