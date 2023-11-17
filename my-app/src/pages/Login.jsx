import React from 'react'
import {Button, Text, TextInput, View, StyleSheet} from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'

const initialValues = {
    email:'',
    password:'',
}

const styles = StyleSheet.create({
    form:{
        margin:12,
    }
})

const FormikInputValue = ({name,...props})=>{
    const[field,meta,helpers] = useField(name)
    return(
        <StyledTextInput
            value={field.value}
            onChangeText={value=>helpers.setValue(value)}
            {...props}
        />
    )
}

export default function LogInPage(){
    return (
    <Formik initialValues={initialValues} onSubmit={values=>console.log(values)}>
        {({handleSubmit})=>{
            return <View style={styles.form}>
                <FormikInputValue 
                    placeholder='e-mail'
                    name='email'
                    />
                <FormikInputValue 
                    placeholder='password'
                    name='password'
                    secureTextEntry
                    />
                <Button onPress={handleSubmit} title='Log In'/>
            </View>
        }}
    </Formik>
    )
}