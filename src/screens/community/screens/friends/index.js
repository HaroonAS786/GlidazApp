import React from 'react'
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native'

import { Row } from 'native-base'
import ButtonComponent from '../../../../components/ButtonComponent'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import Header from '../../../../components/common/Header'
import { themeColors } from '../../../../config/colors'
import SearchComponentCard from '../search/components/searchCard'
import FriendRequestCard from './components/friendCard'
import SuggestionCard from './components/suggestionCard'
import getStyles from './styles'

const FriendsScreen = (props) => {
    const styles = getStyles()

    return (
        <View style={styles.mainContainer}>
            <Spacer height={25} />
            <Header label={"Friends"} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Spacer height={30} />
                <Row space={2}>
                    <ButtonComponent
                        label={'Suggestions'}

                        onPress={() => {
                            props.navigation.navigate("SeeSuggestionFriends")
                        }}
                        buttonTextColor={themeColors.white}
                        buttonContainerStyle={{ width: 100, padding: 0 }}
                    />
                    <ButtonComponent
                        label={'Friends'}

                        onPress={() => {
                            props.navigation.navigate("SeeFriends")
                        }}
                        buttonTextColor={themeColors.black}
                        buttonContainerStyle={{ width: 100, padding: 0, backgroundColor: 'lightgrey' }}
                    />
                </Row>
                <SearchComponentCard />
                <Spacer height={40} />
                <Row justifyContent={'space-between'}>
                    <CustomText bold >Friend request</CustomText>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate("SeeFriends")
                    }}>
                        <CustomText bold body color={themeColors.authPrimary}>See all</CustomText>
                    </TouchableOpacity>

                </Row>
                <Spacer height={25} />
                <FlatList
                    data={[0, 1, 2, 3, 4]}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, idex }) => <FriendRequestCard />}
                    keyExtractor={(item, index) => index.toString()}
                />

                <Spacer height={25} />
                <Row justifyContent={'space-between'}>
                    <CustomText bold >Please you may now</CustomText>
                </Row>
                <Spacer height={25} />
                <FlatList
                    data={[0, 1, 2, 3, 4]}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, idex }) => <SuggestionCard />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
        </View>
    )
}

export default FriendsScreen