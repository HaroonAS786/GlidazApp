import { Avatar, Center, ChevronDownIcon, CloseIcon, Column, Input, Row, VStack } from 'native-base'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import Country from '../../../../assets/svgs/countrySvg'
import Plus from '../../../../assets/svgs/plusSvg'
import Shortcuts from '../../../../assets/svgs/shortcuts'
import CustomText from '../../../../components/CustomText'
import Spacer from '../../../../components/Spacer'
import { themeColors } from '../../../../config/colors'
import { createPostData } from '../../../../utils/helper'

const CreatePostScreen = (props) => {

    return (
        <>
            <View style={styles.container}>
                <Spacer height={25} />
                <Row justifyContent={'space-between'}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Center>
                            <CloseIcon size={22} />
                        </Center>
                    </TouchableOpacity>
                    <CustomText body bold>Create post</CustomText>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Center>
                            <CustomText body bold color={'lightgrey'}>Share</CustomText>
                        </Center>
                    </TouchableOpacity>
                </Row>
                <Spacer height={25} />
                <Row space={2}>
                    <Avatar size={'sm'} />
                    <Column space={1.5}>
                        <CustomText>Oni</CustomText>
                        <Row space={1}>
                            {[
                                { svg: <Country />, label: 'Public' },
                                { svg: <Plus />, label: 'Album' },
                                { svg: <Shortcuts />, label: 'Shortcuts' }
                            ].map((val, index) => {
                                return (
                                    <Row space={2} style={{ borderColor: 'black', borderRadius: 5, borderWidth: 1, padding: 2 }} alignItems={'center'}>
                                        {val.svg}
                                        <CustomText caption color={'black'}>{val.label}</CustomText>
                                        <ChevronDownIcon color={'black'} />
                                    </Row>
                                )
                            }
                            )}
                        </Row>
                        <Input
                            variant={'unstyled'}
                            placeholder='What are you thinking?'
                            style={{ fontSize: 16 }}
                        />
                    </Column>
                </Row>
            </View>
            <View style={styles.sheet}>
                <VStack space={6}>
                    {createPostData.map((val, index) =>
                        <TouchableOpacity>
                            <Row alignItems={'center'} space={2}>
                                {val.svg}
                                <CustomText body>{val.label}</CustomText>
                            </Row>
                        </TouchableOpacity>
                    )}
                </VStack>
            </View>
        </>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: themeColors.white
    },
    sheet: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
        borderTopColor: 'black',
        borderWidth: 1,
        borderBottomWidth: 0,
        backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    }


})

export default CreatePostScreen