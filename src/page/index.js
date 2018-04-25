import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SyanImagePicker from 'react-native-syan-image-picker';
import { NavigationActions } from 'react-navigation';
import {
  Alert,
  AlertIOS,
  Image,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import * as dialogType from '../redux/actions/dialogType';
import Button from '../modules/Button';
import * as actionCreators from '../redux/actions/loginActions';
import CodePush from 'react-native-code-push';
import Modal from 'react-native-modalbox';
import * as CONFIG from '../equipment/ComponentUtil';
import { ListRow, Toast } from 'teaset';
import ToastView from '../equipment/ToastUtil';
import PopupDialog from '../modules/PopupDialog';
import MaskedView from '../modules/MaskedView';
const customAnimationConfig = {
  duration: 400,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 1,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 1,
  },
};
class LoginScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return { header: null };
    // const { params } = navigation.state;
    // StatusBar.setBarStyle('dark-content');
    // !CONFIG.OS && StatusBar.setBackgroundColor(navigationOptions.headerTintColor,true)
    // return {
    //     title: params ? params.otherParam : 'LoginScreen',
    //     // header:null
    //     headerStyle: {
    //         backgroundColor: "#f7f7f7",
    //     },
    //     headerRight:<View/>,
    //     headerTintColor: navigationOptions.headerStyle.backgroundColor,
    // }
  };
  state = {
    phone: '123',
    password: '456',
    per: 0,
    appReady: false,
    rootKey: Math.random(),
  };
  constructor() {
    super();

    this._image = require('../image/twitter.png');
  }
  componentDidMount() {
    this.resetAnimation();
  }
  resetAnimation() {
    this.setState({
      appReady: false,
      rootKey: Math.random(),
    });

    setTimeout(() => {
      this.setState({
        appReady: true,
      });
    }, 1200);
  }
  onChangeText = text => {
    console.log(text);
  };
  login = () => {
    if (!this.state.phone || !this.state.password) {
      Alert.alert('温馨提示', '用户名或密码不能为空！');
    } else {
      this.refs.modal.open(); //loading 状态
      this.props.actions.login({ phone: this.state.phone, password: this.state.password }); //dispath 登陆
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'NavigationBar' })],
      });
      LayoutAnimation.configureNext(customAnimationConfig);
      this.props.navigation.dispatch(resetAction);
      console.log(this.props);
    }
  };
  onCheckForUpdate = () => {
    ToastView.showCustom('检测更新');
    CodePush.checkForUpdate(CONFIG.CODEPUS_KEY)
      .then(update => {
        ToastView.hideCustom();
        if (!update) {
          Toast.smile('暂无更新', 1500);
        } else {
          Alert.alert('有可用更新' + update.label, update.description, [
            { text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'destructive' },
            {
              text: '更新',
              onPress: () => {
                update
                  .download(mess => {
                    let receivedBytes = (mess.receivedBytes / 1024).toFixed(3);
                    let totalBytes = (mess.totalBytes / 1024).toFixed(3);
                    let per = parseInt(receivedBytes / totalBytes * 100);
                    this.setState({ per });
                  })
                  .then(LocalPackage => {
                    LocalPackage.install(CodePush.InstallMode.IMMEDIATE, 0);
                  });
              },
            },
          ]);
        }
      })
      .catch(error => {
        ToastView.hideCustom();
        Toast.sad('更新失败', 1500);
      });
  };
  render() {
    return (
      <View style={styles.container} key={this.state.rootKey}>
        <MaskedView
          isLoaded={this.state.appReady}
          imageSource={this._image}
          backgroundStyle={styles.loadingBackgroundStyle}
        >
          <View style={{ height: 20, backgroundColor: '#fff' }} />
          <ListRow
            title="Production:"
            detail={CONFIG.CODEPUS_KEY}
            titlePlace="top"
            detailStyle={[styles.counterTextRed, this.props.state.theme.styles.navFont]}
          />
          <ListRow title="更新进度:" detail={this.state.per} />
          <ListRow title="isLoggedIn:" detail={this.props.state.login.isLoggedIn + ''} />
          <ListRow title="status:" detail={this.props.state.login.status + ''} />
          <ListRow
            title="User Data:"
            detail={JSON.stringify(this.props.state.login.user)}
            titlePlace="top"
            detailStyle={styles.counterTextRed}
          />

          <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            <Button onClick={this.login} title={'模拟登录'} bgColor="#E67E23" />
            <Button
              onClick={() => this.props.navigation.navigate('HomeScreen')}
              title={'进入案例区'}
              bgColor="#C0392C"
            />
            <Button onClick={this.onCheckForUpdate} title={'检测更新'} bgColor="#16A085" />
            <Button onClick={this.props.showDialog} title={'Dialog'} bgColor="#188eee" />
            <Button
              onClick={() => {
                SyanImagePicker.showImagePicker(
                  { imageCount: 9, isRecordSelected: true },
                  (err, photos) => {
                    if (err) {
                      // 取消选择
                      return;
                    }
                    // 选择成功，渲染图片
                    // ...
                  }
                );
              }}
              title={'SyanImagePicker'}
              bgColor="#188eee"
            />
          </View>

          <Modal
            style={styles.modal}
            ref="modal"
            isOpen={this.props.status == 'doing' ? true : false}
            animationDuration={0}
            position={'center'}
          >
            <ActivityIndicator size="large" />
            <Text style={{ marginTop: 15, fontSize: 16, color: '#444444' }}>登陆中...</Text>
          </Modal>
        </MaskedView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  counterText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  counterTextRed: {
    color: 'red',
    fontWeight: 'bold',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  loadingBackgroundStyle: {
    backgroundColor: 'rgba(65, 140, 231,1)',
  },
});
const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    status: state.login.status,
    state: state,
    theme: state.theme,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
    showDialog: () => dispatch(dialogType.LOGIN_DIALOG),
    hideDialog: () => dispatch(dialogType.HIDE_DIALOG),
    setDefaultTheme: () => dispatch({ type: 'DEFAULT_THEME' }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

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
