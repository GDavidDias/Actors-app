import React from "react";
import {View} from 'react-native';
import StyledText from './StyledText.jsx';

const ActorStats = (props) =>{
    return(
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <View>
                <StyledText color='secondary' align='center' fontWeight='bold'>Age</StyledText>
                <StyledText align='center'>{props.age}</StyledText>

            </View>
            <View>
                <StyledText color='secondary' align='center' fontWeight='bold'>Country</StyledText>
                <StyledText align='center'>{props.country}</StyledText>
            </View>
        </View>
    )
}

export default ActorStats;