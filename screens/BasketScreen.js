import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const dispatch = useDispatch()
    const basketTotal = useSelector(selectBasketTotal)

    useMemo(() => {
        const groupedItem = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {})

        setGroupedItemsInBasket(groupedItem)
    }, [items])

    return (
        <SafeAreaView className="flex-1 bg-white pt-5 px-2">
            <View className="flex-1 bg-gray-100">
                <View className="py-5 border-b border-gray-300 bg-white shadow-sm">
                    <View>
                        <Text className="text-xl font-bold text-center mt-3">Basket</Text>
                        <Text className="text-center text-gray-600">{restaurant.title}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="absolute top-7 right-5">
                        <XCircleIcon color={"#00ccbb"} size={50} />
                    </TouchableOpacity>
                </View>


                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image
                        source={{ uri: "https://links.papareact.com/wru" }}
                        className="h-7 w-7 rounded-full p-4 bg-gray-300"
                    />
                    <Text className="flex-1">Delivery in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00ccbb]">Change</Text>
                    </TouchableOpacity>
                </View>


                <ScrollView className="divide-y divide-gray-300">
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-4">
                            <Text className="text-[#00ccbb]">{items.length} X</Text>
                            <Image source={{ uri: urlFor(items[0]?.imgUrl).url() }}
                                className="h-12 w-12 rounded-full p-4"
                            />
                            <Text className="flex-1 font-bold">{items[0]?.name}</Text>
                            <Text className="text-gray-600 font-semibold">{'\u20b9'} {items[0]?.price}</Text>
                            <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id: key }))}>
                                <Text className="text-[#00ccbb]">Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>


                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">{'\u20b9'} {basketTotal}</Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">{'\u20b9'} 50</Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="text-black font-extrabold">Order Total</Text>
                        <Text className="text-black font-extrabold">{'\u20b9'} {basketTotal + 50}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('PreparingOrder')}
                        className="rounded-lg bg-[#00ccbb] p-4">
                        <Text className="text-center font-extrabold text-white text-lg">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen