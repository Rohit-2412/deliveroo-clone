import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemWithId } from '../features/basketSlice'

const DishRow = ({
    id,
    name,
    price,
    imgUrl,
    desc
}) => {

    const dispatch = useDispatch();
    const [isPress, setIsPress] = useState(false)
    const items = useSelector((state) => selectBasketItemWithId(state, id))

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, price, imgUrl, desc }))
    }

    const removeItemFromBasket = () => {
        // check for empty basket
        if (!items.length > 0) {
            return
        }

        dispatch(removeFromBasket({ id }))
    }

    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPress(!isPress)}
                className={`bg-white border p-4 border-gray-200 ${isPress && "border-b-0"}`}>
                <View className="flex-row items-center ">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{desc}</Text>
                        <Text className="text-gray-400 mt-2">${price}</Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#f3f3f4"
                            }}
                            source={{ uri: imgUrl }} className="h-20 w-20 bg-gray-300 p-4" />
                    </View>
                </View>
            </TouchableOpacity>

            {isPress &&
                <View className="bg-white px-3 pb-4">
                    <View className="flex-row items-center space-x-2">
                        <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                            <MinusCircleIcon size={40}
                                color={items.length > 0 ? "#00ccbb" : "gray"} />
                        </TouchableOpacity>

                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket} >
                            <PlusCircleIcon size={40} color="#00ccbb"
                            />
                        </TouchableOpacity>

                    </View>
                </View>}

        </>

    )
}

export default DishRow