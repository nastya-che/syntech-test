import React, {Component} from 'react';
import './styles.scss';
import {ProgressLine} from '../../components/ProgressLine';
import {HeaderTitle} from '../../components/HeaderTitle';

class Header extends Component{

    render(){
        return(
            <header>
                <HeaderTitle pageNum={this.props.pageNum} />
                <ProgressLine pageNum={this.props.pageNum} />
            </header>
        )
    }
}

export default Header;