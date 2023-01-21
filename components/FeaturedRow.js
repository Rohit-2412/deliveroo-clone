import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, desc }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between flex-1">
                <Text className="text-lg font-bold">{title}</Text>
                <ArrowRightIcon color="#00aacc" />
            </View>
            <Text className="text-xs text-gray-500">{desc}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 0
                }}
                showsHorizontalScrollIndicator={false}

                className="pt-1"
            >
                <RestaurantCard
                    id={"1"}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 High St"
                    short_desc="This is short description"
                    dishes={["Sushi", "Japanese", "Asian"]}
                    long={-0.0255}
                    lat={51.5416}
                />
                <RestaurantCard
                    id={"1"}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 High St"
                    short_desc="This is short description"
                    dishes={["Sushi", "Japanese", "Asian"]}
                    long={-0.0255}
                    lat={51.5416}
                />
                <RestaurantCard
                    id={"1"}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 High St"
                    short_desc="This is short description"
                    dishes={["Sushi", "Japanese", "Asian"]}
                    long={-0.0255}
                    lat={51.5416}
                />
                <RestaurantCard
                    id={"1"}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 High St"
                    short_desc="This is short description"
                    dishes={["Sushi", "Japanese", "Asian"]}
                    long={-0.0255}
                    lat={51.5416}
                />
                <RestaurantCard
                    id={"1"}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 High St"
                    short_desc="This is short description"
                    dishes={["Sushi", "Japanese", "Asian"]}
                    long={-0.0255}
                    lat={51.5416}
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow