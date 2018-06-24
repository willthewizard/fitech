import React,{Component} from 'react';
import {Picker,Text,View} from 'react-native';
import {connect} from 'react-redux';
import {dailyPlanFetch} from '../actions'
import {Card,CardSection,Input,Button,Footer} from './common';


class Recommendations extends Component{
    componentWillMount(){
        console.log("hollla")
        console.log(this.props)
    }
    render(){

        console.log(this.props)
        return(
            <Card>
                <View>
                <CardSection>
                <Text>
                     {"Aerobic Recomendations : "+this.props.recommendations.aerobicRec.exercise.name}
                </Text>
                </CardSection>
                <CardSection>
                <Text>
                     {"Calorie Consumption Per Minute : "+this.props.recommendations.aerobicRec.exercise.caloriePerMin.toFixed(2)}
                </Text> 
                </CardSection>
                <CardSection>
                <Text>
                     {"Excercise Duration : "+this.props.recommendations.aerobicRec.duration}
                </Text>  
                </CardSection>
            </View>

            <View>
                <CardSection>
                <Text>
                     {"Anaerobic Recomendations : "+this.props.recommendations.anaerobicRec.exercise.name}
                </Text>
                </CardSection>
                <CardSection>
                <Text>
                     {"Calorie Consumption Per Minute : "+this.props.recommendations.anaerobicRec.exercise.caloriePerMin.toFixed(2)}
                </Text> 
                </CardSection>
                <CardSection>
                 <Text>
                     {"Excercise Duration : "+this.props.recommendations.anaerobicRec.duration}
                </Text>   
                </CardSection>

            </View>

            <View>
                <CardSection>
                <Text>
                     {"Diet For Carbonhydrates in Grams : "+this.props.recommendations.foodRec.carbonGram.toFixed(2)}
                </Text>
                </CardSection>
                <CardSection>
                <Text>
                     {"Fat in Grams  : "+this.props.recommendations.foodRec.fatGram.toFixed(2)}
                </Text> 
                </CardSection>
                <CardSection>
                <Text>
                     {"Protein : "+this.props.recommendations.foodRec.proteinGram.toFixed(2)}
                </Text>  
                </CardSection>
                <CardSection>
                <Text>
                     {"Reward Points : "+this.props.recommendations.rewards.toFixed(2)}
                </Text>  
                </CardSection>
            </View>
                <CardSection>
                <Footer />
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) =>{
    const {
        recommendations
    } = state.dailyPlan;
        return {
            recommendations
        }
}

export default connect(mapStateToProps, {dailyPlanFetch})(Recommendations);