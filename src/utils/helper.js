import { CommonActions, useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import Search from '../assets/searchSvg';

import {
    BookingSVGComponent,
    BusSVGComponent,
    CarSVGComponent,
    CheckInSVGComponent,
    CommunitySVGComponent,
    CycleSVGComponent,
    FlightNetworkSVGComponent,
    FlightScheduleSVGComponent,
    HomeSVGComponent,
    LiveSVGComponent,
    MessageSVGComponent,
    MyProfileSVGComponent,
    NewsSubscribeSVGComponent,
    NotificationSVGComponent,
    PressReaderSVGComponent,
    ReservationManagementSVGComponent,
    SettingsSVGComponent,
    ShareWithMeSVGComponent,
    SupportSVGComponent,
    TermsAndConditionsSVGComponent,
    TipsSVGComponent,
    WalkSVGComponent,
} from '../assets/svgs';
import Audit from '../assets/svgs/auditTechSvg';
import Booking from '../assets/svgs/bookingSvg';
import Chat from '../assets/svgs/chatSvg';
import Country from '../assets/svgs/countrySvg';
import Date from '../assets/svgs/dateSvg';
import LiveStream from '../assets/svgs/liveStreamSvg';
import Notification from '../assets/svgs/notificationSvg';
import ConnectFriendsSVGComponent from '../assets/svgs/onboard/community/connectYourFriendsSvg';
import EnjoyYourEventSVGComponent from '../assets/svgs/onboard/community/enjoyYourEventSvg';
import CheckItSVGComponent from '../assets/svgs/onboard/utility/checkItSvg';
import EnjoyTheFlightSVGComponent from '../assets/svgs/onboard/utility/enjoyTheFlightSvg';
import PlanItSVGComponent from '../assets/svgs/onboard/utility/planItSvg';
import AirportMapSVGComponent from '../assets/svgs/utilityBottomTabSvg/airpotMapSvg';

import { CloseIcon } from 'native-base';
import Activity from '../assets/svgs/activity';
import Call from '../assets/svgs/callSvg';
import Camera2 from '../assets/svgs/camera2svg';
import CheckIn from '../assets/svgs/checkIn';
import Edit from '../assets/svgs/edit';
import Locks from '../assets/svgs/locksSvg';
import Media from '../assets/svgs/mediaSvg';
import PhotoVedio from '../assets/svgs/photoVedio';
import Pin from '../assets/svgs/pinSvg';
import SmileEmoji from '../assets/svgs/smileEmoji';
import TagFriend from '../assets/svgs/tagFriend';
import Unfriend from '../assets/svgs/unfriendSvg';
import Location from '../assets/svgs/utilityBottomTabSvg/locationSVg';
import VoiceRecord from '../assets/svgs/voiceRecord';
import CommunityHomeStack from '../screens/community/screens/communityhomeStack';
import EventStack from '../screens/community/screens/event/stack';
import LiveStreamStack from '../screens/community/screens/liveStream/stack';
import UserStack from '../screens/community/screens/userProfile/stack';
import UtilityWelcomeScreen from '../screens/utility/screens/welcome';
import FriendsSvg from '../assets/svgs/usersSvg';
import { PermissionsAndroid, Platform } from 'react-native';

export const screenAnimation = {
    showModal: {
        enter: {
            enabled: true,
            alpha: {
                from: 0,
                to: 1,
                duration: 300,
            },
        },
        exit: {
            enabled: true,
            alpha: {
                from: 1,
                to: 0,
                duration: 300,
            },
        },
    },
};

export const signUpValidation = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Incorrect Format'),
    password: Yup.string().required('Password is required'),
});

export const signInValidation = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Incorrect Format'),
});

export const resetValidation = Yup.object({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf(
            [Yup.ref('password'), null],
            'Confirm password does not match the entered password',
        ),
});

