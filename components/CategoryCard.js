import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="mr-2 items-center">
            <Image
                source={{ uri: imgUrl }}
                className="h-16 w-16 p-4 rounded-full"
            />
            <Text className=" text-black font-bold">{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard