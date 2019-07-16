import React, {Component} from 'react';
import './styles.scss';
import {BackBtn} from '../../components/BackBtn';
import {NextBtn} from '../../components/NextBtn';

class Footer extends Component{

 render(){

     const p = this.props;

     return(
         <footer>
             <div className={'footer-wrap'}>
                 <div className={'footer-btn'}>
                     {p.pageNum === 1 &&
                     <BackBtn
                         onClick={p.prevPage}
                     />
                     }
                 </div>

                 <div className={'footer-btn'}>
                     {p.pageNum < 2 &&
                         <NextBtn
                             disabled={p.disabled}
                             onClick={p.nextPage}
                         />
                     }
                 </div>
             </div>
         </footer>
     )
 }
}
 export default Footer;