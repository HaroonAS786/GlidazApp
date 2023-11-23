import React, { useCallback } from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { themeColors } from '../config/colors';
import CustomText from './CustomText';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from './Spacer';
import { AlertSVGComponent } from '../assets/svgs';

const TextInputComponent = ({
  label,
  placeholder,
  onChangeText,
  onBlur,
  error,
  leftIcon,
  rightIcon,
  rightIconPress,
  maxLength = 50, //by default 50 characters
  password = false,
  errors,
  touched,
  inputContainer,
  inputChildContainer,
  value = undefined,
  inputStyle,
  keyboardType

}) => {
  return (
    <View style={styles.main}>
      {label && (
        <>
          <CustomText
            body2
            regular
            style={{ paddingLeft: 6 }}
            color={touched && errors ? 'red' : themeColors.black}>
            {label}
          </CustomText>
          <Spacer height={6} />
        </>
      )}
      <View
        style={[
          styles.inputContainer,
          inputStyle,
          { borderColor: touched && errors ? 'red' : '#F1F1F5' },
        ]}>
        {leftIcon && leftIcon}
        <TextInput
          keyboardType={keyboardType}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          autoCapitalize="none"
          onBlur={onBlur}
          placeholderTextColor={themeColors.fontLight}
          style={[styles.container, inputChildContainer]}
          onChangeText={onChangeText}
          secureTextEntry={password}
          error={touched && errors ? true : false}

        />
        {rightIcon &&
          <TouchableOpacity onPress={rightIconPress}>
            {rightIcon}
          </TouchableOpacity>

        }
      </View>

      {errors && touched && (
        <Animated.View style={styles.msgBox}>
          <Spacer width={4} />
          <CustomText body2 color="red">
            {errors}
          </CustomText>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginVertical: 10,
  },
  container: {
    height: 38,
    width: 270,
    padding: 10,
    paddingHorizontal: 14,
    backgroundColor: '#F1F1F5',

    color: themeColors.black,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: '#F1F1F5',
    paddingHorizontal: 20,
    borderRadius: 100,

    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F1F5',
  },
  msgBox: {
    marginTop: 10,
    marginLeft: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default TextInputComponent;
