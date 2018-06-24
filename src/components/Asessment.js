import React,{Component} from 'react';
import {Picker,Text,View} from 'react-native';
import {connect} from 'react-redux';
import {asessmentDataFetch,asessmentUpdate} from '../actions';
import {Card,CardSection,Input,Button,Footer} from './common';


class Asessment extends Component{
    componentWillMount(){
        this.props.asessmentDataFetch()
    }
    render(){
        return(
            <Card>
                <CardSection>
                <Text>
                     {"BMI : "+this.props.bmi}
                </Text>
                </CardSection>

                <CardSection>
                    <Text>
                        {"Body Fat : "+this.props.bodyFat}
                    </Text>
                </CardSection>

                <CardSection>
                    <Text>
                        {"Base Metabolic Rate : "+this.props.baseMetabolicRate}
                    </Text>
                </CardSection>
                <CardSection>
                    <Text>
                        {"Base Metabolic Rate : "+this.props.bodyAge}
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
        bmi,
        bodyFat,
        baseMetabolicRate,
        bodyAge
    } = state.asessment;
        return {
            bmi,
            bodyFat,
            baseMetabolicRate,
            bodyAge
        }
}

export default connect(mapStateToProps, {asessmentDataFetch})(Asessment);