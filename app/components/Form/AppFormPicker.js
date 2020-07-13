import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppPicker from '../AppPicker/AppPicker';
import * as Yup from 'yup'

function AppFormPicker({ items, name, placeholder }) {

    const { setFieldvalue, values, errors, touched } = useFormikContext();


    return (
        <>
            <AppPicker
                icon='format-list-bulleted-square'
                items={items}
                onSelectedItem={item => setFieldvalue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default AppFormPicker;