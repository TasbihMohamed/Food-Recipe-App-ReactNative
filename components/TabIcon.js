import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { COLORS } from '../constants/theme'

export default function TabIcon( {icon ,focused}) {
  return (
    <View style={{width:50,height:38,//height:80,
    alignItems:"center",jutifyContent:"center"
    }}>
     
      <Image style={{width:30,height:30,
      tintColor:focused? COLORS.darkGreen : COLORS.lightLime}} 
      source={icon} />

      {focused && <View style={{
        position:"absolute" ,left:0,right:0,bottom:0,height:3,
        borderTopLeftRadius:5,borderTopRightRadius:5,
        backgroundColor:COLORS.darkGreen

    }}></View>}
    </View>
  );
}

