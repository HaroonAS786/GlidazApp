import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  PanResponder,
  Animated,
  Dimensions,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { themeColors } from '../config/colors';
import { BookingSVGComponent, BottomArrowUpSVGComponent } from '../assets/svgs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomText from './CustomText';
import Spacer from './Spacer';
import { BOTTOM_TABS_DATA, RenderUtilitySVG } from '../utils/helper';
import { IMAGES } from '../utils/imagesAssets';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../redux/actions/actions';
import { Column, Row } from 'native-base';

const MAX_HEIGHT =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height * 0.55
    : Dimensions.get('window').height * 0.6;
const MIN_HEIGHT = Dimensions.get('window').height * 0.18;
const MAX_UPWARD_TRANSLATE_Y = MIN_HEIGHT - MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const Tab = createBottomTabNavigator();

const DraggableBottomSheet = props => {

  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isSheetExpanded, setIsSheetExpanded] = useState(true); // Boolean variable
  const navigation = useNavigation();
  const lastGestureDy = useRef(0);
  const dispatch = useDispatch();
  const reduxState = useSelector(state => state.auth);

  useEffect(() => {

    dispatch(
      authActions.setIsBottomSheet({
        isBottomSheet: isSheetExpanded,
      }),
    );

  }, [isSheetExpanded]);


  useEffect(() => {
    if (props.isBottomSheet) {
      springAnimation('Up');
      setIsSheetExpanded(false);
    } else {
      springAnimation('Down');
      setIsSheetExpanded(true);
    }
  }, [props.isBottomSheet]);


  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (_, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (_, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;
        if (lastGestureDy.current < MAX_UPWARD_TRANSLATE_Y) {
          lastGestureDy.current = MAX_UPWARD_TRANSLATE_Y;
        } else if (lastGestureDy.current > MAX_DOWNWARD_TRANSLATE_Y) {
          lastGestureDy.current = MAX_DOWNWARD_TRANSLATE_Y;
        }

        if (gesture.dy > 0) {
          if (gesture.dy > 50) {
            springAnimation('Up');
            setIsSheetExpanded(false);
          } else {
            springAnimation('Down');
            setIsSheetExpanded(true);
          }
        } else {
          if (gesture.dy > -50) {
            springAnimation('Down');
            setIsSheetExpanded(true);
          } else {
            springAnimation('Up');
            setIsSheetExpanded(false);
          }
        }
      },
    }),
  ).current;

  const springAnimation = direction => {
    lastGestureDy.current =
      direction === 'Down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const [activeIndex, setActiveIndex] = useState(props.homeIndex);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bottomSheet, bottomAnimation]}>
        {!isSheetExpanded ? (
          <View style={styles.header} {...panResponder.panHandlers}>
            <CustomText body2 h7 color={themeColors.white}>
              Smooth swipes, smooth flights
            </CustomText>
            <View style={styles.arrowDownView}>
              <Image
                source={IMAGES.arrowDown}
                resizeMode="contain"
                style={{ width: 22, height: 18 }}
              />
            </View>
          </View>
        ) : (
          <View style={styles.draggableArea} {...panResponder.panHandlers}>
            <BottomArrowUpSVGComponent />
          </View>
        )}

        <Row flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'} width={Dimensions.get('window').width}>
          {BOTTOM_TABS_DATA.map((val, index) => {
            return (

              <View style={styles.svgViewCon}>
                <TouchableOpacity
                  onPress={() => {
                    setActiveIndex(index);
                    props.currentIndex(index);

                    if (index === 2) {
                      navigation.dispatch(
                        CommonActions.reset({
                          index: 0,
                          routes: [{ name: 'CommunityWelcomeScreen' }],
                        }),
                      );
                    }
                  }}
                  style={styles.svgView}>
                  {RenderUtilitySVG(
                    activeIndex === index ? '#FAC45E' : 'white',
                    val.name,
                  )}
                </TouchableOpacity>
                <Spacer height={12} />
                <CustomText
                  caption
                  color={activeIndex === index ? '#FAC45E' : 'white'}
                  style={{ textAlign: 'center' }}>
                  {val.name}
                </CustomText>
              </View>

            );
          })}
        </Row>
        {/* <Spacer height={100} /> */}

      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
    marginStart: 12,
    flexDirection: 'row',
  },

  arrowDownView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    height: MAX_HEIGHT,
    bottom: MIN_HEIGHT - MAX_HEIGHT,

    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowOffset: {
          width: 2,
          height: 2,
        },
        // shadowOpacity: 1,
        shadowRadius: 6,
      },
    }),

    backgroundColor: themeColors.utilityPrime,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  draggableArea: {
    width: 100,
    paddingTop: 10,
    // height: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: 'gray',
    borderRadius: 10,
  },

  body: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },

  svgViewCon: {
    width: 80,
    margin: 2,
    // height: 60,
    alignItems: 'center',
    // backgroundColor: 'red',
    marginBottom: 40,
  },

  svgView: {
    width: 40,
    height: 40,
    backgroundColor: '#3E7189',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default DraggableBottomSheet;
