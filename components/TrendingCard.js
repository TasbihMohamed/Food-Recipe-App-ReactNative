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
// import { BlurView } from 'expo-blur';
import { BlurView} from "@react-native-community/blur";
import { Platform } from 'react-native';

const RecipeCardInfo = (recipeItem) => {
  return (
    <BlurView
      blurType="dark"
      intensity={90}
      tint="dark"
      style={{
        position: 'absolue',
        bottom: 120, //10
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius,
      }}>
      <Text style={{ color: COLORS.white }}>{recipeItem.id} info </Text>

      <RecipeCardDetails recipeItem={recipeItem} />
    </BlurView>
  );

  // else  {

  //   return (
  //     <View>
  //       <Text>none</Text>
  //     </View>
  //   );
  // }
};
const RecipeCardDetails = (recipeItem) => {
  return (
    <View style={{ flex: 1 }}>
      {/*bookmark  */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            width: '70%',
            ...FONTS.h3,
            fontSize: 18,
            color: COLORS.white,
          }}>
          {recipeItem.id} detailsss
        </Text>
        <Image
          source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
          style={{
            marginRight: SIZES.base,
            width: 20,
            height: 20,
            tintColor: COLORS.darkGreen,
          }}
        />
      </View>
    </View>
  );
};
export default function TrendingCard({ onPress, containerStyle, recipeItem }) {
  return (
    <TouchableOpacity
      style={{
        width: 250,
        height: 350,
        borderRadius: SIZES.radius,
        marginTop: SIZES.radius,
        marginRight: 20,
        ...containerStyle,
      }}
      onPress={onPress}>
      <ImageBackground
        source={recipeItem.image}
        resizeMode="cover"
        style={{
          width: 250,
          height: 350,
          justifyContent: 'space-between',
          flexDirection: 'column',
          borderRadius: SIZES.radius,
        }}>
        <View
          style={{
            width: '30%',
            margin: 8,
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            paddingVertical: 5,
            backgroundColor: COLORS.transparentGray,
          }}>
          <Text style={{ color: COLORS.white, ...FONTS.h4 }}>
            {recipeItem.category}
          </Text>
        </View>
        {/* card Info */}
        <BlurView
          blurType="dark"
          intensity={90}
          tint="dark"
          style={styles.cardInfoStyle}
        >
          {/* card detail */}
          <View style={{ flex: 1 }}>
            {/*bookmark  */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  width: '70%',
                  ...FONTS.h3,
                  fontSize: 18,
                  color: COLORS.white,
                }}>
                {recipeItem.name}
              </Text>
              <Image
                source={
                  recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark
                }
                style={{
                  marginRight: SIZES.base,
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkGreen,
                }}
              />
            </View>
            {/*duration  */}
            <Text style={{ ...FONTS.body4, color: COLORS.lightGray }}>
              {recipeItem.duration} |{recipeItem.serving} Serving
            </Text>
          </View>
        </BlurView>
      </ImageBackground>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  cardInfoStyle: {
    height: 100,
    margin:7,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
});
