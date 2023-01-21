import { Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity'
import { TouchableOpacity, Image } from 'react-native'
const Categories = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        sanityClient.fetch(`*[_type == "category"]`).then(data => setCategory(data))

    }, [])

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 0,
                paddingTop: 10,
            }}
        >
            {/* category card */}
            <TouchableOpacity className="mr-2 items-center">
                <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/2178/2178610.png" }}
                    className="h-16 w-16 p-4"
                />
                <Text className=" text-black font-bold">Offers</Text>
            </TouchableOpacity>

            {category.map((item) => (
                <CategoryCard key={item._id} imgUrl={urlFor(item.image.asset._ref).url()} title={item.name} />
            ))}
        </ScrollView>
    )
}

export default Categories