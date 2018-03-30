import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text,StyleSheet,StatusBar } from 'react-native';
import * as dialogType from "../../redux/actions/dialogType";
import Button from '../../modules/Button'
import { ColorUtils } from "../../equipment/ColorUtils";
import * as CONFIG from "../../equipment/ComponentUtil";

class HomeScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        StatusBar.setBarStyle('dark-content');
        !CONFIG.OS && StatusBar.setBackgroundColor(navigationOptions.headerTintColor,true);
        return {
            title: params ? params.otherParam : 'HomeScreen',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerRight:<View/>,
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        }
    }
    onNavigateRouthPush = routhName => {
        this.props.navigation.navigate(routhName);
    }
    openWebView = () => {
        this.props.navigation.navigate('OpenWebViewScreen');
    }
    render(){
        return(
            <View style={styles.container}>
                <Button
                    onClick={this.onNavigateRouthPush.bind(this,'CarouselScreen')}
                    title={"Go to Carousel"}
                    bgColor='#3FBF66'
                />
                <Button
                    onClick={this.onNavigateRouthPush.bind(this,'CounterScreen')}
                    title={"Go to Counter"}
                    bgColor='#9DABC0'
                />
                <Button
                    onClick={this.onNavigateRouthPush.bind(this,'ModalGlobal')}
                    title={"open Info"}
                    bgColor='#E3C883'
                />
                <Button
                    onClick={this.onNavigateRouthPush.bind(this,'TodoScreen')}
                    title={"Go to TodoScreen"}
                    bgColor='#2F3436'
                />
                <Button
                    onClick={this.onNavigateRouthPush.bind(this,'SetEventScreen')}
                    title={"Go to SetViewScreen"}
                    bgColor='rgb(215, 82, 145)'
                />
                <Button
                    onClick={this.onNavigateRouthPush.bind(this,'ImmutableList')}
                    title={"See immutable example"}
                    bgColor='#FF3F00'
                />
                <Button
                    onClick={()=>alert(ColorUtils.hex2Rgb('#188eee'))}
                    title={"转换成rgb"}
                    bgColor='#188eee'
                />
                <Button
                    onClick={this.openWebView}
                    title={"测试WebView"}
                    bgColor='#8E44AD'
                />
                <Button
                    onClick={this.props.showDialog}
                    title={"ShowDialog"}
                    bgColor='#5ACBC8'
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f7f7f7',
      paddingHorizontal:10
    },
});
const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showDialog: ()=>dispatch(dialogType.SHOW_DIALOG)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)