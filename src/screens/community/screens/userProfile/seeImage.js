import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'

import Spacer from '../../../../components/Spacer'
import Header from '../../../../components/common/Header'

const ViewImage = (props) => {

    const { imageUrl } = props?.route?.params ?? {}

    return (
        <View style={styles.container}>
            <Spacer height={25} />
            <Header isHeader1 backPress={() => props.navigation.goBack()} />
            <Spacer height={150} />
            <Image style={styles.image} resizeMode='contain' source={imageUrl ? imageUrl : { uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }}
            />
        </View>
    )
}

export default ViewImage

const styles = StyleSheet.create({

    image: {
        height: Dimensions.get('window').height * 0.4
    },
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})