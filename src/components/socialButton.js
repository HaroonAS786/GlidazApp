import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {themeColors} from '../config/colors';
import CustomText from './CustomText';
import Spacer from './Spacer';

const SocialButton = ({
  label,
  onPress,
  disabled,
  textOnly = false,
  caption = false,
  buttonContainerStyle = {},
  rightIcon,
  buttonTextColor = undefined,
  svg,
  body2 = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        textOnly && {backgroundColor: undefined},
        buttonContainerStyle,
        disabled && {backgroundColor: themeColors.buttonDisabled},
      ]}
      activeOpacity={0.8}>
      <View style={styles.c2}>
        {svg}
        <Spacer width={8} />
        {label && (
          <View>
            <CustomText
              bold
              caption={caption}
              body2
              color={
                disabled ? themeColors.buttonDisabledText : buttonTextColor
              }>
              {label}
            </CustomText>
            <Spacer height={2} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 38,
    backgroundColor: themeColors.white,
    borderColor: '#F1F1F5',
    borderWidth: 1.5,
    borderRadius: 100,
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  c2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SocialButton;
