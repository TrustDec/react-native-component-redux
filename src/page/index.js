import React,{ Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Alert,Image, View, Text,StyleSheet,StatusBar,ActivityIndicator } from 'react-native';
import Button from '../modules/Button'
import * as actionCreators from "../redux/actions/loginActions";
import Modal from 'react-native-modalbox';
class LoginScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(navigationOptions.headerTintColor,true)
        return {
            title: params ? params.otherParam : 'LoginScreen',
            header:null
        }
    }
    state={
        phone:"123",
        password:"456",
      }
    onChangeText = text => {
        console.log(text);
    }
    login = () => {
        if(!this.state.phone||!this.state.password){
          Alert.alert('温馨提示','用户名或密码不能为空！');
        }else{
            this.refs.modal.open();//loading 状态
           this.props.actions.login({'phone':this.state.phone,'password':this.state.password});//dispath 登陆
        }
      }
    render(){
        return(
            <View style={styles.container}>
                <View style={{flexDirection:'row',}}>
                    <Text style={styles.counterText}>isLoggedIn:</Text>
                    <Text style={[styles.counterText,styles.counterTextRed]}>{this.props.state.login.isLoggedIn+""}</Text>
                </View>
                <View style={{flexDirection:'row',}}>
                    <Text style={styles.counterText}>status:</Text>
                    <Text style={[styles.counterText,styles.counterTextRed]}>{this.props.state.login.status+''}</Text>
                </View>
                <View style={{flexDirection:'row',}}>
                    <Text style={styles.counterText}>user:</Text>
                    <Text style={[styles.counterText,styles.counterTextRed]}>{JSON.stringify(this.props.state.login.user)}</Text>
                </View>
                <Button
                    onClick={this.login}
                    title={"Go to Magical World"}
                    bgColor='#9DABC0'
                />
                <Button
                    onClick={()=>this.props.navigation.navigate('HomeScreen')}
                    title={"进入案例区"}
                    bgColor='#E3C883'
                />
                <Modal
                    style={styles.modal}
                    ref='modal'
                    isOpen={this.props.status=='doing'?true:false}
                    animationDuration={0}
                    position={"center"}
                    >
                    <ActivityIndicator
                    size='large'
                    />
                    <Text style={{marginTop:15,fontSize:16,color:'#444444'}}>登陆中...</Text>
                </Modal>
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingHorizontal:10
    },
    counterText:{
        fontSize:22,
        fontWeight:'bold'
    },
    counterTextRed:{
        color:'red'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        height:150,
        borderRadius:10,
      },
});
const mapStateToProps = (state) => {
    return{
        isLoggedIn:state.login.isLoggedIn,
        status:state.login.status,
        state:state
      };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)