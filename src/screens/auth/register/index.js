import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';

import {
	AppLogoSVGComponent,
	EmailSVGComponent,
	PassLockSVGComponent,
	PasswordSVGComponent,
} from '../../../assets/svgs';
import ButtonComponent from '../../../components/ButtonComponent';
import CustomText from '../../../components/CustomText';
import Spacer from '../../../components/Spacer';
import TextInputComponent from '../../../components/TextInputComponent';
import { themeColors } from '../../../config/colors';
import getStyles from './styles';
import { Formik } from 'formik';
import { signUpValidation } from '../../../utils/helper';

const RegisterScreen = props => {

	const styles = getStyles();
	const [isPasswordHide, setIsPasswordHide] = useState(true);
	const [loading, setLoading] = useState(false);

	const handleSignUp = values => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			props.navigation.navigate('LoginScreen');
		}, 1000);

	};
	return (
		<SafeAreaView style={styles.mainContainer}>
			<View style={styles.headerView}>
				<Spacer height={16} />
				<CustomText bold h6>
					Welcome to
				</CustomText>
				<Spacer height={12} />
				<CustomText bold h1 color={themeColors.white}>
					Glidaz platform
				</CustomText>
				<Spacer height={16} />
				<CustomText
					regular
					h7
					color={themeColors.white}
					style={{ textAlign: 'center', width: 340 }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				</CustomText>
			</View>

			<View style={styles.footerView}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Spacer height={40} />
					<View style={styles.headingView}>
						<CustomText bold h6 color={themeColors.black}>
							SignUp to
						</CustomText>
						<Spacer width={6} />
						<CustomText bold h6 color={themeColors.authPrimary}>
							Glidaz platform
						</CustomText>
					</View>
					<Spacer height={25} />

					<Formik
						onSubmit={values => handleSignUp(values)}
						initialValues={{
							email: '',
							password: '',
						}}
						validationSchema={signUpValidation}>
						{({
							handleChange,
							handleBlur,
							handleSubmit,
							values,
							errors,
							touched,
						}) => {
							return (
								<>
									<TextInputComponent
										placeholder={'Email'}
										value={values.email}
										errors={errors.email}
										touched={touched.email}
										onBlur={handleBlur('email')}
										onChangeText={handleChange('email')}
										leftIcon={<EmailSVGComponent />}
										inputStyle={{ borderRadius: 18, height: 50 }}
									/>
									<TextInputComponent
										placeholder={'Password'}
										value={values.password}
										errors={errors.password}
										touched={touched.password}
										onBlur={handleBlur('password')}
										onChangeText={handleChange('password')}
										leftIcon={<PassLockSVGComponent />}
										rightIcon={<PasswordSVGComponent />}
										inputStyle={styles.passInputContainer}
										rightIconPress={() => {
											setIsPasswordHide(!isPasswordHide);
										}}
										password={isPasswordHide ? true : false}
									/>
									<Spacer height={50} />
									<ButtonComponent
										label={'Sign Up'}
										loader={loading}
										onPress={() => {
											handleSubmit();
										}}
										buttonTextColor={themeColors.white}
										buttonContainerStyle={styles.signUpBtn}
									/>
								</>
							);
						}}
					</Formik>
					<Spacer height={12} />
					<View style={styles.headingView}>
						<CustomText semiBold h7 color={themeColors.black}>
							Already have an account?
						</CustomText>
						<Spacer width={6} />
						<TouchableOpacity
							onPress={() => props.navigation.navigate('LoginScreen')}>
							<CustomText bold h7 color={themeColors.authPrimary}>
								Sign In
							</CustomText>
						</TouchableOpacity>
					</View>
					<Spacer height={100} />
					<View style={styles.registerContainer}>
						<AppLogoSVGComponent />
					</View>
					<Spacer height={25} />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default RegisterScreen;

// RegisterScreen;
