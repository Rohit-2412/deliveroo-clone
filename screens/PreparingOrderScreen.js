import { SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 2500);
    }, [])

    return (
        <SafeAreaView className="bg-[#00ccbb] flex-1 items-center justify-center">
            <Animatable.Image
                source={require('../assets/loading.gif')}
                animation="slideInUp"
                iterationCount={1}
                className="h-96 w-96"
            />

            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            > Waiting for Restaurant to accept your order!</Animatable.Text>
            <Progress.Circle size={75} indeterminate={true} color="white" borderWidth={3} />
        </SafeAreaView>
    )
}

export default PreparingOrderScreen