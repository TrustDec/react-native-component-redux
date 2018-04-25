import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { addTodo } from '../redux/actions/todo';
import Button from '../modules/Button';

class AddTodo extends Component {
    state = {
        text: ''
    };
    onChangeName = text => {
        this.setState({ text });
    };
    onAddTodo = () => {
        const { dispatch, todoText } = this.props;
        const text = this.input._lastNativeText;
        if (text && todoText !== text) {
            dispatch(addTodo(this.input._lastNativeText));
            this.input.clear();
            return;
        }
        alert('不能为空');
    };
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    ref={ref => (this.input = ref)}
                    placeholder="请输入待办事件"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    multiline={false}
                    clearButtonMode="while-editing"
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#aaa"
                    textAlignVertical="center"
                    underlineColorAndroid="transparent"
                />
                <View style={{ width: 100 }}>
                    <Button title="Add Todo" onClick={this.onAddTodo} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 50,
        flex: 1,
        fontSize: 20,
        backgroundColor: '#fff',
        color: '#aaa',
        padding: 0,
        borderWidth: 0,
        marginVertical: 5
    }
});
const mapStateToProps = state => {
    let text = state.todos[state.todos.length - 1].text;
    return {
        todoText: text
    };
};
export default connect(mapStateToProps)(AddTodo);
