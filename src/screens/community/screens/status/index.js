import { Center, Row } from 'native-base'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Easing, Image, StyleSheet, View } from 'react-native'

import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import { themeColors } from '../../../../config/colors'

const UserStatusScreen = (props) => {

    const [statusProgress, setStatusProgress] = useState(100); // Assuming statusProgress ranges from 0 to 1
    const animatedProgress = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        setTimeout(() => {
            props.navigation.goBack()
        }, 3000)

    }, [])

    useEffect(() => {
        // Update animatedProgress when statusProgress changes
        Animated.timing(animatedProgress, {
            toValue: statusProgress,
            duration: 1000, // Duration in milliseconds for the animation
            easing: Easing.linear, // Easing function for the animation
            useNativeDriver: false, // You might need to set this to true depending on your component
        }).start();
    }, [statusProgress]);

    return (
        <View style={styles.container}>
            <Spacer height={20} />
            <Row style={{ paddingHorizontal: 16 }} space={1}>
                {/* {[0, 1, 2].map((val, index) => <View style={styles.statusLine} />)} */}
                {[0, 1, 2].map((val, index) => <Animated.View style={[styles.progressBar, { flex: animatedProgress }]} />

                )}
            </Row>
            <Spacer height={100} />
            {
                ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyC24C50oL_qcw1OqpWdRlFmDY3NRIjZzeM4KsEHg&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5s18cNTBDqxHei0GZoU6YfBW2xRTCi3bVQ&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4M3iMMBBBnD9wHd07tWcX5pFv69ujFklR3g&usqp=CAU"
                ].map((val, index) => <Image
                    source={{ uri: val }}
                    style={styles.image}
                />)
            }
            <Spacer height={100} />
            <Center>
                <CustomText color='white' body>2 Views</CustomText>
            </Center>
        </View >
    )
}

export default UserStatusScreen;

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        flex: 1,
    },

    statusLine: {
        backgroundColor: themeColors.white,
        flex: 1,
        height: 5,
        borderRadius: 10
    },

    image: {
        height: Dimensions.get('window').width * 0.4
    },
    progressBar: {
        backgroundColor: 'grey',
        height: 5
        // Customize the color of the progress bar
    },
})