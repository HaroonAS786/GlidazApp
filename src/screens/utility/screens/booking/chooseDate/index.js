import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'

import ButtonComponent from '../../../../../components/ButtonComponent'
import Spacer from '../../../../../components/Spacer'
import Header from '../../../../../components/common/Header'
import { themeColors } from '../../../../../config/colors'
import CalendarView from '../../../components/CustomCalenders'
import getStyles from './styles'

const ChooseDate = (props) => {

    const styles = getStyles()
    const [selectedDate, setSelectedDate] = useState(false);

    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.headerView}>
                    <SafeAreaView />
                    <Header isHeader1 label={"Choose Date"} labelColor={'white'} backPress={() => {
                        props.navigation.goBack()
                    }} />
                </View>
                <View style={{ flex: 1 }}>
                    <CalendarView
                        dayPress={() => {
                            setSelectedDate(true)
                        }}
                    />
                </View>
                <View style={{ marginTop: 40, marginHorizontal: 25 }}>
                    <ButtonComponent
                        label={'Done'}
                        disabled={!selectedDate}
                        onPress={() => {
                            props.navigation.navigate("ChooseFlight")
                        }}
                        buttonTextColor={themeColors.white}
                        buttonContainerStyle={{ backgroundColor: "#FAC45E" }}
                    />
                </View>
                <Spacer height={100} />
            </ScrollView>
        </View>
    )
}

export default ChooseDate