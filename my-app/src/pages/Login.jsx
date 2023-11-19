import React from 'react'
import {Button, Text, TextInput, View, StyleSheet} from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'
import { loginValidationSchema } from '../validationSchemas/login.js'
import StyledText from '../components/StyledText.jsx'

const initialValues = {
    email:'',
    password:'',
}

const styles = StyleSheet.create({
    form:{
        margin:12,
    },
    error:{
        color:'red',
        fontSize:12,
        marginBottom:20,
        marginTop:-10
    }
})

const FormikInputValue = ({name,...props})=>{
    const[field,meta,helpers] = useField(name)
    return(
        <>
            <StyledTextInput
                value={field.value}
                error={meta.error}
                onChangeText={value=>helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

export default function LogInPage(){
    return (
    <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values=>console.log(values)}>
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