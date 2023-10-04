import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const colors = {
    background: '#FFFFFF',
    primary: '#D45D3A',
    secondary: '#49F5B8',
    textBlack: '#000000',
    textWhite: '#FFFFFF',
    width: width,
    height: height,
    blackTransparent: 'rgba(0, 0, 0, 0.5)',
};

export default colors;