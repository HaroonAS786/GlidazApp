import { Center, VStack } from 'native-base'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import ButtonComponent from '../../../../components/ButtonComponent'
import Spacer from '../../../../components/Spacer'
import TextInputComponent from '../../../../components/TextInputComponent'
import Header from '../../../../components/common/Header'
import { themeColors } from '../../../../config/colors'

const AddEventCategory = (props) => {
    const { headerLabel } = props?.route?.params ?? {}

    return (
        <View style={styles.container}>
            <Spacer height={20} />
            <Header isHeader2 label={headerLabel ? headerLabel : 'Create event category'} backPress={() => props.navigation.goBack()} />
            <Spacer height={20} />
            <VStack style={styles.inputContainer}>
                <Spacer height={20} />
                <TextInputComponent
                    label={"Event Name"}
                    inputStyle={{ borderRadius: 10 }}
                />
                <Spacer height={10} />
                <TextInputComponent
                    label={"Organizer"}
                    inputStyle={{ borderRadius: 10 }}
                />
                <Spacer height={10} />
                <TextInputComponent
                    label={"Number of participants"}
                    inputStyle={{ borderRadius: 10 }}
                />
                <Spacer height={10} />
                <TextInputComponent
                    label={"Time"}
                    inputStyle={{ borderRadius: 10 }}
                />
                <Spacer height={10} />
                <TextInputComponent
                    label={"Content"}
                    inputStyle={{ borderRadius: 10, height: 100 }}
                />
                <Spacer height={80} />
                <Center>
                    <ButtonComponent
                        label={headerLabel === "Edit event category" ? "Update" : 'Create'}
                        // loader={loading}
                        onPress={() => {
                            props.navigation.navigate("EventCategory")
                        }}

                        buttonTextColor={themeColors.black}
                        buttonContainerStyle={{ backgroundColor: 'white', padding: 0, width: 100, borderColor: "#082F49", borderWidth: 1 }}
                    />
                </Center>
            </VStack>
        </View>
    )
}

export default AddEventCategory

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white', flex: 1
    },
    inputContainer: {
        paddingHorizontal: 16
    }

})