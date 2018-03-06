import React from 'react'
import { View } from 'react-native';
import Footer from '../../../components/Footer'
import AddTodo from '../../../components/AddTodo'
import VisibleTodoList from '../../../components/VisibleTodoList'
import Button from '../../../modules/Button'
const TodoList = () => (
  <View>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </View>
)
export default TodoList