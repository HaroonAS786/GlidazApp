
import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, FlatList, Platform, ScrollView, View } from 'react-native';

import { AppLogoSvg2Component } from '../../../../assets/svgs';
import ButtonComponent from '../../../../components/ButtonComponent';
import CustomText from '../../../../components/CustomText';
import Spacer from '../../../../components/Spacer';
import Header from '../../../../components/common/Header';
import DraggableBottomSheet from '../../../../components/customDragableBottomSheet';
import { themeColors } from '../../../../config/colors';
import { RenderUtilityScreens } from '../../../../utils/helper';
import FlightTrackingCard from './components/FlightTrackingCard';
import getStyles from './styles';

const ShareWithMeScreen = (props) => {
    const styles = getStyles();
    const [homeIndex, setHomeIndex] = useState(7);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerCon}>
                <Spacer height={Platform.OS === 'ios' ? 50 : 20} />
                <Header isHeader1 label={"Share with me"} backPress={() => {
                    props.navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'UtilityStack' }],
                        }),
                    );
                }} labelColor={themeColors.white} />
                <View style={{ marginStart: 16, marginTop: 16 }}>
                    <AppLogoSvg2Component />
                </View>
            </View>
            <ScrollView>
                <View style={styles.bodyContainer}>
                    <Spacer height={25} />
                    <CustomText body2 semiBold color='grey' style={{ marginStart: 18 }}>Find every flight shared with you here</CustomText>
                    <Spacer height={18} />
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ width: Dimensions.get('window').width, paddingHorizontal: 18, paddingBottom: 40 }}
                        data={[0, 1, 2, 3, 4, 5]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return <FlightTrackingCard />
                        }}
                    />
                    <View style={styles.btnContainer}>
                        <ButtonComponent
                            label={'See tracking '}
                            onPress={() => {
                                props.navigation.navigate(
                                    "SeeTrackingScreen"
                                );
                            }}
                            buttonTextColor={themeColors.white}
                            buttonContainerStyle={styles.btnView}
                        />
                    </View>
                </View>
                <Spacer height={200} />
            </ScrollView>
            <DraggableBottomSheet
                currentIndex={index => {
                    setHomeIndex(index);
                    RenderUtilityScreens(index, props.navigation)

                }}
                homeIndex={homeIndex}
            />
        </View>
    );
};

export default ShareWithMeScreen;





