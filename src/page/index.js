import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text,StyleSheet,StatusBar } from 'react-native';
import *as action from "../redux/actions/counter";
import Button from '../modules/Button'
class LoginScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        StatusBar.setBarStyle('default');
        StatusBar.setBackgroundColor(navigationOptions.headerStyle.backgroundColor,true)
        return {
            title: params ? params.otherParam : 'LoginScreen',
        }
    }
    render(){
        const { counter,increment,decrement, navigation } = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.counterText}>当前数值：{counter}</Text>
                <Button
                    onClick={increment}
                    title={"增"}
                    bgColor='#9DABC0'
                />
                <Button
                    onClick={decrement}
                    title={"减"}
                    bgColor='#5D9BFB'
                />
                <Button
                    onClick={()=>navigation.navigate('ModalGlobal')}
                    title={"Info"}
                    bgColor='#E3C883'
                />
                <Button
                    onClick={()=>navigation.navigate('HomeScreen')}
                    title={"Go to Home"}
                    bgColor='#3FBF66'
                />
                <Button
                    onClick={()=>navigation.navigate('ImmutableList')}
                    title={"See immutable example"}
                    bgColor='#FF3F00'
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
      backgroundColor: '#F5FCFF',
      paddingHorizontal:10
    },
    counterText:{
        fontSize:22,
        fontWeight:'bold'
    }
});
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: () => dispatch(action.increment),
        decrement: () => dispatch(action.decrement),
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)