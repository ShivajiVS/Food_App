import { View, Text, } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
const CustomeInput = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query) => {
        setSearchQuery(query);
    }
    // ==============submit function ============================
    const onSearch = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c58ec6cf44msh978098dcbaca204p167f3ajsn2003b820ae85',
                'X-RapidAPI-Host': 'yelp-reviews.p.rapidapi.com'
            }
        };
        console.log(searchQuery)
        await fetch(`https://yelp-reviews.p.rapidapi.com/business-search?query=${searchQuery}&location=india&yelp_domain=yelp.com`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                const { request_id } = response
                console.log(request_id)
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <View className='mt-16'>
                <TextInput
                    placeholder='Search restaurants or food'
                    mode="outlined"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    activeOutlineColor="white"
                    className='w-[90vw] ml-4 bg-slate-100 border-0 text-xl '
                    right={< TextInput.Icon icon="magnify" size={25} onPress={onSearch} />}
                />
            </View>
        </>

    )
}

export default CustomeInput;