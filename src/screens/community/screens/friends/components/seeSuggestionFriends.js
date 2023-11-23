import { Row } from 'native-base'
import React from 'react'

import { FlatList, StyleSheet, View } from 'react-native'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import Header from '../../../../../components/common/Header'
import SuggestionCard from './suggestionCard'

const SeeSuggestionFriends = (props) => {

    return (
        <View style={styles.container}>
            <Spacer height={25} />
            <Header isHeader2 label={"Suggestions"} backPress={() => props.navigation.goBack()} />
            <Spacer height={50} />
            <Row justifyContent={'space-between'}>
                <CustomText bold >People you may know</CustomText>
            </Row>
            <Spacer height={25} />
            <FlatList
                data={[0, 1, 2, 3, 4]}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, idex }) => <SuggestionCard />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default SeeSuggestionFriends

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        flex: 1
    }
})



