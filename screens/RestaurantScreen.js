import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, StarIcon, MapPinIcon, ChevronRightIcon } from 'react-native-heroicons/solid'
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'

const RestaurantScreen = () => {
    const navigation = useNavigation()

    const { params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        desc,
        dishes,
        long,
        lat
    } } = useRoute()

    useLayoutEffect(() => {

        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <ScrollView className="mt-12 bg-gray-100">
            <View className="relative">
                <Image
                    source={{ uri: urlFor(imgUrl).url() }}
                    className="h-56 w-full p-4"
                />
                <TouchableOpacity onPress={navigation.goBack} className="absolute top-4 left-3 bg-gray-200 rounded-full p-3" >
                    <ArrowLeftIcon color="#00aacc" size={20} className="absolute top-14 left-14" />
                </TouchableOpacity>
            </View>

            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{title}</Text>

                    <View className="flex-row items-center space-x-2 my-1">
                        {/* rating and genre */}
                        <View className="flex-row items-center space-x-1">
                            <StarIcon color="green" opacity={0.5} size={20} />
                            <Text className="text-s text-gray-500"><Text className="text-green-500">{rating}</Text> · {genre}</Text>
                        </View>

                        {/* address */}
                        <View className="flex-row items-center space-x-1">
                            <MapPinIcon color="gray" opacity={0.4} size={20} />
                            <Text className="text-s text-gray-500">Nearby · {address}</Text>
                        </View>

                    </View>

                    {/* description */}
                    <Text className="text-gray-600 mt-2 pb-4">{desc}</Text>

                </View>

                <TouchableOpacity className="flex-row space-x-2 p-3 items-center border-y border-gray-300">
                    <QuestionMarkCircleIcon color="gray" opacity={0.6} size={25} />
                    <Text className="font-bold text-md flex-1 pl-2">Having a food allergy?</Text>
                    <ChevronRightIcon color="#00aacc" />

                </TouchableOpacity>
            </View>

            <View>
                <Text className="px-4 font-bold text-xl mb-3 pt-4">Menu</Text>

                {/* menus row */}
                {!dishes &&
                    <Text className="text-center font-bold text-gray-500 text-md">
                        No menu available at the moment
                    </Text>}
                {dishes && dishes.map((dish) => (
                    <DishRow
                        key={dish._id}
                        id={dish._id}
                        name={dish.name}
                        price={dish.price}
                        imgUrl={urlFor(dish.image.asset._ref).url()}
                        desc={dish.desc}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen