import { Avatar, Input, Row, Spacer } from 'native-base';
import React, { useRef } from 'react';
import { Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import FadeModal from '../../../components/customBottomSheet';
import { useMediaGroup } from '../../../hooks/useMediaGroup';
import CommentsScreen from './components/Comments';
import CommunityHeader from './components/CommunityHeader';
import PostCard from './components/PostCard';
import StoryCard from './components/StoryCard';
import StoryCardHeaderItem from './components/StoryCardHeaderItem';

const HomeScreen = (props) => {

	const refRBComments = useRef();
	const { selectImage } = useMediaGroup()

	return (
		<>
			<View style={styles.container}>
				<SafeAreaView />
				<CommunityHeader
					onCreatPost={(index) => {
						if (index === 0) {
							props.navigation.navigate("CreatePostScreen")
						}
						else if (index === 1) {
							props.navigation.navigate("EventScreen")
						}
						else if (index === 2) {
							props.navigation.navigate("LiveStreamVedio")
						}
					}}
					navigation={props.navigation}
				/>
				<View style={styles.divider} />
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.top}>
						<Spacer height={4} />
						<Row style={{ paddingHorizontal: 16 }} space={2}>
							<TouchableOpacity onPress={() =>
								props.navigation.navigate('UserProfle', { screen: 'UserProfileScreen' })}
								activeOpacity={0.8}>
								<Avatar size={'md'}
									source={{
										uri:
											"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
									}} />
							</TouchableOpacity>
							<Input
								placeholder="What's on your mind?"
								variant={'unstyled'}
								placeholderTextColor={'grey'}
								width={300}
								fontSize={16}
							/>
						</Row>
						<Spacer height={4} />
					</View>
					<View style={{ paddingHorizontal: 16 }}>
						<Spacer height={4} />
						<FlatList
							horizontal={true}
							data={[0, 1, 2, 3, 4]}
							keyExtractor={(item, index) => index.toString()}
							ListHeaderComponent={<StoryCardHeaderItem onPress={() => {
								selectImage('multiple').then((res) => {
									console.log(res, 'res---')
								}).catch(err => {
									console.log(err, 'res---')
								})
							}} />}
							renderItem={({ item, index }) =>
								<StoryCard
									itemClick={() => {
										props.navigation.navigate("UserStatusScreen")
									}}
								/>}
							showsHorizontalScrollIndicator={false}
						/>
					</View>
					<View >
						<Spacer height={4} />
						<FlatList
							data={[0, 1, 2, 3, 4, 5]}
							keyExtractor={(item, index) => index.toString()}
							renderItem={({ item, index }) => <PostCard
								commentPress={() => {
									refRBComments.current.open()
								}}
								onPeoplePress={() => {
									props.navigation.navigate("PeopleUserProfileScreen")
								}}

							/>}
							showsVerticalScrollIndicator={false}
						/>
					</View>
					<Spacer height={100} />
				</ScrollView>
			</View>

			<FadeModal
				height={Dimensions.get('window').height}
				refRBSheet={refRBComments}
			>
				<View style={{ width: Dimensions.get('window').width, paddingHorizontal: 16, height: Dimensions.get('window').height }}>
					<CommentsScreen />
				</View>
			</FadeModal>
		</>

	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	top: {
		backgroundColor: 'white'
	},
	bottomTabsContainer: {
		position: 'absolute',
		alignItems: 'center',
		bottom: 40,
		width: '100%',
	},
	profileChildView: {
		width: 12,
		height: 12,
		borderRadius: 100,
		position: 'absolute',
		backgroundColor: 'white',
		right: 0,
		bottom: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	profileViewContainer: {
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	profileView: {
		width: 44,
		height: 44,
		borderRadius: 100,
	},
	navBar: {
		flexDirection: 'row',
		backgroundColor: '#D0D0D0',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		paddingHorizontal: 16,
		borderRadius: 100,
		width: '90%',
		height: 60,
	},
	divider: {
		width: "100%",
		height: 2,
		backgroundColor: 'lightgrey'
	}
});

export default HomeScreen;
