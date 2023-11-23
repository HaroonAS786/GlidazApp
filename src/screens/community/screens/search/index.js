import React from 'react'
import { View } from 'react-native'
import ButtonComponent from '../../../../components/ButtonComponent'
import Spacer from '../../../../components/Spacer'
import Header from '../../../../components/common/Header'
import { themeColors } from '../../../../config/colors'
import SearchComponentCard from './components/searchCard'
import getStyles from './styles'
import { themeColors } from '../../../../config/colors'

const SearchScreen = (props) => {
    const styles = getStyles()
    return (
        <View style={styles.mainContainer}>
            <Spacer height={25} />
            <Header isHeader2 backPress={() => props.navigation.goBack()} />

            <Spacer height={25} />
            <SearchComponentCard />
            <Spacer height={25} />
            <ButtonComponent
                label={"Search"}
                buttonTextColor={themeColors.white}
            />
        </View>
    )
}

export default SearchScreen