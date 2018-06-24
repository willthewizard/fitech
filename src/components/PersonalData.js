import React,{Component} from 'react';
import {Picker,Text,View} from 'react-native';
import {connect} from 'react-redux';
import {personalDataSave,personalDataUpdate,personalDataFetch} from '../actions';
import {Card,CardSection,Input,Button} from './common';


class PersonalData extends Component{
    componentWillMount(){
        this.props.personalDataFetch();
        console.log(this.props);
        // this.state ={
        //     gender:'',
        //     age:'',
        //     height:'',
        //     weight:'',
        //     neckCircumference:'',
        //     abdomenCircumference:'',
        //     weight_goal:'',
        //     time_goal:''
        // };

    }

    onButtonPress(){
        const { gender,
            age,
            height,
            weight,
            neckCircumference,
            abdomenCircumference,
            weight_goal,
            time_goal
        } = this.props;
        this.props.personalDataSave({ gender,
            age,
            height,
            weight,
            neckCircumference,
            abdomenCircumference,
            weight_goal,
            time_goal
        });
    }

    render(){
        return(
            <Card>
                <View>
                    {console.log("kaboom")}
                    <CardSection>
                        <Input
                        label="Gender"
                        placeholder="Male or Female?"
                        value={this.props.gender}
                        onChangeText={value => this.props.personalDataUpdate({ prop: 'gender', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="Age"
                        placeholder="How old are you?"
                        value={this.props.age}
                        onChangeText={value => this.props.personalDataUpdate({ prop: 'age', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="Height"
                        placeholder="How tall are you?"
                        value={this.props.height}
                        onChangeText={value => this.props.personalDataUpdate({ prop: 'height', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="Weight"
                        placeholder="Your weight"
                        value={this.props.weight}
                        onChangeText={value => this.props.personalDataUpdate({ prop: 'weight', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="Neck Circumference"
                        placeholder="Your Neck Circumference"
                        value={this.props.neckCircumference}
                        onChangeText={value => this.props.personalDataUpdate({ prop: 'neckCircumference', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="Abdomen Circumference"
                        placeholder="Your Abdomen Circumference"
                        value={this.props.abdomenCircumference}
                        onChangeText={value => this.props.personalDataUpdate({ prop: 'abdomenCircumference', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="What is your weight goal"
                        placeholder="Enter your weight here in kilogram"
                        value={this.props.weight_goal}
                        onChangeText={value => this.props.personalDataUpdate({ prop: 'weight_goal', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="When do you wish to achieve this goal"
                        placeholder="Enter your time goal"
                        value={this.props.time_goal}
                        onChangeText={value => this.props.personalDataUpdate({ prop: 'time_goal', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Next
                        </Button>
                </CardSection>
                </View>
            </Card>
        )
    }
}

const mapStateToProps = (state) =>{
    const { gender,
        age,
        height,
        weight,
        neckCircumference,
        abdomenCircumference,
        weight_goal,
        time_goal
    } = state.personalData;
    return {gender,
        age,
        height,
        weight,
        neckCircumference,
        abdomenCircumference,
        weight_goal,
        time_goal
    }
}

export default connect(mapStateToProps,{personalDataUpdate,personalDataSave,personalDataFetch})(PersonalData);