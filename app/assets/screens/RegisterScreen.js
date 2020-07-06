import React from 'react';
import {
    StyleSheet
} from 'react-native';
import * as Yup from 'yup';

import Screen from '../../components/Screen/Screen';
import { AppForm, AppFormField, SubmitButton } from '../../components/Form'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
    user: Yup.string().required().min(8).label('User')
});


const RegisterScreen = () => {
    return (
        <Screen>
            <AppForm
                initialValues={{ email: '', password: '', user: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name='user'
                    icon='account'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='User'
                    textContentType='username'
                />

                <AppFormField
                    name='email'
                    icon='email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Email'
                    keyboardType='email-address'
                    textContentType='emailAddress'

                />

                <AppFormField
                    name='password'
                    icon='lock'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Password'
                    textContentType='password'
                    secureTextEntry={true}
                />
                <SubmitButton
                    title='Login'
                />


            </AppForm>
        </Screen>


    );
};
const styles = StyleSheet.create({

})


export default RegisterScreen;

