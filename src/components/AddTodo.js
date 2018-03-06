import React,{Component} from 'react'
import { connect } from 'react-redux'
import {  View,TextInput,StyleSheet,Text } from "react-native";
import { addTodo } from '../redux/actions/todo'
import Button from '../modules/Button'

class AddTodo extends Component {
    state = {
        text: '',
    };
    onChangeName = text => {
        this.setState({ text })
    }
    onAddTodo = () => {
        const {dispatch,todoText} = this.props;
        const text = this.input._lastNativeText;;
        if(text && todoText !== text){
            dispatch(addTodo(this.input._lastNativeText))
            this.input.clear()
            return
        }
        alert("不能为空");
    }
    render(){
        return(
        <View>
            <TextInput
                ref={(ref)=>this.input=ref}
                placeholder='请输入待办事件'
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                underlineColorAndroid='transparent'
            />
            <Button title='Add Todo' onClick={this.onAddTodo}/>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        fontSize: 20,
        backgroundColor: '#fff',
        margin:5
    }
});
const mapStateToProps = (state) => {
    let text = state.todos[state.todos.length-1].text;
    return {
        todoText: text,
    }
};
export default connect(mapStateToProps)(AddTodo)