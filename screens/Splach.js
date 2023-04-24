import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { COLORS, FONTS, SIZES, images } from '../constants/theme';
import LinearGradient from 'react-native-linear-gradient';
// import {CustomButton} from '../components';

export default function Splach({ navigation }) {
    renderHeader = () => {
        return (
            <View style={{ height: SIZES.height > 700 ? "65%" : "60%" }}>
                <ImageBackground resizeMode='cover'
                    // source={images.loginBackground}
                    style={{ flex: 1, justifyContent: "flex-end" }}>
                    {/* <linearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1}}
                // colors={{COLORS.transparent ,COLORS.black}}
                //  colors={[COLORS.transparent, '#3b5998', '#192f6a']}
                > */}

                    <Text
                    //  style={{ color: COLORS.white }}
                    >
                        Cooking a Delicious Food Easily
                    </Text>
                    {/* </linearGradient> */}
                </ImageBackground>

            </View>)
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>

            {/* <StatusBar style="auto" /> */}
            <StatusBar barStyle="light-content" />


            {/* header */}
            {renderHeader()}


            {/* Detail */}


            {/* 
      <View style={{ 
  //  flex: 1, justifyContent: 'center',
   }}>
   
      <CustomButton buttonText="LogIn" 
      // onPress=(()=>navigation.navigate("Home"))
      // onPress=(()=>navigation.replace("Home")) // replace doesn't allow you to come back to the first screen (log in )
      colors={[COLORS.darkGreen , COLORS.lime]}
      buttonContainerStyle={ {borderRadius:20, paddingVertical:18}}/>

    <CustomButton buttonText="Sign Up"   colors={[]} 
          buttonContainerStyle={ {borderRadius:20, paddingVertical:18 ,borderWidth:1,borderColor:COLORS.darkLime ,marginTop:SIZES.radius}}
      // onPress=(()=>navigation.replace("Home")) // replace doesn't allow you to come back to the first screen (log in )
    />

      </View> */}
        </View>
    )
}


// ////


