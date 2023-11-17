import React from 'react';
import {View,StyleSheet, Image, Platform} from 'react-native';
import StyledText from './StyledText.jsx';
import ActorStats from './ActorStats.jsx';
import theme from '../theme.js';

const ActorHeader = ({first_name,last_name,image,movies}) => (
    <View style={{flexDirection:'row', paddingBottom:2}}>
        <View style={{paddingRight:10}}>
            <Image style={styles.image} source={{uri: image}}/>
        </View>
        <View style={{flex:1}}>
            <StyledText color='primary' fontSize='subheading' fontWeight='bold'>FullName: {first_name}, {last_name}</StyledText>
            <StyledText style={styles.movie} >Movies: {movies}</StyledText>
        </View>
    </View>
)

const RepositoryItems = (props) => (
    
    <View style={styles.container}>
        <ActorHeader {...props}/>
        <ActorStats {...props}/>
    </View>
);

const styles = StyleSheet.create({
    container:{
        padding:20, 
        paddingBottom: 5, 
        paddingTop:5,
        
    },
    title:{
        color:'#09f',
        fontWeight:'bold',
        marginTop:5,
        fontSize:20
    },
    movie:{
        padding:4,
        color:theme.colors.white,
        //Para trabajar con diferentes plataformas
        backgroundColor: Platform.select({
            android:theme.colors.primary,
            ios: 'orange',
            default: 'purple',
        }),
        alignSelf:'flex-start',
        borderRadius:5,
        overflow:'hidden'
    },
    image:{
        width:48,
        height:48,
        borderRadius:5,
    }
});

export default RepositoryItems;