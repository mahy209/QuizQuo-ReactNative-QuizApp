import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: "#FFBE00",
    secondary: '#b6ccff',
    accent: '#2c56b2',
    
    success: '#7bff40',
    error: '#ff6540',

    black: "#171717",
    white: "#FFFFFF",
    background: "#407BFF"
}


export const SIZES = {
    base: 10,
    width,
    height
}