import React from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../../components/Screen/Screen';
import AppFormField from '../../components/AppFormField/AppFormField';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import AppForm from '../../components/AppForm/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

const LoginScreen = () => {


    return (
        <Screen style={styles.container}>
            <Image
                source={require('../../assets/logo-red.png')}
                style={styles.logo}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >

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
}




const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,


    }
})
export default LoginScreen;