export const BOTTOM_TABS_DATA = [
    {
        key: 0,
        svg: <HomeSVGComponent />,
        name: 'Home',
    },
    {
        key: 1,
        svg: <BookingSVGComponent />,
        name: 'Booking',
    },
    {
        key: 2,
        svg: <CommunitySVGComponent />,
        name: 'Community',
    },
    {
        key: 3,
        svg: <CheckInSVGComponent />,
        name: 'Check-in',
    },
    {
        key: 4,
        svg: <ReservationManagementSVGComponent />,
        name: 'Reservation Management',
    },
    {
        key: 5,
        svg: <FlightScheduleSVGComponent />,
        name: 'Flight Schedule',
    },
    {
        key: 6,
        svg: <FlightNetworkSVGComponent />,
        name: 'Flight Network Map',
    },

    {
        key: 7,
        svg: <ShareWithMeSVGComponent />,
        name: 'Share with me',
    },
    {
        key: 8,
        svg: <AirportMapSVGComponent />,
        name: 'Airport map ',
    },
    {
        key: 9,
        svg: <NotificationSVGComponent />,
        name: 'Notification',
    },
    {
        key: 10,
        svg: <SettingsSVGComponent />,
        name: 'Setting',
    },
    {
        key: 11,
        svg: <MyProfileSVGComponent />,
        name: 'My Profile',
    },
];

export const RenderUtilitySVG = (color, screen) => {
    switch (screen) {
        case 'Home':
            return <HomeSVGComponent stroke={color} />;
        case 'Booking':
            return <BookingSVGComponent stroke={color} />;
        case 'Community':
            return <CommunitySVGComponent stroke={color} />;
        case 'Check-in':
            return <CheckInSVGComponent stroke={color} />;
        case 'Reservation Management':
            return <ReservationManagementSVGComponent stroke={color} />;
        case 'Flight Schedule':
            return <FlightScheduleSVGComponent stroke={color} />;
        case 'Flight Network Map':
            return <FlightNetworkSVGComponent stroke={color} />;
        case 'Share with me':
            return <ShareWithMeSVGComponent stroke={color} />;
        case 'Airport map ':
            return <AirportMapSVGComponent stroke={color} />;
        case 'Notification':
            return <NotificationSVGComponent stroke={color} />;
        case 'Setting':
            return <SettingsSVGComponent stroke={color} />;
        case 'My Profile':
            return <MyProfileSVGComponent stroke={color} />;
        default:
            break;
    }
};

export const BOTTOM_TABS_COMMUNITY_DATA = [
    {
        key: 0,
        name: 'Home',
    },
    {
        key: 1,
        name: 'Booking',
    },
    {
        key: 2,
        name: 'Schedule',
    },
    {
        key: 3,
        name: 'Live',
    },
];

export const RenderCommunitySVG = (color, screen) => {
    switch (screen) {
        case 'Home':
            return <HomeSVGComponent stroke={color} />;
        case 'Booking':
            return <BookingSVGComponent stroke={color} />;
        case 'Schedule':
            return <FlightScheduleSVGComponent stroke={color} />;
        case 'Live':
            return <LiveSVGComponent stroke={color} />;
        default:
            break;
    }
};

export const RenderUtilityScreens = (index, navigation) => {
    switch (index) {
        case 0:
            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'UtilityScreen' }],
                }),
            );
        case 1:
            return navigation.navigate('BookingScreen');
        case 2:
            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'CommunityWelcomeScreen' }],
                }),
            );
        case 3:
            return navigation.navigate('CheckInScreen');
        case 4:
            return navigation.navigate('ReservationManagementScreen');
        case 5:
            return navigation.navigate('FlightScheduleScreen');
        case 6:
            return navigation.navigate('FlightNetworkRoadMapScreen');
        case 7:
            return navigation.navigate('ShareWithMeScreen');
        case 8:
            return navigation.navigate('AirportMapScreen');
        case 9:
            return navigation.navigate('NotificationScreen');
        case 10:
            return navigation.navigate('SettingScreen');
        case 11:
            return navigation.navigate('UtilityUserProfileScreen', {
                fromUtility: true,
            });
        default:
            break;
    }
};


export const MenuData = [

    {
        name: 'PressReader: Digital Newpapers and Magazines',
        svg: <PressReaderSVGComponent />
    },
    {
        name: 'Support',
        svg: <SupportSVGComponent />
    },
    {
        name: 'Tips for App',
        svg: <TipsSVGComponent />
    },
    {
        name: 'Subscribe to our newsletter',
        svg: <NewsSubscribeSVGComponent />
    },
    {
        name: 'App Terms & Conditions',
        svg: <TermsAndConditionsSVGComponent />
    }

]

