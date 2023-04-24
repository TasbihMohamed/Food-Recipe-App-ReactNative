import React from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constants';

// import { BlurView } from 'expo-blur';
import { BlurView } from "@react-native-community/blur";
import RecipeCreatorCardInfo from '../components/RecipeCreatorCardInfo';
import Viewers from '../components/Viewers';

const HEADER_HEIGHT = 350;

const Recipe = ({ navigation, route }) => {
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    let { recipe } = route.params;
    setSelectedRecipe(recipe);
  }, []);

  function renderRecipeCardHeader() {
    return (
      <View
        style={{
          //for the recipe page animated when scrolling down img marginTop:-1000,paddingTop:1000,
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        {/* Bg img */}
        <Animated.Image
          source={selectedRecipe?.image}
          resizeMode="containe"
          style={{
            height: HEADER_HEIGHT,
            width: '200%',
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />

        {/* recipe creater card */}
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
            //hide the creator card on scroll up in certain point
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 170, 250],
                  outputRange: [0, 0, 100],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <RecipeCreatorCardInfo selectedRecipe={selectedRecipe} />
        </Animated.View>
      </View>
    );
  }
  function renderHeaderBar() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          paddingBottom: 10,
        }}>
        {/* screen overlay animation*/}
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            height: 80,
            backgroundColor: COLORS.black,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
              outputRange: [0, 1],
            }),
          }}
        />
        {/*header bar title*/}
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 10,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                  outputRange: [50, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
            Recipe by :
          </Text>
          <Text style={{ color: COLORS.white2, ...FONTS.h3 }}>
            {selectedRecipe?.author?.name}
          </Text>
        </Animated.View>
        {/* back btn */}
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.transparentBlack5,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            style={{ height: 15, width: 15, tintColor: COLORS.lightGray }}
          />
        </TouchableOpacity>
        {/* bookmark */}
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={
              selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark
            }
            style={{ height: 30, width: 30, tintColor: COLORS.darkGreen }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderRecipeInfo() {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: SIZES.width,
          height: 130,
          paddingHorizontal: 30,
          paddingVertical: 20,
          alignItems: 'center',
        }}>
        {/* Recipe*/}
        <View
          style={{
            flex: 1.5,
            justifyContent: 'center',
          }}>
          <Text style={{ ...FONTS.h2 }}> {selectedRecipe?.name} </Text>
          <Text
            style={{ ...FONTS.body4, color: COLORS.lightGray2, marginTop: 5 }}>
            {' '}
            {selectedRecipe?.duration} | {selectedRecipe?.serving} Serving{' '}
          </Text>
        </View>
        {/* viewers */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Viewers viewersList={selectedRecipe?.viewers} />
        </View>
      </View>
    );
  }
  function renderIngrediantTitle() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 30,
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding
        }}>
        <Text style={{ flex: 1, ...FONTS.h3 }}>Ingrediants </Text>
        <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
          {selectedRecipe?.ingredients.length} items </Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        ListHeaderComponent={
          <View>
            {/* header */}
            {renderRecipeCardHeader()}
            {/* info */}
            {renderRecipeInfo()}
            {/* ingrediant title */}
            {renderIngrediantTitle()}
          </View>
        }
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              marginVertical: 5,
            }}>
            {/* icon */}
            <View
              style={{
                height: 50,
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                backgroundColor: COLORS.lightGray,
              }}>
              <Image source={item.icon} style={{ height: 40, width: 40 }} />
            </View>
            {/* description */}
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: 'center',
              }}>
              <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
            </View>
            {/* quantity */}
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Text style={{ ...FONTS.body3 }}>{item.quantity}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}
      />
      {/* header bar */}
      {renderHeaderBar()}
    </View>
  );
};

export default Recipe;
