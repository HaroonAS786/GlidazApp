import { CommonActions } from '@react-navigation/native';
import { Divider } from 'native-base';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import Spacer from '../../../../components/Spacer';
import Header from '../../../../components/common/Header';
import DraggableBottomSheet from '../../../../components/customDragableBottomSheet';
import { RenderUtilityScreens } from '../../../../utils/helper';
import NotificationCard from './components/notificationCard';
import getStyles from './styles';

const NotificationScreen = (props) => {
    const styles = getStyles();
    const [homeIndex, setHomeIndex] = useState(9);

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView />
            <View style={styles.header}>
                <Header isHeader1 label={"Notifications"} labelColor={"white"} backPress={() => {
                    props.navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'UtilityStack' }],
                        }),
                    );
                }} />
            </View>
            <Spacer height={25} />
            <FlatList
                data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                ItemSeparatorComponent={<Divider />}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return <NotificationCard />
                }}
            />
            <DraggableBottomSheet
                currentIndex={index => {

                    RenderUtilityScreens(index, props.navigation)
                    setHomeIndex(index)
                }}
                homeIndex={homeIndex}
            />
        </View>
    );
};

export default NotificationScreen;