export const FlightScheduleArray = [

    {
        label: 'Departure',
        placeholder: "Departure"
    },
    {
        label: 'Arrival',
        placeholder: 'Arrival'
    },
    {
        label: "Departure date",
        placeholder: "Departure date"
    },
    {
        label: 'Airline',
        placeholder: 'Airline'
    },
    {
        label: 'Airport',
        placeholder: 'Airport'
    },

]
export const CheckInArray = [
    {
        label: 'Reservation code ',
        placeholder: 'Reservation code ',
        isArrowDownSvg: true,
    },
    {
        label: "Last/Family name",
        placeholder: "Last/Family name",
        isArrowDownSvg: true,
    },
    {
        label: 'Departure',
        placeholder: 'Departure',
        isArrowDownSvg: true,
    },

]
export const ByCodeArray = [
    {
        label: 'Reservation code',
        placeholder: "Reservation code",
        isArrowDownSvg: true,
    },
    {
        label: 'Last name',
        placeholder: 'Last name',
        isArrowDownSvg: true,
    },
    {
        label: "Email address",
        placeholder: "Email",
        isArrowDownSvg: true,
    },
]

export const FlightScheduleData = [

    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },
    {
        FlightNo: '6E 316',
        Origin: "Agartala",
        Destination: "Bengaluru",
        Departure: "18:45",
        Arrival: "13:45",
        Frequency: "Daily",
        Via: "Kolkata",
    },


]

export const CommunityOnBoardData = [

    {
        label: "Connect your friends",
        title: "Lorem ipsum dolor sit amet consectetur. Felis vitae quam.",
        svg: < ConnectFriendsSVGComponent />
    },
    {
        label: "Enjoy your event",
        title: "Lorem ipsum dolor sit amet consectetur. Felis vitae quam.",
        svg: <EnjoyYourEventSVGComponent />
    },
    {
        label: "Create and share experiences together",
        title: "Lorem ipsum dolor sit amet consectetur. Felis vitae quam.",
        svg: <ConnectFriendsSVGComponent />
    },

]

export const UtilityOnBoardData = [

    {
        label: "Check It",
        title: "Lorem ipsum dolor sit amet consectetur. Felis vitae quam.",
        svg: < CheckItSVGComponent />
    },
    {
        label: "Plan It",
        title: "Lorem ipsum dolor sit amet consectetur. Felis vitae quam.",
        svg: <PlanItSVGComponent />
    },
    {
        label: "Enjoy The Flight",
        title: "Lorem ipsum dolor sit amet consectetur. Felis vitae quam.",
        svg: <EnjoyTheFlightSVGComponent />
    },

]
export const autoMobileData = [
    {
        time: "10 minutes",
        svg: < WalkSVGComponent />
    },
    {
        time: "20 minutes",
        svg: < CarSVGComponent />
    },
    {
        time: "30 minutes",
        svg: < BusSVGComponent />
    },
    {
        time: "40 minutes",
        svg: < CycleSVGComponent />
    },
]

export const seatPlanData = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
]

export const communityHeaderData = [
    <Search />, <FriendsSvg />, <Chat />, <Notification />, <Booking />

]

export const reactionsGif = {
    like: require('../assets/NewGif/like.gif'),
    love: require('../assets/NewGif/love.gif'),
    haha: require('../assets/NewGif/haha.gif'),
    care: require('../assets/NewGif/yay.gif'),
    wow: require('../assets/NewGif/wow.gif'),
    sad: require('../assets/NewGif/sad.gif'),
    angry: require('../assets/NewGif/angry.gif'),
};

export const renderReactionObject = {
    Like: {
        name: 'Like',
        gif: reactionsGif.like,
    },
    Love: {
        name: 'Love',
        gif: reactionsGif.love,
    },
    Haha: {
        name: 'Haha',
        gif: reactionsGif.haha,
    },
    Care: {
        name: 'Care',
        gif: reactionsGif.care,
    },
    Wow: {
        name: 'Wow',
        gif: reactionsGif.wow,
    },
    Sad: {
        name: 'Sad',
        gif: reactionsGif.sad,
    },
    Angry: {
        name: 'Angry',
        gif: reactionsGif.angry,
    },
};

