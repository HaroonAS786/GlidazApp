import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { themeColors } from '../../config/colors'
import { Input, Row, SearchIcon } from 'native-base'
import CustomText from '../CustomText'
import Spacer from '../Spacer'

const SearchBarComponent = ({ onChangeText, onPress }) => {

    return (
        <Row style={styles.container}>
            <Row alignItems={'center'}>
                <SearchIcon size={'25'} />
                <Input
                    variant="unstyled"
                    placeholder='Search'
                    onChangeText={onChangeText}
                    size={14}
                    maxWidth={280}
                />
            </Row>
        </Row>
    )
}

export default SearchBarComponent

const styles = StyleSheet.create({

    container: {
        backgroundColor: themeColors.white,
        borderRadius: 100,
        height: 44,
        borderColor: themeColors.grey,
        borderWidth: .5,
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 25

    }

})