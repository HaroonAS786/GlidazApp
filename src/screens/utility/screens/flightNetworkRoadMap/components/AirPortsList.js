import { Avatar, Center, CloseIcon, Column, Divider, Row, VStack } from 'native-base'
import React from 'react'
import { Dimensions, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

import { BookTicketSVGComponent, DownLoadSVGComponent, MapIndicatorSVGComponent, ReadSVGComponent } from '../../../../../assets/svgs'
import ButtonComponent from '../../../../../components/ButtonComponent'
import CustomText from '../../../../../components/CustomText'
import Spacer from '../../../../../components/Spacer'
import SearchBarComponent from '../../../../../components/common/SearchBar'
import { themeColors } from '../../../../../config/colors'

const AirPortsListScreen = (props) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                {Platform.OS === 'ios' ? <Spacer height={90} /> : <Spacer height={20} />}
                <Row alignItem={'center'}
                    width={Dimensions.get('window').width}
                    style={{ justifyContent: 'center' }}>
                    <CustomText body bold>List of airports</CustomText>
                    <TouchableOpacity style={{ right: 30, position: 'absolute' }} onPress={() => props.navigation.goBack()}>
                        <CloseIcon size={'4'} color={themeColors.black} />
                    </TouchableOpacity>
                </Row>
                <Spacer height={30} />
                <Center>
                    <Row space={8}>
                        <ButtonComponent
                            label={'Domestic'}
                            // loader={loading}
                            onPress={() => {

                            }}
                            buttonTextColor={themeColors.white}
                            buttonContainerStyle={styles.domesticBtn}
                        />
                        <ButtonComponent
                            label={'International'}
                            // loader={loading}
                            onPress={() => {

                            }}
                            buttonTextColor={themeColors.black}
                            buttonContainerStyle={styles.internationalBtn}
                        />
                    </Row>
                </Center>
                <Spacer height={20} />
            </View>
            <Spacer height={8} />
            <View style={{ paddingHorizontal: 25 }}>
                <SearchBarComponent />
            </View>
            <Spacer height={8} />
            <ScrollView style={{ backgroundColor: 'white', paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
                <Spacer height={15} />
                <CustomText body >Nearby</CustomText>
                <Spacer height={20} />
                <Center>
                    <Row space={4}>
                        <ButtonComponent
                            label={'Book tickets'}
                            leftIcon={<BookTicketSVGComponent />}
                            // loader={loading}
                            onPress={() => {

                            }}
                            buttonTextColor={themeColors.white}
                            buttonContainerStyle={styles.domesticBtn}
                        />
                        <ButtonComponent
                            label={'Going to the airport'}
                            leftIcon={<MapIndicatorSVGComponent stroke={themeColors.black} />}
                            // loader={loading}
                            onPress={() => {
                                props.navigation.navigate("GoingAirPortMapScreen")
                            }}
                            buttonTextColor={themeColors.black}
                            buttonContainerStyle={styles.goingAirPortBtn}
                        />
                    </Row>
                </Center>
                <Spacer height={20} />
                <Row justifyContent={'space-between'}>
                    <Row space={2}>
                        <Avatar source={{ uri: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" }} />
                        <Column >
                            <CustomText body2 color={themeColors.utilityPrime}>Lorem ipsum dolor sit amet consectetur.</CustomText>
                            <CustomText body2 color={themeColors.grey} style={{ width: 200 }}>Lorem ipsum dolor sit amet consectetur. Iaculis fames at id phasellus tristique.</CustomText>
                        </Column>
                    </Row>
                    <Column space={2}>
                        <ReadSVGComponent />
                        <DownLoadSVGComponent />
                    </Column>
                </Row>
                <Spacer height={15} />
                <Divider />
                <Spacer height={15} />
                <CustomText body >More</CustomText>
                <Spacer height={15} />
                <VStack space={4}>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((value, index) => {
                        return (
                            <TouchableOpacity>
                                <Row justifyContent={'space-between'}>
                                    <Row space={2}>
                                        <Avatar source={{ uri: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" }} />
                                        <Column >
                                            <CustomText body2 color={themeColors.utilityPrime}>Lorem ipsum dolor sit amet consectetur.</CustomText>
                                            <CustomText body2 color={themeColors.grey} style={{ width: 200 }}>Lorem ipsum dolor sit amet consectetur. Iaculis fames at id phasellus tristique.</CustomText>
                                        </Column>
                                    </Row>

                                    <Column space={2}>
                                        <ReadSVGComponent />
                                        <DownLoadSVGComponent />
                                    </Column>
                                </Row>
                            </TouchableOpacity>
                        )
                    })}
                </VStack>
                <Spacer height={60} />
            </ScrollView>
        </View>
    )
}

export default AirPortsListScreen


const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        height: Dimensions.get('window').height
    },
    header: {
        backgroundColor: themeColors.white
    },
    domesticBtn: {
        backgroundColor: themeColors.utilityPrime,
        borderRadius: 10,
        width: 149,
    },
    internationalBtn: {
        backgroundColor: "#9CA3AF",
        borderRadius: 10,
        width: 149,
    },
    goingAirPortBtn: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
    }
})