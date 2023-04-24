import React from 'react'
import { COLORS, FONTS } from '../constants/theme'
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CustomButton({ buttonText, onPress, colors, buttonContainerStyle }) {
    if (colors.length > 0)// there is Bg
    {
        return (
            <TouchableOpacity onPress={onPress}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                    style={{ ...buttonContainerStyle }}
                    colors={colors}>
                    <Text style={{ color: COLORS.white, textAlign: "center", ...FONTS.h3 }}>{buttonText}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <TouchableOpacity onPress={onPress} style={{ ...buttonContainerStyle }}>
                <Text style={{ color: COLORS.lightGreen, textAlign: "center", ...FONTS.h3 }}>{buttonText}</Text>
            </TouchableOpacity>

        )
    }

}