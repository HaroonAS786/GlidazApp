import { Divider, Menu, VStack } from 'native-base';
import React from 'react';
import { FlatList, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';

import { FilterSVGComponent } from '../../../../../assets/svgs';
import CustomText from '../../../../../components/CustomText';
import Spacer from '../../../../../components/Spacer';
import Header from '../../../../../components/common/Header';
import SearchBarComponent from '../../../../../components/common/SearchBar';
import { themeColors } from '../../../../../config/colors';
import { FlightScheduleData } from '../../../../../utils/helper';
import FlightScheduleCard from '../components/FlightScheduleCard';
import HeaderComponentCard from '../components/HeaderComponentCard';
import getStyles from './styles';

const SeacrhFlightScreen = (props) => {

    const styles = getStyles()

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Spacer height={25} />
            <Header isHeader2 label={"Fight schedule"} backPress={() => {
                props.navigation.goBack()
            }} labelColor={themeColors.black} />
            <Spacer height={25} />
            <View style={{ paddingHorizontal: 18 }}>
                <SearchBarComponent />
            </View>
            <Spacer height={25} />
            <VStack style={{ marginHorizontal: 18 }}>
                <Menu backgroundColor={themeColors.utilityPrime} w="190" marginRight={8} trigger={triggerProps => {
                    return (
                        <TouchableOpacity {...triggerProps} style={{ alignSelf: 'flex-end' }}>
                            <FilterSVGComponent />
                        </TouchableOpacity>
                    );
                }}>
                    <Menu.Group title={<CustomText color='white'>Filter</CustomText>}>
                        {[
                            "FlightNo",
                            "Origin",
                            "Destination",
                            "Departure",
                            "Arrival",
                            "Frequency",
                            "Via"
                        ].map((val, index) => {
                            return (
                                <TouchableOpacity style={{ marginTop: 12 }} onPress={() => alert(val)}>
                                    <CustomText bold body2 style={{ marginStart: 12, }} color={themeColors.white}>{val}</CustomText>
                                    <Spacer height={8} />
                                    {val !== "Via" && <Divider _light={{
                                        bg: themeColors.white
                                    }} />}
                                </TouchableOpacity>
                            )
                        })}
                    </Menu.Group>
                </Menu>

                <Spacer height={12} />
                <Divider _light={{
                    bg: themeColors.utilityPrime
                }} />
            </VStack>
            <Spacer height={25} />
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                <View style={{ paddingHorizontal: 18, }}>
                    <FlatList
                        data={FlightScheduleData}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        ListHeaderComponent={<HeaderComponentCard />}
                        contentContainerStyle={{ justifyContent: 'flex-start' }}
                        renderItem={({ item, index }) => {
                            return <FlightScheduleCard
                                item={item}
                                index={index}
                            />
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SeacrhFlightScreen