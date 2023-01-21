import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
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
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test" />
        </ScrollView>
    )
}

export default Categories