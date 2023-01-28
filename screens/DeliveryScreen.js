import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { useNavigation } from '@react-navigation/native'
import { XMarkIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    return (
        <View className="bg-[#00ccbb] flex-1 mt-10">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                        <XMarkIcon color={"white"} size={35} />
                    </TouchableOpacity>
                    <Text className="text-lg text-white font-light">Order Help</Text>
                </View>

                <View className="bg-white p-6 rounded-md my-2 mx-5 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-4xl font-bold">45-55 minutes</Text>
                        </View>
                        <Image
                            source={{ uri: "https://links.papareact.com/fls" }} className="h-20 w-20"
                        />
                    </View>

                    <Progress.Bar indeterminate={true} size={30} color={"#00ccbb"} />

                    <Text className="mt-3 text-gray-500">Your order at {restaurant.title} is being prepared!</Text>
                </View>
            </SafeAreaView>

            <MapView initialRegion={{
                latitude: 28.7041,
                longitude: 77.1025,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}
                className="flex-1 -mt-10 z-0"
                mapType='mutedStandard'
            >
                <Marker
                    coordinate={{
                        latitude: 28.7041,
                        longitude: 77.1025,
                    }}
                    title={restaurant.title}
                    description={restaurant.desc}
                    identifier='origin'
                    pinColor='#00ccbb'
                />
            </MapView>

            <SafeAreaView className="bg-white h-24 flex-row space-x-5 items-center">
                <Image source={{ uri: "https://links.papareact.com/wru" }} className="h-12 w-12 bg-gray-300 p-4 ml-5 rounded-full" />
                <View className="flex-1">
                    <Text className="text-lg font-bold">Rohit</Text>
                    <Text className="text-gray-500">Your Rider</Text>
                </View>
                <Text className="mr-5 text-[#00ccbb] font-bold text-lg">Call</Text>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen