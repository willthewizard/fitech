import React,{Component} from 'react';
import {Picker,Text,View} from 'react-native';
import {connect} from 'react-redux';
import {asessmentDataFetch,asessmentUpdate} from '../actions';
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
                <CardSection>
                <Text>
                     {"BMI : "+this.props.recommendations.aerobicRec.excercise.name}
                </Text>
                </CardSection>

                <CardSection>
                <Text>
                     {"BMI : "+this.props.recommendations}
                </Text>
                </CardSection>

                <CardSection>
                <Text>
                     {"BMI : "+this.props.recommendations}
                </Text>
                </CardSection>

            
                <CardSection>
                <Text>
                     {"BMI : "+this.props.recommendations}
                </Text>
                </CardSection>
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

export default connect(mapStateToProps, {asessmentDataFetch})(Recommendations);