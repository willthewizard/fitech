import React from 'react';
import {Text,View,Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const ModalForm =({children,visible,onAccept,onDecline})=>{
    const {containerStyle,textStyle,cardSectionStyle} = styles;
    return(
        <Modal
            visible = {visible}
            transparent
            animationType ="slide"
            onRequestClose={()=>{}}
        >
            <View style ={containerStyle}>
                <View style = {cardSectionStyle}>
                    {children}
                </View>

                <CardSection>
                    <Button onPress={onAccept}>Submit</Button>
                    <Button onPress={onDecline}>Cancel</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle:{
        justifyContent:'center'

    },
    textStyle:{
        flex:1,
        fontSize:18,
        textAlign:'center',
        lineHeight:40
    },
    containerStyle:{
        backgroundColor:'rgba(0,0,0,0.75)',
        position:'relative',
        flex:3,
        justifyContent:'center'
    }
}
export {ModalForm};
