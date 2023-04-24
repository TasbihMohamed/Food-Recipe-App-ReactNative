import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/theme'

export default function CategoryCard({ onPress, containerStyle, categoryItem }) {
  return (
    <TouchableOpacity style={{
      flexDirection: "row", alignItems: "center",
      backgroundColor: COLORS.gray2, borderRadius: SIZES.radius
      , padding: 10, marginTop: 10,
      ...containerStyle
    }} onPress={onPress}>

      <Image
        source={categoryItem.image} resizeMode="cover"
        style={{ borderRadius: SIZES.radius, width: 100, height: 100 }} />
      {/*Deatails  */}
      <View style={{
        paddingHorizontal: 20,
        width: "65%"
      }}>
        <Text style={{ flex: 1, ...FONTS.h2 }}>
        {categoryItem.name}
        </Text>
        <Text style={{ color:COLORS.gray, ...FONTS.body4 }}>
        {categoryItem.duration} |   {categoryItem.serving}Serving
        </Text>
      </View>
    </TouchableOpacity>
  )
}