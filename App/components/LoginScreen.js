import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
const changeTextAction = {  
    type:'CHANGE_TEXT'  
}  
const buttonClickAction = {  
    type:'BUTTON_CLICK'  
} 
// export const increment = ()=> {type: 'INCREMENT_COUNTER'};
// export const decrement = ()=> {type: 'DECREMENT_COUNTER'}
        const increment = {type: 'INCREMENT_COUNTER'};
        const decrement = {type: 'DECREMENT_COUNTER'}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const LoginScreen = (navigation) => {
    const {counter,num, onChangeText, onButtonClick,increment,decrement}= navigation;
    console.log("navigation")
    return <View style={styles.container}>
            <Text style={styles.welcome}>Screen A</Text>
                <Text style={styles.instructions}>
                    {JSON.stringify(num)}
                </Text>
                <Button
                onPress={onChangeText}
                title={counter.text}
                />
    <Button
    onPress={increment}
    title={"+"}
    />
    <Button
    onPress={decrement}
    title={"-"}
    />
                <Text style={styles.instructions}>
                This is great
                </Text>
                <Button
                onPress={() => navigation.navigation.dispatch({ type: 'Login' })}
                title="Log in"
                />
    </View>
};
LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
LoginScreen.navigationOptions = {
  title: 'Log In',
};

//export default LoginScreen;
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        num:state.num
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onButtonClick:()=>dispatch(buttonClickAction),  
        onChangeText:()=>dispatch(changeTextAction),
        increment: () => dispatch(increment),
        decrement: () => dispatch(decrement),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);