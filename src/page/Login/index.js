import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import InputAccessoryView from 'InputAccessoryView';
import { NavigationActions } from 'react-navigation';
import * as dialogType from '../../redux/actions/dialogType';
const {
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
    TextInput,
    Button,
    TouchableOpacity,
    Keyboard,
    InteractionManager
} = ReactNative;
type Props = {};
type State = {};

class LoginScreen extends Component<Props, State> {
    state = { text: '' };
    get gradient() {
        return (
            <LinearGradient
                colors={['#04befe', '#4481eb']}
                startPoint={{ x: 1, y: 0 }}
                endPoint={{ x: 0, y: 1 }}
                style={{ ...StyleSheet.absoluteFillObject }}
            />
        );
    }

    onChangeText = text => {
        console.log(text);
    };
    onLogin = () => {
        this.props.showDialog();
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'RootScreen' })]
        });
        setTimeout(() => {
            this.props.hideDialog();
            InteractionManager.runAfterInteractions(() => {
                this.props.navigation.dispatch(resetAction);
                LayoutAnimation.linear();
            });
        }, 1500);
    };
    render() {
        return (
            <View style={styles.container}>
                {this.gradient}
                <View style={styles.loginInputBox}>
                    <TextInput
                        {...inputOption}
                        value={this.state.text}
                        placeholder={'请输入用户名'}
                        inputAccessoryViewID={inputAccessoryViewID}
                        onChangeText={this.onChangeText}
                    />
                    <TextInput
                        {...inputOption}
                        value={this.state.text}
                        placeholder={'请输入密码'}
                        inputAccessoryViewID={inputAccessoryViewID}
                        onChangeText={this.onChangeText}
                    />
                    <TouchableOpacity
                        onPress={this.onLogin}
                        activeOpacity={0.6}
                        style={[styles.loginButton]}
                        underlayColor={''}>
                        <Text style={styles.buttonTitle}>登录</Text>
                    </TouchableOpacity>
                </View>
                <InputAccessoryView nativeID={inputAccessoryViewID} backgroundColor="#fffffff7">
                    <View style={styles.textInputContainer}>
                        <Button onPress={() => Keyboard.dismiss()} title="确定" />
                    </View>
                </InputAccessoryView>
            </View>
        );
    }
}
const inputAccessoryViewID = 'inputAccessoryView1';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loginInputBox: {
        marginTop: 100,
        paddingHorizontal: 20
    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 45,
        borderRadius: 25,
        backgroundColor: '#53B6F6',
        marginTop: 20
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 17
    },
    textInputContainer: {
        flexDirection: 'row'
    },
    useridStyle: {
        height: 50,
        paddingLeft: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(255,255,255,.5)',
        borderRadius: 6,
        color: '#f1f1f1',
        fontSize: 16.5
    },
    text: {
        padding: 10,
        color: 'white'
    },
    textBubbleBackground: {
        backgroundColor: '#2f7bf6',
        borderRadius: 20,
        width: 110,
        margin: 20
    }
});
const inputOption = {
    style: styles.useridStyle,
    autoCapitalize: 'none',
    autoCorrect: false,
    underlineColorAndroid: 'transparent',
    keyboardAppearance: 'dark',
    placeholderTextColor: 'rgba(255,255,255,.7)'
};
LoginScreen.navigationOptions = () => ({ header: null });
const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showDialog: () => dispatch(dialogType.LOGIN_DIALOG),
        hideDialog: () => dispatch(dialogType.HIDE_DIALOG)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
