import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import client, { urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategory] = useState([])

  useEffect(()=>{
    client.fetch(`
      *[_type == 'category']`
    ).then((data)=>{
      setCategory(data)
    })
  }, [])


  return (
    <ScrollView 
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator ={false}
    >
      {/* {CategoryCard} */}
      {categories?.map(category=>(
        <CategoryCard
          key = {category._id}
          imgUrl = {urlFor(category.image).width(200).url()}
          title = {category.name}
        />
      ))}
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing"/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing"/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing"/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing"/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing"/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing"/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title="testing"/>
    </ScrollView>
  )
}

export default Categories