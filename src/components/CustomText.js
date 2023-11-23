import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {typography} from '../config/typography';
import {themeColors} from '../config/colors';

const CustomText = ({
  children,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  subtitle,
  body = false,
  body2,
  button,
  caption,
  size = 14,

  regular = true,
  light,
  medium,
  semiBold,
  bold,
  italic,
  color = themeColors.font,
  style = {},
}) => {
  const getStyles = () => ({
    fontSize: size,
    ...(h1 && {fontSize: typography.h1}),
    ...(h2 && {fontSize: typography.h2}),
    ...(h3 && {fontSize: typography.h3}),
    ...(h4 && {fontSize: typography.h4}),
    ...(h5 && {fontSize: typography.h5}),
    ...(h6 && {fontSize: typography.h6}),

    ...(subtitle && {fontSize: typography.subtitle}),
    ...(body && {fontSize: typography.body}),
    ...(body2 && {fontSize: typography.body2}),
    ...(button && {fontSize: typography.button}),
    ...(caption && {fontSize: typography.caption}),

    ...(regular && {fontFamily: 'PlusJakartaText-Regular'}),
    ...(light && {fontFamily: 'PlusJakartaText-Light'}),
    ...(medium && {fontFamily: 'PlusJakartaText-Medium'}),
    ...(italic && {fontFamily: 'PlusJakartaText-Italic'}),
    ...(semiBold && {fontFamily: 'PlusJakartaText-Semibold'}),
    ...(bold && {fontFamily: 'PlusJakartaText-Bold'}),
    ...(color && {color}),

    // for input text
    // ...(titilium && { fontFamily: "TitiliumWeb-Regular" }),
    // ...(titiliumSemiBold && { fontFamily: "TitilliumWeb-SemiBold" }),
  });

  return <Text style={[styles.text, style, getStyles()]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: themeColors.font,
  },
});

export default CustomText;
