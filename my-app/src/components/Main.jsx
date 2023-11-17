import React from 'react';
import {View,Text} from 'react-native';
import RepositoryList from './RepositoryList.jsx';
import AppBar from './AppBar.jsx';
import { Navigate, Route,Routes } from 'react-router-native';

const Main = () => {
    return(
        <View style={{flexGrow: 1 }}>
            <AppBar/>
            <Routes>
                <Route path='/' element={<RepositoryList/>}/>
                <Route path='/signin' element={<Text>SignIn</Text>}/>
                <Route path='*' element={<Navigate to='/' />}/>
            </Routes>
        </View>
    )
};

export default Main;