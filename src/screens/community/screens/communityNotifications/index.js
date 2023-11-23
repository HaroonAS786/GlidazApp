import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import Spacer from '../../../../components/Spacer';
import Header from '../../../../components/common/Header';
import getStyles from './styles';
import { Divider } from 'native-base';
import NotificationCard from '../../../utility/screens/notifications/components/notificationCard';

const CommunityNotificationScreen = (props) => {
    const styles = getStyles();

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView />
            <View style={styles.header}>
                <Header isHeader1 label={"Notifications"} labelColor={"white"} backPress={() => {
                    props.navigation.goBack()
                }} />
            </View>
            <Spacer height={25} />
            <FlatList
                data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                ItemSeparatorComponent={<Divider />}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                renderItem={({ item, index }) => {
                    return <NotificationCard />
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default CommunityNotificationScreen;