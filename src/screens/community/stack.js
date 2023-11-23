import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import MyBottomTabs from './screens';
import ChatNow from './screens/chat/components/openChat';
import PhoneCallScreen from './screens/chat/components/phoneCall';
import CommunityNotificationScreen from './screens/communityNotifications';
import CommunityHomeStack from './screens/communityhomeStack';
import CreatePostScreen from './screens/components/createPost';
import AddEventCategory from './screens/event/AddEventCategory';
import RemindersScreen from './screens/event/Reminders';
import EventDetails from './screens/event/components/EventDetailPage';
import SavedEventScreen from './screens/event/components/SavedEvent';
import TrendingEvents from './screens/event/components/TrendingEvents';
import UpcomingEvents from './screens/event/components/UpcomingEvents';
import CreateEventScreen from './screens/event/components/createEvent';
import EventCreated from './screens/event/components/eventCreated';
import EventStarted from './screens/event/components/eventStart';
import EventSummary from './screens/event/components/eventSummary';
import JoinEvent from './screens/event/components/joinEvent';
import ScheduleEvents from './screens/event/components/scheduleEvents';
import SeeAllEvents from './screens/event/components/seeAllEvents';
import EventStack from './screens/event/stack';
import SeeFriends from './screens/friends/components/SeeFriends';
import SeeSuggestionFriends from './screens/friends/components/seeSuggestionFriends';
import LiveStreamStack from './screens/liveStream/stack';
import SearchScreen from './screens/search';
import UserStatusScreen from './screens/status';
import DetailsScreen from './screens/userProfile/DetailsScreen';
import EditProfile from './screens/userProfile/EditProfile';
import ViewImage from './screens/userProfile/seeImage';
import UserStack from './screens/userProfile/stack';

const ScreenOptions = { headerShown: false };
const Stack = createStackNavigator();

const CommunityStack = props => {
    return (
        <Stack.Navigator
            screenOptions={ScreenOptions}
            initialRouteName={"MyBottomTabs"}
        >
            <Stack.Screen name="MyBottomTabs" component={MyBottomTabs} />
            <Stack.Screen name="UserStatusScreen" component={UserStatusScreen} />
            <Stack.Screen name="CreateEventScreen" component={CreateEventScreen} />
            <Stack.Screen name="EventCreated" component={EventCreated} />
            <Stack.Screen name="EventSummary" component={EventSummary} />
            <Stack.Screen name="JoinEvent" component={JoinEvent} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="EventStarted" component={EventStarted} />
            <Stack.Screen name="CommunityNotificationScreen" component={CommunityNotificationScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
            <Stack.Screen name="ChatNow" component={ChatNow} />
            <Stack.Screen name="PhoneCallScreen" component={PhoneCallScreen} />
            <Stack.Screen name="SeeFriends" component={SeeFriends} />
            <Stack.Screen name="SeeSuggestionFriends" component={SeeSuggestionFriends} />
            <Stack.Screen name="CommunityHomeStack" component={CommunityHomeStack} />
            <Stack.Screen name="UserStack" component={UserStack} />
            <Stack.Screen name="LiveStreamStack" component={LiveStreamStack} />
            <Stack.Screen name="EventStack" component={EventStack} />
            <Stack.Screen name="AddEventCategory" component={AddEventCategory} />
            <Stack.Screen name="SeeAllEvents" component={SeeAllEvents} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="RemindersScreen" component={RemindersScreen} />
            <Stack.Screen name="SavedEventScreen" component={SavedEventScreen} />
            <Stack.Screen name="ViewImage" component={ViewImage} />
            <Stack.Screen name="ScheduleEvents" component={ScheduleEvents} />
            <Stack.Screen name="TrendingEvents" component={TrendingEvents} />
            <Stack.Screen name="UpcomingEvents" component={UpcomingEvents} />
        </Stack.Navigator>
    );
};

export default CommunityStack;
