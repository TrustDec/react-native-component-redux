import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Button, Image, View, Text,StyleSheet } from 'react-native';
import *as action from "../redux/actions";

class LoginScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : 'LoginScreen',
        }
    }
    render(){
        const { counter,increment,decrement, navigation } = this.props;
        return(
            <View style={styles.container}>
                <Text>当前数值：{counter}</Text>
                <Button
                    onPress={increment}
                    title={"增"}
                />
                <Button
                    onPress={decrement}
                    title={"减"}
                />
                <Button
                    onPress={()=>navigation.navigate('ModalGlobal')}
                    title={"Info"}
                />
                <Button
                    onPress={()=>navigation.navigate('HomeScreen')}
                    title={"Go to Home"}
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
    },
});
const mapStateToProps = (state) => {
    console.log(state)
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