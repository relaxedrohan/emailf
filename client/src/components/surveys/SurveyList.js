import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';


class SurveyList extends Component {
    componentDidMount(){
        this.props.fetchSurveys();
    }

    renderSurveys(){
        return this.props.surveys.reverse().map( survey => {
            return(
            <div className="card purple lighten-5" key={survey._id}>
                <div className="card-content " >
                    <span className="card-title">{survey.title}</span>
                    <p>{survey.body} </p>
                    <p className="right" > sent on : {new Date(survey.dateSent).toLocaleDateString()} </p>

                </div>
                <div className="card-action" >
                    <button>Yes : {survey.yes} </button>
                    <button>No : {survey.no} </button>
                </div>
            </div>
            );
        });
    }

    render(){
        return(
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}


function mapStateToProps({surveys}){
    return{
        surveys
    };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);