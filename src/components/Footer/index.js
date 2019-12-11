import React, {Component} from 'react';
import './styles.scss';
import {BackBtn} from '../../components/BackBtn';
import {NextBtn} from '../../components/NextBtn';

class Footer extends Component{

 render(){

     const {pageNum, prevPage, nextPage, disabled} = this.props;

     return(
         <footer>
             <div className={'footer-wrap'}>
                 <div className={'footer-btn'}>
                     {pageNum === 1 &&
                     <BackBtn
                         onClick={prevPage}
                     />
                     }
                 </div>

                 <div className={'footer-btn'}>
                     {pageNum < 2 &&
                         <NextBtn
                             disabled={disabled}
                             onClick={nextPage}
                         />
                     }
                 </div>
             </div>
         </footer>
     )
 }
}
 export default Footer;