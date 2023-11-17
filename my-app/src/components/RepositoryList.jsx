import React from 'react';
import {FlatList} from 'react-native';
import repositories from '../data/repositories.js';
import RepositoryItems from './RepositoryItems.jsx';

const RepositoryList = ()=>{
    return(
        <FlatList 
            data={repositories}
            renderItem={({item})=>
                <RepositoryItems {...item}/>
            }
            keyExtractor={item=>item.id}
        />
        
    )
}

export default RepositoryList;