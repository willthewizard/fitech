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
                        {"Body Fat : "+this.props.bfr}
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
        bfr,
        baseMetabolicRate,
        bodyAge
    } = state.asessment;
        return {
            bmi,
            bfr,
            baseMetabolicRate,
            bodyAge
        }
}

export default connect(mapStateToProps, {asessmentDataFetch})(Asessment);