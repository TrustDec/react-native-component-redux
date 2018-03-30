import React,{ Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Alert,AlertIOS,Image, View, Text,StyleSheet,StatusBar,ActivityIndicator,ScrollView } from 'react-native';
import * as dialogType from "../redux/actions/dialogType";
import Button from '../modules/Button'
import * as actionCreators from "../redux/actions/loginActions";
import CodePush from 'react-native-code-push'
import Modal from 'react-native-modalbox';
import * as CONFIG from "../equipment/ComponentUtil";
import { ListRow,Toast } from "teaset";
import ToastView from '../equipment/ToastUtil'

class LoginScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        StatusBar.setBarStyle('dark-content');
        !CONFIG.OS && StatusBar.setBackgroundColor(navigationOptions.headerTintColor,true)
        return {
            title: params ? params.otherParam : 'LoginScreen',
            // header:null
            headerStyle: {
                backgroundColor: "#f7f7f7",
            },
            headerRight:<View/>,
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        }
    }
    state={
        phone:"123",
        password:"456",
        per:0
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
      onCheckForUpdate = () => {
        ToastView.showCustom("检测更新");
        CodePush.checkForUpdate(CONFIG.CODEPUS_KEY)
            .then((update) => {
                ToastView.hideCustom();
                if (!update) {
                    Toast.smile("暂无更新",1500);
                } else {
                    Alert.alert("有可用更新"+update.label,update.description,
                    [
                        
                        {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'destructive'},
                        {text: '更新', onPress: () => {
                            update.download(mess=>{
                                let receivedBytes = (mess.receivedBytes / 1024).toFixed(3);
                                let totalBytes = (mess.totalBytes / 1024).toFixed(3);
                                let per = parseInt((receivedBytes / totalBytes) * 100);
                                this.setState({per})
                            }).then((LocalPackage)=>{
                                LocalPackage.install(CodePush.InstallMode.IMMEDIATE,0)
                            })
                        }},
                      ],
                );
                }
            })
            .catch((error)=>{
                ToastView.hideCustom();
                Toast.sad("更新失败",1500);
            })
      }
    render(){
        return(
            <ScrollView style={styles.container}>
                <ListRow title='Production:' detail={CONFIG.CODEPUS_KEY} titlePlace='top' detailStyle={styles.counterTextRed}/>
                <ListRow title='更新进度:' detail={this.state.per} />
                <ListRow title='isLoggedIn:' detail={this.props.state.login.isLoggedIn+""} />
                <ListRow title='status:' detail={this.props.state.login.status+''} />
                <ListRow title='User Data:' detail={JSON.stringify(this.props.state.login.user)} titlePlace='top' detailStyle={styles.counterTextRed}/>

                <View style={{paddingHorizontal:10,paddingVertical:10}}>
                    <Button
                        onClick={this.login}
                        title={"Go to Magical World"}
                        bgColor='#E67E23'
                    />
                    <Button
                        onClick={()=>this.props.navigation.navigate('HomeScreen')}
                        title={"进入案例区"}
                        bgColor='#C0392C'
                    />
                    <Button
                        onClick={this.onCheckForUpdate}
                        title={"检测更新"}
                        bgColor='#16A085'
                    />
                    <Button
                       onClick={this.props.showDialog}
                        title={"Dialog"}
                        bgColor='#188eee'
                    />
                </View>
                
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
                
            </ScrollView>
            
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f7f7',
    },
    counterText:{
        fontSize:22,
        fontWeight:'bold'
    },
    counterTextRed:{
        color:'red',
        fontWeight:'bold'
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
        actions: bindActionCreators(actionCreators, dispatch),
        showDialog: ()=>dispatch(dialogType.SHOW_DIALOG),
        hideDialog: ()=>dispatch(dialogType.HIDE_DIALOG),
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)

// { deploymentKey: 'o1kLkW73Fosz7Wp3MWkWKHNoTbQG4ksvOXqog',
//   description: '1.优化操作流程',
//   label: 'v2',
//   appVersion: '1.0.1',
//   isMandatory: true,
//   packageHash: 'a06e33a3b3cb4761911808050658fe1eaf6b6e73e032dc9dd39f43e4d2ad7ac2',
//   packageSize: 329815,
//   downloadUrl: 'http://180.76.138.89:3000/download/fu/FudmdBZNmfaEOOnlxcvWzfdzEvfV',
//   download: [Function: download],
//   isPending: false,
//   failedInstall: false 
// }