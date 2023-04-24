import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { Platform } from 'react-native';
// import { BlurView } from 'expo-blur';
import { BlurView } from "@react-native-community/blur";

export default function RecipeCreatorCardInfo({ selectedRecipe }) {
  if (Platform.OS === 'ios') {
    return (
      <BlurView
        blurType="dark"
        intensity={90}
        tint="dark"
        style={{ flex: 1, borderRadius: SIZES.radius }}>
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
          {/* profile photo  */}

          <View style={{ width: 40, height: 40, marginLeft: 20 }}>
            <Image
              source={selectedRecipe?.author.profilePic}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
          </View>

          {/* labels  */}
          <View style={{ flex: 1, marginHorizontal: 20 }}>
            <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>           
              Recipe by:
            </Text>
            <Text style={{ color: COLORS.white2, ...FONTS.h3 }}>       
              {selectedRecipe?.author.name}
            </Text>         
          </View>
                  {/* button  */}
           <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                marginRight: 20,
                alignItems: 'center',justifyContent: 'center',
                borderRadius: 20,borderWidth: 1,
                borderColor: COLORS.lightGreen1,
              }}
              onPress={()=> console.log('view Profile')}>
              <Image
                source={icons.rightArrow}
                style={{ width: 15, height: 15, tintColor: COLORS.lightGreen1 }}
              />
            </TouchableOpacity>
        </View>
      </BlurView>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.transparent,
        }}></View>
    );
  }
}
