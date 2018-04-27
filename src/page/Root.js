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
    TextInput,
    StyleSheet,
    StatusBar,
    ActivityIndicator,
    ScrollView,
    InteractionManager,
    LayoutAnimation
} from 'react-native';
import * as dialogType from '../redux/actions/dialogType';
import Button from '../modules/Button';
import * as actionCreators from '../redux/actions/loginActions';
import CodePush from 'react-native-code-push';
import Modal from 'react-native-modalbox';
import * as CONFIG from '../equipment/ComponentUtil';
import { ListRow } from 'teaset';
import PopupDialog from '../modules/PopupDialog';
import MaskedView from '../modules/MaskedView';
let components = [Text, TextInput];
const customProps = {
    style: {
        fontFamily: 'PingFangTC-Medium'
    },
    allowFontScaling: false
};
components.map((item, index) => {
    const TextRender = item.prototype.render;
    const initialDefaultProps = item.prototype.constructor.defaultProps;
    item.prototype.constructor.defaultProps = {
        ...initialDefaultProps,
        ...customProps
    };
    item.prototype.render = function render() {
        let oldProps = this.props;
        this.props = { ...this.props, ...customProps, style: [customProps.style, this.props.style] };
        try {
            return TextRender.apply(this, arguments);
        } finally {
            this.props = oldProps;
        }
    };
});
const customAnimationConfig = {
    duration: 400,
    create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 1
    },
    update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 1
    }
};
class LoginScreenView extends Component {
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
        rootKey: Math.random()
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
            rootKey: Math.random()
        });

        setTimeout(() => {
            this.setState({
                appReady: true
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
                actions: [NavigationActions.navigate({ routeName: 'NavigationBar' })]
            });
            //LayoutAnimation.configureNext(customAnimationConfig);
            LayoutAnimation.spring();
            this.props.navigation.dispatch(resetAction);
            console.log(this.props);
        }
    };
    showDialog = () => {
        const diaOptin = dialogType.LOGINMN_DIALOG;
        diaOptin.confirmBtn.disabled = this.props.theme.id === 'dark';
        diaOptin.confirmBtn.onPress = this.props.setTheme;
        diaOptin.cancelBtn.onPress = this.props.hideDialog;
        this.props.showDialog(diaOptin);
    };
    onCheckForUpdate = () => {
        this.props.showDialog(dialogType.UPDATE_DIALOG);
        CodePush.checkForUpdate(CONFIG.CODEPUS_KEY)
            .then(update => {
                if (!update) {
                    InteractionManager.runAfterInteractions(() => {
                        this.props.showDialog(dialogType.UP_TO_DATE);
                        setTimeout(() => {
                            this.props.hideDialog();
                        }, 1000);
                    });
                } else {
                    //this.props.showDialog(dialogType.AWAITING_USER_ACTION);
                    InteractionManager.runAfterInteractions(() => {
                        Alert.alert('有可用更新' + update.label, update.description, [
                            {
                                text: '取消',
                                onPress: () => {
                                    this.props.showDialog(dialogType.UPDATE_IGNORED);
                                    setTimeout(() => {
                                        this.props.hideDialog();
                                    }, 500);
                                }
                            },
                            {
                                text: '更新',
                                onPress: () => {
                                    update
                                        .download(mess => {
                                            let receivedBytes = (mess.receivedBytes / 1024).toFixed(3);
                                            let totalBytes = (mess.totalBytes / 1024).toFixed(3);
                                            let per = parseInt(receivedBytes / totalBytes * 100);
                                            this.props.showDialog(dialogType.DOWNLOADING_PACKAGE(per));
                                        })
                                        .then(LocalPackage => {
                                            InteractionManager.runAfterInteractions(() => {
                                                this.props.showDialog(dialogType.UPDATE_INSTALLED);
                                                setTimeout(() => {
                                                    LocalPackage.install(CodePush.InstallMode.IMMEDIATE, 0);
                                                }, 500);
                                            });
                                        });
                                }
                            }
                        ]);
                    });
                }
            })
            .catch(error => {
                InteractionManager.runAfterInteractions(() => {
                    this.props.showDialog(dialogType.UNKNOWN_ERROR);
                    setTimeout(() => {
                        this.props.hideDialog();
                    }, 500);
                });
            });
    };
    render() {
        return (
            <View style={styles.container} key={this.state.rootKey}>
                <MaskedView
                    isLoaded={this.state.appReady}
                    imageSource={this._image}
                    backgroundStyle={styles.loadingBackgroundStyle}>
                    <View style={{ height: 20, backgroundColor: '#fff' }} />
                    <ListRow
                        title="Production:"
                        detail={CONFIG.CODEPUS_KEY}
                        titlePlace="top"
                        detailStyle={[styles.counterTextRed, this.props.state.theme.styles.navFont]}
                    />
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
                        />dialogType.LOGINMN_DIALOG
                        <Button onClick={this.onCheckForUpdate} title={'检测更新'} bgColor="#16A085" />
                        <Button onClick={this.showDialog} title={'Dialog'} bgColor="#188eee" />
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
                            bgColor="#5ACBC8"
                        />
                    </View>

                    <Modal
                        style={styles.modal}
                        ref="modal"
                        isOpen={this.props.status == 'doing' ? true : false}
                        animationDuration={0}
                        position={'center'}>
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
        backgroundColor: '#f7f7f7'
    },
    counterText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    counterTextRed: {
        color: 'red',
        fontWeight: 'bold'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        borderRadius: 10
    },
    loadingBackgroundStyle: {
        backgroundColor: 'rgba(65, 140, 231,1)'
    }
});
const mapStateToProps = state => {
    return {
        isLoggedIn: state.login.isLoggedIn,
        status: state.login.status,
        state: state,
        theme: state.theme,
        schedule: state.schedule
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actionCreators, dispatch),
        showDialog: DIALOG => dispatch(DIALOG),
        hideDialog: () => dispatch(dialogType.HIDE_DIALOG),
        setTheme: () => dispatch({ type: 'DARK_THEME' }),
        setDefaultTheme: () => dispatch({ type: 'DEFAULT_THEME' }),
        downSchedule: schedule => dispatch({ type: 'STARE_DOWNLOADING', schedule: schedule })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenView);

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
