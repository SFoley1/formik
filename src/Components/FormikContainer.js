import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
    const checkboxOptions = [
        {key: 'Option 1', value: 'cOption1'},
        {key: 'Option 2', value: 'cOption2'}
    ]

    const radioOptions = [
        {key: 'Option 1', value: 'rOption1'},
        {key: 'Option 2', value: 'rOption2'}
    ]

    const dropdownOptions = [
        {key: 'Select an option', value : ''},
        {key: 'Option 1', value: 'option1'}
    ]

    const initialValues = { email: '',
                            description : '',
                            selectOption: '',
                            radioOption : '',
                            checkboxOption: [],
                            birthDate: null
                        }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required!'),
        description: Yup.string().required('Required!'),
        selectOption: Yup.string().required('Required!'),
        radioOption: Yup.string().required('Required!'),
        checkboxOption: Yup.array().min(1).required('Required!'), 
        birthDate: Yup.date().required('Required!').nullable(),      
    })
    const onSubmit = values => console.log('Form data', values)
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {
                    formik =>
                        <Form>
                            <FormikControl control='input' type='email' label='Email' name='email' />
                            <FormikControl control='textarea' label='Description' name='description'/>
                            <FormikControl control='select' label='Select a topic' name='selectOption' options ={dropdownOptions}/>
                            <FormikControl control='radio' label='Radio Topic' name='radioOption' options={radioOptions}/>
                            <FormikControl control='checkbox' label='Checkbox Topic' name='checkboxOption' options={checkboxOptions}/>
                            <FormikControl control='date' label='Pick a date' name='birthDate'/>
                            <button type="submit">Submit</button>
                        </Form>
                }
            </Formik>
        </div>
    );
};

export default FormikContainer;