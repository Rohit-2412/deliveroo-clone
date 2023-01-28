import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)

    if (items.length === 0) return null

    return (
        <View className="absolute bottom-10 z-50 w-full">
            <TouchableOpacity
                onPress={() => navigation.navigate('Basket')}
                className="flex-row space-x-1 bg-[#00ccbb] p-4 mx-5 rounded-lg items-center">
                <Text className="text-lg font-extrabold bg-[#01a296] text-white py-1 px-2">{items.length}</Text>
                <Text className="text-lg text-white flex-1 font-extrabold text-center">View Basket</Text>
                <Text className="text-lg font-extrabold text-white">${basketTotal}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon