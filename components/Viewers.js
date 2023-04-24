import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constants';

export default function Viewers({ viewersList }) {
  if (viewersList?.length == 0) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.lightGray2,
          }}>
          Be the first one to try this
        </Text>
      </View>
    );
  }
  if (viewersList?.length <= 4) {
    return (
      <View>
        {/*profile */}
        <View
          style={{
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          {viewersList?.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  heigt: 50,
                  width: 50,
                  marginLeft: index == 0 ? 0 : -20,
                }}>
                <Image
                  source={item.profilePic}
                  style={{
                    borderRadius: 25,
                    width: 50,
                    height: 50,
                  }}
                />
              </View>
            );
          })}
        </View>

        {/*text */}
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.lightGray2,
            textAlign: 'right',
            lineHeight: 18,
          }}>
          
          {viewersList?.length} people
        </Text>

        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.lightGray2,
            textAlign: 'right',
            lineHeight: 18,
          }}>      
          Already try this
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        {/*profile */}
        <View
          style={{
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          {viewersList?.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={index}
                  style={{
                    heigt: 50,
                    width: 50,
                    marginLeft: index == 0 ? 0 : -20,
                  }}>
                  <Image
                    source={item.profilePic}
                    style={{
                      borderRadius: 25,
                      width: 50,
                      height: 50,
                    }}
                  />
                </View>
              );
            }
            if (index == 3) {
              return (
                <View
                  key={index}
                  style={{
                    height: 50,
                    width: 50,
                    marginLeft: -20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    backgroundColor: COLORS.darkGreen,
                  }}>
                  <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                    {viewersList?.length - 3}+
                  </Text>
                </View>
              );
            }
          })}
        </View>

        {/*text */}
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.lightGray2,
            textAlign: 'right',
            lineHeight: 18,
          }}>
          {viewersList?.length} people
        </Text>

        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.lightGray2,
            textAlign: 'right',
            lineHeight: 18,
          }}>        
          Already try this
        </Text>
      </View>
    );
  }
}
