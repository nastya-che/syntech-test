import React, {Component} from 'react';
import CheckMark from '../../components/CheckMark';
import './styles.scss';
import RightArrow from '@material-ui/icons/ArrowForward';
import showResults from '../../components/ShowResults';
import {connect} from 'react-redux';

class SuccessPage extends Component{

    render(){
        return(
            <div className={'success-page'}>
                <CheckMark />
                <button onClick={() => showResults(this.props.formValues)}>
                    Go to Dashboard!
                    <RightArrow />
                </button>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    formValues: state.form.mainForm.values
});

export default connect(mapStateToProps)(SuccessPage);