import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { themeColors } from '../config/colors';
import CustomText from './CustomText';
import { Row } from 'native-base';
import Spacer from './Spacer';

const ButtonComponent = ({
  label,
  onPress,
  disabled,
  textOnly = false,
  caption = false,
  buttonContainerStyle = {},
  rightIcon,
  leftIcon,
  buttonTextColor = undefined,
  loader = false,
  body2 = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        textOnly && { backgroundColor: undefined },
        buttonContainerStyle,
        disabled && { backgroundColor: themeColors.buttonDisabled },
      ]}
      activeOpacity={0.8}>
      <>

        {loader ? (
          <ActivityIndicator size={'small'} color={themeColors.white} />
        ) : (

          <Row alignItems={'center'}>
            {leftIcon && <Row>
              {leftIcon}<Spacer width={6} />
            </Row>}

            < CustomText
              button
              bold
              caption={caption}
              body2={body2}
              color={disabled ? themeColors.buttonDisabledText : buttonTextColor}>
              {label}
            </CustomText>
          </Row>

        )}

        {rightIcon}
      </>
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  container: {
    height: 38,
    backgroundColor: themeColors.authPrimary,
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonComponent;
