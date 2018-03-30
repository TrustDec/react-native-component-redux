import React, { Component } from 'react';
import ReactNative from 'react-native';
const { WebView,View,StyleSheet,Text,StatusBar } = ReactNative;
const DEFAULT_URL = "https://didi.github.io/cube-ui/example";
export default class OpenWebView extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : '网页视图',
            headerRight:<View/>,
        }
    }
    state = {
        url: DEFAULT_URL,
        status: 'No Page Loaded',
        backButtonEnabled: false,
        forwardButtonEnabled: false,
        loading: true,
        scalesPageToFit: true,
      }
    onNavigationStateChange = (navState) => {
        this.props.navigation.setParams({ otherParam: navState.title });
        this.setState({
          backButtonEnabled: navState.canGoBack,
          forwardButtonEnabled: navState.canGoForward,
          url: navState.url,
          status: navState.title,
          loading: navState.loading,
          scalesPageToFit: true
        });
        
      }
      goBack = () => {
        this.webview.goBack();
      }
      handleMessage = (evt: any) => {
        const message = evt.nativeEvent.data
    }
    render(){
        return(
            <View style={{flex:1,height:'100%'}}>
                <WebView
                    ref={w => this.webview = w}
                    onMessage={this.handleMessage}
                    source={{ uri: this.state.url }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    automaticallyAdjustContentInsets={false}
                    onNavigationStateChange={this.onNavigationStateChange}
                />
                <View style={styles.container}>
                    <Text onPress={this.goBack}>back</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height:30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      paddingHorizontal:10
    }
});