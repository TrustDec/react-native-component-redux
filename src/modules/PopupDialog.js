import React,{ Component } from 'react';
import PropTypes from 'prop-types'; 
import { View,Text,TouchableOpacity,StyleSheet } from "react-native";
import PopupDialog,{ SlideAnimation,DialogTitle,ScaleAnimation,DialogButton } from 'react-native-popup-dialog';

const dialogTitle = props => <DialogTitle {...props} />;
class PopupDialogView extends Component {
    render(){
        return(
            <PopupDialog {...this.props} dialogStyle={{overflow:'hidden'}}>
                {this.props.children}
                <View style={{flexDirection:'row',position:'absolute',bottom:0}}>
                {
                    this.props.cancelBtn && <TouchableOpacity 
                    activeOpacity={.6} 
                    onPress={this.props.cancelBtn.onPress}
                    style={[styles.container,{backgroundColor:this.props.cancelBtn.bgColor}]}
                >
                    <Text style={styles.buttonTitle}>{this.props.cancelBtn.title}</Text>
                </TouchableOpacity>
                }
                {
                    this.props.confirmBtn && <TouchableOpacity 
                    activeOpacity={.6}
                    disabled={this.props.confirmBtn.disabled}
                    onPress={this.props.confirmBtn.onPress}
                    style={[styles.container,{backgroundColor:this.props.confirmBtn.bgColor}]}
                >
                    <Text style={styles.buttonTitle}>{this.props.confirmBtn.title}</Text>
                </TouchableOpacity>
                }
                
                </View>
            </PopupDialog>
        );
    }
}
const scaleAnimation = new ScaleAnimation();
const actions = [];
PopupDialog.propTypes = {
    width:PropTypes.number,
    height:PropTypes.number,
    show:PropTypes.bool.isRequired,
    dismissOnTouchOutside:PropTypes.bool,
    dialogAnimation:PropTypes.object,
    dialogTitle:PropTypes.element,
    actions:PropTypes.arrayOf(PropTypes.element),
    //children:PropTypes.element.isRequired,
    confirmBtn:PropTypes.object,
    cancelBtn:PropTypes.object,
    overlayOpacity:PropTypes.number,
    overlayBackgroundColor:PropTypes.string
}
PopupDialog.defaultProps = {
    width:.9,
    height:300,
    show:false,
    dismissOnTouchOutside:false,
    dialogAnimation: scaleAnimation,
    dialogTitle: null,
    actions:actions,
    confirmBtn:null,
    cancelBtn:null,
    overlayOpacity:.7,
    overlayBackgroundColor:'#000'
}
const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        height:45,
        flex:1,
    },
    buttonTitle:{
        color:'#fff',
        fontSize:16
    }
});
export default PopupDialogView