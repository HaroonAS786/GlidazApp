import { Dimensions, StyleSheet } from 'react-native';
import { themeColors } from '../../../../config/colors';

const getStyles = () =>

    StyleSheet.create({

        mainContainer: {
            flex: 1,
            backgroundColor: themeColors.white,
        },

        bottomTabsContainer: {
            position: 'absolute',
            alignItems: 'center',
            bottom: 40,
            width: '100%',
        },
        image: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height * 0.25,
        },

        cameraView: {
            borderRadius: 100,
            width: 33,
            height: 33,
            backgroundColor: '#9CA3AF',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 16,
            right: 16,
            position: 'absolute',
        },
        cameraView2: {
            borderRadius: 100,
            width: 33,
            height: 33,
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 16,
            right: 0,
            position: 'absolute',
        },
        profileView: {
            borderRadius: 100,
            width: 130,
            height: 130,
            backgroundColor: '#9CA3AF',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: -60,
            left: 16,
            position: 'absolute',
        },

        profileImage: {
            borderRadius: 100,
            width: 130,
            height: 130,
        },
        profileCameraView: {
            borderRadius: 100,
            width: 33,
            height: 33,
            backgroundColor: '#9CA3AF',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 12,
            right: 0,
            position: 'absolute',
        },

        textLabel: {
            position: 'absolute',
            left: 150,
            bottom: 20,
            width: 200
        },

        postEvent: {
            backgroundColor: themeColors.authButtonPrimary,
            padding: 8,
            borderRadius: 100,
            alignItems: 'center'
        },

        whatsOnYourMind: {
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#E5E7EB',
        }
    });
export default getStyles;
