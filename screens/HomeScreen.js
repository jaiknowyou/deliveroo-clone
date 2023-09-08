import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            // headserShown: false,
        })
    })
  return (
    <SafeAreaView>
        <Text className="text-red-500">
            {}
            <View>
                <Image
                    source={{
                        uri:"https://links.papareact.com/wru",
                    }}
                    className="h-7 w-7 bg-gray-300"
                />
            </View>
        </Text>
    </SafeAreaView>
  )
}