import React from 'react'
import { View,StatusBar } from 'react-native';
import Footer from '../../../components/Footer'
import AddTodo from '../../../components/AddTodo'
import VisibleTodoList from '../../../components/VisibleTodoList'
import Button from '../../../modules/Button'
const TodoList = () => (
    <View>
        <StatusBar
            backgroundColor={'#FF3F00'}
            animated={true}
            barStyle='default'
        />
        <AddTodo />
        <Footer />
        <VisibleTodoList />
    </View>
)
export default TodoList