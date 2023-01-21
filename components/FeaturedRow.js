import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({ id, title, desc }) => {

    const [restaurant, setRestaurant] = useState([])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured" && _id == $id] {
            ...,
            restaurants[]->{
              ...,
                dishes[]->,
              type->{
                name
              }
            },
          }[0]`, { id }).then(data => {
            setRestaurant(data?.restaurants)
        })
    }, [id])

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

                {/* Restaurants card */}
                {restaurant?.map((item) => {
                    return (
                        <RestaurantCard
                            key={item._id}
                            id={item._id}
                            imgUrl={item.image}
                            title={item.name}
                            rating={item.rating}
                            genre={item.type?.name}
                            address={item.address}
                            short_desc={item.short_desc}
                            dishes={item.dishes}
                            long={item.long}
                            lat={item.lat}
                        />
                    )
                })}

            </ScrollView>
        </View>
    )
}

export default FeaturedRow