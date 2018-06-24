import React,{Component} from 'react';
import {Text,View,Picker} from 'react-native';
import {connect} from 'react-redux';
import {dailyPlanSave,dailyPlanUpdate,dailyPlanFetch} from '../actions';
import {Card,CardSection,Input,Button,Footer} from './common';


class DailyPlan extends Component{
    componentWillMount(){
        this.props.dailyPlanFetch();
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
        const {
            foodRequestsList,
            excerciseRequestForCPAS,
            foodStyle,
            lifeStyleForActConsumption
        } = this.props;
        this.props.dailyPlanSave({ 
            foodRequestsList,
            excerciseRequestForCPAS,
            foodStyle,
            lifeStyleForActConsumption
        });
    }

    render(){
        return(
            <Card>
                <View>
                    {console.log("kaboom")}
                    <CardSection style={{ height:170,flexDirection: 'column' }}>
                        <Text>How active are you?</Text>
                        <Picker
                            style={{ flex: 1 }}
                            selectedValue={this.props.lifeStyleForActConsumption}
                            onValueChange={(value) => this.props.dailyPlanUpdate({ prop: 'lifeStyleForActConsumption', value })}
                            >
                        <Picker.Item label="I excercise frequently" value="high" />
                        <Picker.Item label="I excercise moderately" value="medium" />
                        <Picker.Item label="I rarely excercise" value="low" />
                        </Picker>
                    </CardSection>
                    <CardSection>
                        <Input
                        label="What kind of diet would you like to have?"
                        placeholder="high protein or balanced ?"
                        value={this.props.foodStyle}
                        onChangeText={value => this.props.dailyPlanUpdate({ prop: 'foodStyle', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="What are the food and corresponding calorie number?"
                        placeholder="food,quantity|"
                        value={this.props.foodRequestsList}
                        onChangeText={value => this.props.dailyPlanUpdate({ prop: 'foodRequestsList', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                        label="What the excerises you have done for the day?"
                        placeholder="activity,minutes|activity,minutes|"
                        value={this.props.excerciseRequestForCPAS}
                        onChangeText={value => this.props.dailyPlanUpdate({ prop: 'excerciseRequestForCPAS', value })}
                        />
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Next
                        </Button>
                    </CardSection>
                    <CardSection>
                     <Footer />
                     </CardSection>
                </View>
            </Card>
        )
    }
}

const mapStateToProps = (state) =>{
    const { 
        foodRequestsList,
        excerciseRequestForCPAS,
        foodStyle,
        lifeStyleForActConsumption
    } = state.dailyPlan;
    return {            
        foodRequestsList,
        excerciseRequestForCPAS,
        foodStyle,
        lifeStyleForActConsumption
    }
}

export default connect(mapStateToProps,{dailyPlanUpdate,dailyPlanSave,dailyPlanFetch})(DailyPlan);