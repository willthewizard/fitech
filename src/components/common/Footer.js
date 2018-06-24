// Import a libaray to help create a component
import React from 'react';
import {Text,View} from 'react-native';
import { Button } from 'react-native-elements'

import {Actions} from 'react-native-router-flux';

// create a component
 const Footer=(props)=>{
     const {textStyle,viewStyle} = styles;
     return(
        <View style ={viewStyle}>
         <Button style={{marginRight:10}} icon={{name: 'child', type: 'font-awesome'}} onPress={()=>Actions.personalDataSave()}></Button>
         <Button icon={{name: 'cached'}} onPress={()=>Actions.dailyPlan()}></Button>
         <Button icon={{name: 'heart',type:'font-awesome'}} onPress={()=>Actions.dailyPlan()}></Button>
         <Button icon={{name: 'heart',type:'font-awesome'}} onPress={()=>Actions.dailyPlan()}></Button>
        </View>
     )
 };

 const styles = {
    viewStyle:{
        backgroundColor :'#FFFFFF',
        flex:1,
        flexDirection: 'row',
        height:60,
        alignItems:'center',
        marginRight:10,
        shadowColor:'#000',
        shadowOffset:{width:2,height:2},
        shadowOpacity:0.8,
        elevation:0,
        position:'relative'
    },
    textStyle:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize:20,
        paddingTop:15,
        paddingBottom:15
    }
};
 export {Footer};