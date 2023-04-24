import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { LinearGradient } from 'expo-linear-gradient'; // import LinearGradient from 'react-native-linear-gradient';
import images from '../constants/images';
import CustomButton from '../components/CustomButton';

const Login = ({ navigation }) => {
    function renderHeader() {
        return (
          <View style={{ height: SIZES.height > 700 ? "65%" : "60%" }}>
          <ImageBackground resizeMode='cover'
            source={images.loginBackground}
            style={{ flex: 1, justifyContent: "flex-end" }}>

            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
              style={{
                height: 200, paddingHorizontal: SIZES.padding,
                justifyContent: "flex-end"
              }}
              colors={[COLORS.transparent, COLORS.black]} >

              <Text style={{
                color: COLORS.white, width: "80%"
                , lineHeight: 45, ...FONTS.largeTitle
              }}>Cooking a Delicious Food Easily</Text>
            </LinearGradient>
    
          </ImageBackground>
        </View>)
      }
      function renderDetail() {
        return (
          <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
            <Text style={{ color: COLORS.gray, width: "70%", ...FONTS.body3 }}>
              Discover more than 1200 Recipes in your hands and cooking it easily .
            </Text>
    
            {/* buttons */}
            <View style={{
              flex: 1, justifyContent: 'center',
            }}>
    
              <CustomButton buttonText="Let's Start"
               // onPress={()=>navigation.navigate("Home")}
                onPress={()=>navigation.replace("Home")} // replace doesn't allow you to come back to the first screen (log in )
                colors={[COLORS.darkGreen, COLORS.lime]}
                buttonContainerStyle={{ borderRadius: 20, paddingVertical: 18 }} />
    
          
    
            </View>
          </View>
          )
    
      }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
        <StatusBar barStyle="light-content" />

        {/* header */}
        {renderHeader()}

        {/* Detail */}
        {renderDetail()}
      </View>
    )
}

export default Login;