import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsById } from '../features/basketSlice'

const DishRow = ({id, name, description, price, image}) => {
  const [isPressed, setIsPressed]= useState(false)
  const dispatch = useDispatch();
  const items = useSelector((state)=>selectBasketItemsById(state, id))
  const addItemToBasket = ()=>{
    dispatch(addToBasket({id, name, description, price, image}))
  }
  const removeItemFromBasket = ()=>{
    if(!items.length) return;
    dispatch(removeFromBasket({id}))
  }

  return (
    <>
      <TouchableOpacity onPress={()=>setIsPressed(!isPressed)} 
      className ={`bg-white border-gray-200 p-4 ${isPressed && "border-b-0"}`}>
        <View className="flex-row">
          <View className="flex-1 or-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400 mb-1">{description}</Text>
            <Text className="text-gray-400">INR {price}</Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{uri: image}}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
              <MinusCircleIcon size={40} color={ items.length > 0 ? "#00CCBB" : "gray"}/>
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB"/>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow