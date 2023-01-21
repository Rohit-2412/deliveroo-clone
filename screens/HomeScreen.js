import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useEffect, useState } from "react";
import { AdjustmentsHorizontalIcon, ChevronDownIcon, UserCircleIcon } from "react-native-heroicons/outline";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
    const navigation = useNavigation();

    const [featuredRow, setFeaturedRow] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "featured"] {
            ...,
            restaurants[]->{
              ...,
                dishes[]->,
              type->{
                name
              }
            },
          }`).then(data => setFeaturedRow(data))

    }, [])


    return (
        <SafeAreaView className="bg-white pt-5 pb-2">
            {/* Header */}
            <View className="flex-row items-center py-1 space-x-2 mt-5 px-3">

                <Image
                    source={{ uri: "https://links.papareact.com/wru" }}
                    className="h-7 w-7 rounded-full p-4"
                />

                <View className="flex-1" >
                    <Text className="text-gray-400 font-bold text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserCircleIcon size={35} color="#00CCBB" />
            </View>

            {/* search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4 mt-2">
                <View className="flex-row flex-1 bg-gray-200 p-3 space-x-2">
                    <MagnifyingGlassIcon color="gray" />
                    <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
                </View>
                <Text>
                    <AdjustmentsHorizontalIcon color="#00CCBB" />
                </Text>
            </View>

            {/* Body */}
            <ScrollView
                className="px-5 bg-gray-100">
                {/* categories */}
                <Categories />

                {/* featured rowss */}
                {featuredRow?.map((item) => (
                    <FeaturedRow
                        key={item._id}
                        id={item._id}
                        title={item.name}
                        desc={item.desc}
                        FeaturedCat={item.restaurants}
                    />
                ))}

            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
