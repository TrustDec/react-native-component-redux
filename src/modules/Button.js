import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { Text,TouchableOpacity,StyleSheet,Dimensions } from "react-native";

export default Button = ({ onClick, bgColor, title }) => (
    <TouchableOpacity 
        onPress={onClick}
        activeOpacity={.6}
        style={[styles.container,{backgroundColor:bgColor}]} 
        underlayColor={''}>
        <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
);
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