import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_desc,
    dishes,
    long,
    lat
}) => {
    return (
        <TouchableOpacity className="bg-white mr-3 shadow">
            <Image
                source={{ uri: urlFor(imgUrl).url() }}
                className="h-36 w-64 p-4 rounded-sm" />

            <View className="px-3 pb-4 my-2">
                {/* restaraunt title */}
                <Text className="font-bold text-lg">{title}</Text>

                {/* rating and genre */}
                <View className="flex-row items-center space-x-1">
                    <StarIcon color={"green"} opacity={0.5} />
                    <Text className="text-gray-500">
                        <Text className="text-green-500">{rating}</Text> · {genre}
                    </Text>
                </View>

                {/* location */}
                <View className="flex-row items-center mt-1 space-x-1">
                    <MapPinIcon color={"gray"} opacity={0.5} size={22} />
                    <Text className="text-gray-500">Nearby · {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard