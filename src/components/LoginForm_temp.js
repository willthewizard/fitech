import React,{Component} from 'react';
import {View,Text} from 'react-native'
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,loginUser} from '../actions';
import {Card,CardSection,Input,Button,Header,Spinner,ModalForm} from './common';

class LoginForm extends Component{
    state = {showModal:false,newEmail:"",newPassword:"",newPasswordRe:""};
    onEmailChange(text){
        this.props.emailChanged(text)
    }
    onPasswordChange(text){
        this.props.passwordChanged(text)
    }
    onButtonPress(){
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }
    onRegisterForm(){
        const {newEmail,newPassword,newPasswordRe} = this.state;
        this.props.signupUser();
    }
    renderButton(){
        if(this.props.loading){
            return <Spinner size ="large" />;
        }
        return(
            <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>

                <Button onPress ={()=>this.setState({showModal:true})}>
                    Register 
                </Button>
            </CardSection>
        )
    }
    renderError(){
        if(this.props.error){
            return (
                <View style ={{backgrounColor:'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }
    onAccept(){
        // // const {uid} = this.props.employee;
        // // this.props.employeeDelete({uid});
        this.setState({showModal:true})
    }
    onDecline(){
        console.log(this.state.newEmail);
        this.setState({showModal:false})
    }


    render(){
        return (
            <Card>
                <Header headerText ="Fitech"/>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText ={this.onEmailChange.bind(this)}
                        value = {this.props.email}
                    />
                </CardSection>
                <CardSection>
                <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="******"
                        onChangeText ={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}
                {this.renderButton()}
                <ModalForm 
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                    >
                    <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText ={newEmail=>this.setState({newEmail:newEmail})} 
                        value = {this.props.newEmail}
                    />
                    </CardSection>
                    <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="******"
                        onChangeText ={()=>this.setState({newPassword:newPassword})}
                        value={this.props.newPassword}
                    />
                    </CardSection>
                    <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="******"
                        onChangeText ={()=>this.setState({newPasswordRe:newPasswordRe})}
                        value={this.props.newPasswordRe}
                    />
                    </CardSection>
                        
                </ModalForm>
            </Card>

        )
    }
}

const styles ={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}


const mapStateToProps = ({auth}) =>{
    const {email,password,error,loading}=auth;
    return {email,password,error,loading};
};
export default connect(mapStateToProps,{
    emailChanged,passwordChanged,loginUser
})(LoginForm);