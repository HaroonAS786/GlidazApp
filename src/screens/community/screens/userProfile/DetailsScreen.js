import React from 'react'
import { StyleSheet, View } from 'react-native'

import ButtonComponent from '../../../../components/ButtonComponent'
import Spacer from '../../../../components/Spacer'
import TextInputComponent from '../../../../components/TextInputComponent'
import Header from '../../../../components/common/Header'
import { themeColors } from '../../../../config/colors'

const DetailsScreen = (props) => {

    return (
        <View style={styles.container}>
            <Spacer height={25} />
            <Header isHeader2 label={"Edit"} backPress={() => props.navigation.goBack()} />
            <Spacer height={40} />
            <TextInputComponent
                placeholder={"Full Name"}
                label={"Full Name"}
            />
            <Spacer height={12} />
            <TextInputComponent
                placeholder={"Profession"}
                label={"Profession"}
            />
            <Spacer height={12} />
            <TextInputComponent
                placeholder={"Education"}
                label={"Education"}
            />
            <Spacer height={12} />
            <TextInputComponent
                placeholder={"Gender"}
                label={"Gender"}
            />
            <Spacer height={12} />
            <TextInputComponent
                placeholder={"Marital Status"}
                label={"Marital Status"}
            />
            <Spacer height={12} />

            <ButtonComponent
                label={'Upadate'}
                onPress={() => {
                    props.navigation.goBack()
                }}
                buttonTextColor={themeColors.white}
            />
        </View>
    )
}

export default DetailsScreen


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16
    }
})