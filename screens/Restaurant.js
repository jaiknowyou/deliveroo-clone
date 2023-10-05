import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../features/restaurantSlice'

const Restaurant = () => {
    const {
        params:{
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
    }} = useRoute()
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(
            setRestaurant({
                id,
                imgUrl,
                title,
                rating,
                genre,
                address,
                short_description,
                dishes,
                long,
                lat
            })
        )
    }, [dispatch] )

    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
  return (
    <>
        <BasketIcon/>
        <ScrollView>
            <View className="relative">
                <Image
                    source={{
                        uri: imgUrl
                    }}
                    className="w-full h-56 bg-gray-300 p-4"
                />
            </View>
            <TouchableOpacity onPress={navigation.goBack} className="absolute top-8 left-4 p-2 bg-gray-200 rounded-full">
                <ArrowLeftIcon size={20} color="#00CCBB"/>
            </TouchableOpacity>
            <View className="bg-white">
                <View className = "pt-4 px-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center">
                            <StarIcon color="green" opacity={0.5} size={20}/>
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500 px-1">{rating}</Text> - {genre}
                            </Text>
                        </View>
                        <View className="flex-row items-center">
                            <MapPinIcon color="gray" opacity={0.4} size={22}/>
                            <Text className="text-xs text-gray-500">Nearby - {address}</Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2 pb-3">{short_description}</Text>
                </View>
                <TouchableOpacity className="flex-row items-center space-x-2 p-4
                bg-gray-50">
                    <QuestionMarkCircleIcon color="gray" opacity={0.6} size={28}/>
                    <Text className="flex-1 pl-2 text-md font-bold">Have a Food Allergy?</Text>
                    <ChevronRightIcon color="#00CCBB"/>
                </TouchableOpacity>
                <View className="pb-36">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
                    {/* Dishes */}
                    {dishes.map(dish=>(
                        <DishRow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={urlFor(dish.image).url()}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    </>
    
  )
}

export default Restaurant