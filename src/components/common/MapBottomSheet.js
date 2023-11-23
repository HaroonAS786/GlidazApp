import { ChevronDownIcon } from 'native-base';
import React from 'react';
import { Dimensions, Platform, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { themeColors } from '../../config/colors';

const MapBottomSheet = props => {
    return (
        <Modal
            style={{ padding: 0, margin: 0, }}
            transparent={true}
            isVisible={props.isVisible}
            hasBackdrop
            backdropOpacity={0.3}
            onBackdropPress={props.closeModal}
            backdropColor="#121212"
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={300}
            animationOutTiming={350}>
            <View
                style={{
                    width: '100%',
                    backgroundColor: props.bgColor ? props.bgColor : '#fff',
                    paddingHorizontal: props.addCoaching ? 0 : 20,
                    paddingTop: props.addCoaching ? 0 : 10,
                    shadowColor: '#fff',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                    flex: 1,
                    marginTop: props?.fullModal
                        ? 0
                        : Dimensions.get('window').height / props.marginTop,
                }}>
                {props.children}
            </View>
            <View style={{
                width: 50, height: 40,
                borderRadius: 25,
                position: 'absolute',
                backgroundColor: 'white',
                left: 172,
                bottom: Platform.OS === 'ios' ? 275 : 270,
                alignItems: 'center',
                justifyContent: "center",

            }} >
                <TouchableOpacity onPress={props.closeModal}>
                    <ChevronDownIcon color={themeColors.black} />
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default MapBottomSheet;


;



