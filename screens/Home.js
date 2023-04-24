import React from 'react';
import CategoryCard from '../components/CategoryCard';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import { COLORS, FONTS, SIZES, images, icons, dummyData } from '../constants';
import TrendingCard from '../components/TrendingCard'

const Home = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          height: 80,
          alignItems: 'center',
          marginTop: 30,
        }}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: COLORS.darkGreen, ...FONTS.h2 }}>
            Hello there
          </Text>
          <Text style={{ marginTop: 3, color: COLORS.gray, ...FONTS.body3 }}>
            What you want to cook today ?
          </Text>
        </View>

        <TouchableOpacity onPress={console.log('profile')}>
          <Image
            source={images.profile}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          height: 50,
          alignItems: 'center',
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}>
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />
        <TextInput
          placeholderTextColor={COLORS.gray}
          placeholder=" Search Recipe .. "
          style={{ marginLeft: SIZES.radius, ...FONTS.body3 }}
        />
      </View>
    );
  }
  function displayRecipeCard() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}>
        {/* image */}
        <View
          style={{
            alignItems: 'center',
            width: 100,
            justifyContent: 'center',
          }}>
          <Image source={images.recipe} style={{ width: 80, height: 80 }} />
        </View>
        {/* text */}
        <View
          style={{
            flex: 1,
            paddingVertical: SIZES.radius,
          }}>
          <Text style={{ width: '70%', ...FONTS.body4 }}>
            You have 12 Recipes that you haven't tried yet
          </Text>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={console.log('see recipe')}>
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: 'underline',
                ...FONTS.h4,
              }}>
              See Recipe
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function renderTrendingServices() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text style={{ marginHorizontal: SIZES.padding, ...FONTS.h2 }}>
          Trending Service
        </Text>

        <FlatList
          horizontal
          data={dummyData.trendingRecipes}
          keyExtractor={(item) => `${item.id}`}
          showsHorizontalScrollIndicator={false}

          renderItem={({ item ,index}) => {
            return (
              <TrendingCard recipeItem={item}
             containerStyle={{marginLeft:index==0? SIZES.padding: 0}}
                 onPress={() => navigation.navigate('Recipe', { recipe: item })} />
            );
          }}
        />
      </View>
    );
  }
  function renderCategoryHeader() {
    return( <View
        style={{flexDirection:'row',alignItems:'center',
          marginHorizontal: SIZES.padding,marginTop:20,
        }}>
        <Text
              style={{   flex:1,
                ...FONTS.h2,
              }}>
            Categories
            </Text>
        <TouchableOpacity>
        <Text
              style={{
                color: COLORS.gray,    
                ...FONTS.body4,
              }}>
             View All
            </Text>
             </TouchableOpacity>
         </View>
        )
  }



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* header */}
            {renderHeader()}
            {/* search */}
            {renderSearchBar()}
            {/* recipe crd */}
            {displayRecipeCard()}
            {/* treding services */}
            {renderTrendingServices()}
            {/* category header */}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <CategoryCard
              categoryItem={item}
              onPress={() => navigation.navigate('Recipe', { recipe: item })}
              containerStyle={{ marginHorizontal: SIZES.padding }}
            />
          );
        }}
        ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}
      />
    </SafeAreaView>
  );
};

export default Home;
