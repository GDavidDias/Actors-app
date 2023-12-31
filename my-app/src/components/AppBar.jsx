import React from 'react'
import {ScrollView, StyleSheet, View,Text} from 'react-native'
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import theme from '../theme.js'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:theme.appBar.primary,
        flexDirection:'row',
        paddingTop: Constants.statusBarHeight+10,
        
    },
    text:{
        color:theme.appBar.textSecondary,
        paddingHorizontal:10
    },
    active:{
        color:theme.appBar.textPrimary,
    },
    scroll:{
        paddingBottom:15
    }
})


const AppBarTab = ({children,to})=>{
    const {pathname} = useLocation()
    const active = pathname===to

    const textStyles=[
        styles.text,
        active && styles.active
    ]

    return(
        <Link to={to}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
};

//FUNCION PRINCIPAL APPBAR
const AppBar = () => {
  return (
    <View style={styles.container}>
        <ScrollView horizontal style={styles.scroll}>
            <AppBarTab to='/' >Actors</AppBarTab>
            <AppBarTab to='/signin' >Sign In</AppBarTab>
            <Text style={{color:'grey'}}>--Default--</Text>
        </ScrollView>
    </View>
  )
}

export default AppBar