export const Reactions = [
    {
        name: 'Like',
        gif: reactionsGif.like,
    },
    {
        name: 'Love',
        gif: reactionsGif.love,
    },
    {
        name: 'Haha',
        gif: reactionsGif.haha,
    },
    {
        name: 'Care',
        gif: reactionsGif.care,
    },
    {
        name: 'Wow',
        gif: reactionsGif.wow,
    },
    {
        name: 'Sad',
        gif: reactionsGif.sad,
    },
    {
        name: 'Angry',
        gif: reactionsGif.angry,
    },
];



export const introductionData = [

    {
        svg: <Audit />,
        label: "Audit Tech company"
    },
    {
        svg: <Country />,
        label: "Nigeria"
    },
    {
        svg: <Date />,
        label: "Joined in August 2022"
    },
    {
        svg: <LiveStream />,
        label: "Audit Tech company"
    },

]


export const onMindData = [
    <Camera2 />, <Pin />, <Media />, <Location />, <SmileEmoji />
]
export const createPostData = [
    { label: "Photo/Vedio", svg: <PhotoVedio /> },
    { label: "Tag your friend", svg: <TagFriend /> },
    { label: "Emotions/activity", svg: <Activity /> },
    { label: "Check In", svg: <CheckIn /> },
    { label: "Event", svg: <TagFriend /> },
    { label: "Your flight", svg: <BookingSVGComponent stroke={'black'} /> },
]
export const eventData = [
    <Edit stroke="white" />, <VoiceRecord />, <MessageSVGComponent stroke="white" />, <LiveStream stroke="white" />, <CloseIcon color={'black'} size={22} />
]
export const callData = [
    <VoiceRecord />, <LiveStream stroke="white" />, <Call size={22} />
]


export const seeFriendsData = [
    { label: "Nickname for Callya", svg: <Edit /> },
    { label: "Message Callya", svg: <MessageSVGComponent /> },
    { label: "Unfollow Callya", svg: <CloseIcon color={'black'} /> },
    { label: "Block Callya", svg: <Locks /> },
    { label: "Unfriend Callya", svg: <Unfriend /> },
]



export const bottomTab = [
    {
        name: 'Home',
        component: CommunityHomeStack,
    },
    {
        name: 'Booking',
        component: UtilityWelcomeScreen,
    },
    {
        name: 'EventScreen',
        component: EventStack,
    },
    {
        name: 'LiveStreamVedio',
        component: LiveStreamStack,
    },
    {
        name: 'UserProfle',
        component: UserStack,
    },
];



export const RequestCameraPermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Camera Permission',
                    message: 'App needs camera permission',
                },
            );
            // If CAMERA Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    } else {
        return true;
    }
};

export const RequestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'External Storage Write Permission',
                    message: 'App needs write permission',
                },
            );
            // If WRITE_EXTERNAL_STORAGE Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
        }
        return false;
    } else {
        return true;
    }
};

export const RenderMenuOptions = (index, navigation) => {
    switch (index) {
        case 0:
            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'UtilityScreen' }],
                }),
            );
        case 1:
            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'BookingScreen' }],
                }),
            );
        case 2:
            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'CommunityWelcomeScreen' }],
                }),
            );
        case 3:
            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'CheckInScreen' }],
                }),
            );

        case 4:
            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'ReservationManagementScreen' }],
                }),
            );
        case 5:
            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'FlightScheduleScreen' }],
                }),
            );
        case 6:
            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'FlightNetworkRoadMapScreen' }],
                }),
            );
        case 7:

            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'ShareWithMeScreen' }],
                }),
            );
        case 8:
            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'AirportMapScreen' }],
                }),
            );
        case 9:
            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'NotificationScreen' }],
                }),
            );
        case 10:
            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'SettingScreen' }],
                }),
            );
        case 11:
            return navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{
                        name: 'UtilityUserProfileScreen', params: {
                            fromUtility: true, // Replace with your desired parameter
                        },
                    }],
                }),
            );
        default:
            break;
    }
};