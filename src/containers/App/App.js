import React from 'react';
import {connect} from 'react-redux';
import {prevPageAction, nextPageAction} from "../../redux/actions";
import ContactForm from '../../pages/ContactInfoPage/index';
import './styles.scss';

class App extends React.Component{

    render(){
        const {pageNum, prevPageAction, nextPageAction} = this.props;

        return (
            <div className="App">
                <div className={'main-wrapper'}>
                    <ContactForm
                        pageNum={pageNum}
                        prevPage={prevPageAction}
                        nextPage={nextPageAction}
                    />
                </div>
            </div>
        );
    }

}


const mapStateToProps = state => {
    return {
        pageNum: state.pageNum
    }
};

const mapDispatchToProps = dispatch => {
    return {
        prevPageAction: () => dispatch(prevPageAction()),
        nextPageAction: () => dispatch(nextPageAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
