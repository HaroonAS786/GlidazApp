import { Avatar, Column, Divider, Row, VStack } from 'native-base'
import React, { useRef } from 'react'

import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import BottomSheetModal from '../../../../../components/BottomSheetModal'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import Header from '../../../../../components/common/Header'
import { themeColors } from '../../../../../config/colors'
import { seeFriendsData } from '../../../../../utils/helper'
import SeeFriendCard from './seeFriendCard'

const SeeFriends = (props) => {
    const refFriendModal = useRef(null)

    return (
        <View style={styles.container}>
            <Spacer height={25} />
            <Header isHeader2 label={"Friends"} backPress={() => props.navigation.goBack()} />
            <Spacer height={25} />
            <Row justifyContent={'space-between'}>
                <CustomText bold >123 friends</CustomText>
                <CustomText bold body color={themeColors.authPrimary}>Filter</CustomText>
            </Row>
            <Spacer height={25} />
            <FlatList
                data={[0, 1, 2, 3, 4]}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, idex }) => <SeeFriendCard menuPress={() => refFriendModal.current.open()} />}
                keyExtractor={(item, index) => index.toString()}
            />
            <BottomSheetModal
                refRBSheet={refFriendModal} height={Dimensions.get('window').height * 0.5}
            >
                <View style={{ width: Dimensions.get('window').width, paddingHorizontal: 16 }}>
                    <Spacer height={16} />
                    <Row space={2}>
                        <Avatar size={'lg'} source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" }} />
                        <Column space={1}>
                            <CustomText bold body>Callya Ashley</CustomText>
                            <CustomText bold body2 color={'grey'}>Friend request</CustomText>
                        </Column>
                    </Row>
                    <Spacer height={12} />
                    <Divider />
                    <Spacer height={25} />
                    <VStack space={6}>
                        {seeFriendsData.map((val, index) =>
                            <TouchableOpacity>
                                <Row alignItems={'center'} space={3}>
                                    {val.svg}
                                    <CustomText h6 color='black'>{val.label}</CustomText>

                                </Row>
                            </TouchableOpacity>
                        )}
                    </VStack>
                </View>
            </BottomSheetModal>
        </View>
    )
}

export default SeeFriends

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        flex: 1
    }
})