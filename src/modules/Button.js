import React,{Component} from 'react'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient';
import { Text,TouchableOpacity,StyleSheet,Dimensions } from "react-native";
import { ColorUtils } from "../equipment/ColorUtils";

export default Button = ({ onClick, bgColor, title }) => {
    let color = ColorUtils.hex2Rgb('#0D656C');
    return <TouchableOpacity 
        onPress={onClick}
        activeOpacity={.6}
        style={[styles.container]} 
        underlayColor={''}>
        <LinearGradient 
            colors={[bgColor,bgColor, bgColor]}
            style={styles.container}>
            <Text style={[styles.buttonTitle]}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
};
Button.propTypes = {
    title: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
Button.defaultProps = {
    title: 'Button',
    bgColor: '#FB4A5A',
    onClick: ()=>false
}
const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:45,
        borderRadius:5,
        marginVertical:5
    },
    buttonTitle:{
        color:'#fff',
        fontSize:16
    }
});