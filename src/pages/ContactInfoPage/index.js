import React, {Component} from 'react'
import { Field, reduxForm, FormSection, isInvalid } from 'redux-form'
import Footer from "../../components/Footer";
import './styles.scss';
import SuccessPage from "../SuccessPage";
import Header from "../../components/Header";

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = ' is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = ' is invalid'
    }
    if (!values.password) {
        errors.password = ' is required'
    } else if (values.password.length < 6) {
        errors.password = ' is too short'
    }
    if (!values.confirm_password) {
        errors.confirm_password = ' is required'
    } else if (values.confirm_password !== values.password) {
        errors.confirm_password = ' is not the same'
    }

    if (!values.dateDay){
        errors.dateDay = ' is required'
    }

    if (!values.dateMonth){
        errors.dateMonth = ' is required'
    }

    if (!values.dateYear){
        errors.dateYear = ' is required'
    }

    if (!values.gender){
        errors.gender = 'Required'
    }else if (values.gender.length < 3) {
        errors.gender = 'Too short!'
    }
    return errors
};

const warn = values => {
    const warnings = {};
    if (new Date().getFullYear() - new Date(values.dateYear).getFullYear() < 19) {
        warnings.dateYear = 'You are less then 18!...'
    }
    return warnings
};

const renderField = ({
                         input,
                         label,
                         type,
                         meta: { touched, error, warning },
                         className,
                         placeholder
                     }) => (
    <div className={className + ((touched && (error || warning)) && ' error' || '' )}>
        <label>{label}</label>
        {touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        <div>
            <input {...input}
                   type={type}
                   placeholder={placeholder}
            />
        </div>
    </div>
);

const renderSelect = ({
  input, label, type, meta: {touched, error, warning},
  className, placeholder, min, max
}) => {

    let arr = [];
    arr.push(
        <option value="" disabled selected>{placeholder}</option>
    );
    for (let i = min; i <= max; i++){
        let num = i+'';
        num.length < 2 && (num = '0' + num);
        arr.push(
            <option value={num}>
                {num}
            </option>
        );
    }
    return [
        <span className={'warn'}>
                {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </span>,
        <select {...input} className={className}>

            {arr}
        </select>
    ]

};

const renderTextSelect = ({
    input, label, type, meta: {touched, error, warning},
    className
}) => {
      let arr = [];
      const variants = [
          'First variant',
          'Second variant',
          'Third variant'
      ];
      arr.push(
          <option value="" disabled selected></option>
      );
    for (let i = 0; i < variants.length; i++){
        arr.push(
            <option value={`variant-${i}`}>
                {variants[i]}
            </option>
        )
    }

    return(
        <select {...input} className={className}>
            {arr}
        </select>
    )
};


const ContactSection = () => {

    let dayArr = [];

    for (let i = 1; i <= 31; i++){
        dayArr.push(<option>
            <Field name={'dateDay'}
                   type={'number'}
                   component={renderField}
                   className={'date-wrap'}
                   value={i}
            />
        </option>);
    }

    return [
            <Field name="email"
                   type="email"
                   component={renderField}
                   label="Email"
                   className={'contact-cell'} />,

            <Field name="password"
                   type="password"
                   component={renderField}
                   label="Password"
                   className={'contact-cell'} />,

            <Field name="confirm_password"
                   type="password"
                   component={renderField}
                   label="Confirm Password"
                   className={'contact-cell'} />

        ]

};


class PersonalSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeRadio: undefined
        }
    }

    activeRadioHolder = (val) => {
        this.setState(() => {
            return{
                activeRadio: val
            }
        });
    };

    render(){

        const activeCl = 'active-radio',
            val1 = 'male',
            val2 = 'female',
            val3 = 'unspecified';

        return [
            <label className='group-label'>Date of birth</label>,
            <div className={'date-group'}>
                <Field name={'dateDay'}
                       type={'number'}
                       component={renderSelect}
                       className={'date-wrap'}
                       placeholder={'dd'}
                       min={1}
                       max={31}
                />

                <Field name={'dateMonth'}
                       type={'number'}
                       component={renderSelect}
                       className={'date-wrap'}
                       placeholder={'mm'}
                       min={1}
                       max={12}
                />

                <Field name={'dateYear'}
                       type={'number'}
                       component={renderSelect}
                       className={'date-wrap'}
                       placeholder={'yy'}
                       min={1950}
                       max={2019}
                />

            </div>,
            <label className='group-label'>Gender</label>,
            <div className={'gender-group'}>

                <Field name={'gender'}
                       type={'radio'}
                       component={renderField}
                       value={val1}
                       className={'radio-wrap ' + (this.state.activeRadio === val1 && activeCl || '')}
                       label={val1}
                       onChange={() => this.activeRadioHolder(val1)} />

                <Field name={'gender'}
                       type={'radio'}
                       component={renderField}
                       value={val2}
                       className={'radio-wrap ' + ( this.state.activeRadio === val2 && activeCl || '')}
                       label={val2}
                       onChange={() => this.activeRadioHolder(val2)} />

                <Field name={'gender'}
                       type={'radio'}
                       component={renderField}
                       value={val3}
                       className={'radio-wrap ' + (this.state.activeRadio === val3 && activeCl || '')}
                       label={val3}
                       onChange={() => this.activeRadioHolder(val3)} />
            </div>,
            <label className={'group-label'}>Where did you know about us?</label>,
            <Field
                name={'about_us'}
                type={'text'}
                component={renderTextSelect}
                className={'about-us'}
            />

        ]
    }
}


class OrderForm extends Component {
    render(){

        const { handleSubmit, invalid} = this.props;
        return[
            <Header pageNum={this.props.pageNum}/>,
            <form onSubmit={handleSubmit} name={'mainForm'}>
                {this.props.pageNum === 0 &&
                    <FormSection>
                        <ContactSection />
                    </FormSection>
                }
                {this.props.pageNum === 1 &&
                    <FormSection>
                        <PersonalSection />
                    </FormSection>
                }
                {this.props.pageNum === 2 &&
                    <SuccessPage />
                }
            </form>,
            <Footer
                prevPage={this.props.prevPage}
                nextPage={this.props.nextPage}
                pageNum={this.props.pageNum}
                disabled={invalid}
            />
        ]
    }
}

export default reduxForm({
    form: 'mainForm',
    validate,
    warn,
    invalid: isInvalid('mainForm')
})(OrderForm)