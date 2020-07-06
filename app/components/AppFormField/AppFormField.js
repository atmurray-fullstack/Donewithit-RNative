import React from 'react';
import {

} from 'react-native';
import { useFormikContext } from 'formik'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

import AppTextInput from '../../components/AppTextInput/AppTextInput';


const AppFormField = ({ name, ...otherProps }) => {

    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <>
            <AppTextInput

                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </>

    );
}

export default AppFormField;