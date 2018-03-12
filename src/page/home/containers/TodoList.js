import React from 'react'
import { View,StatusBar } from 'react-native';
import Footer from '../../../components/Footer'
import AddTodo from '../../../components/AddTodo'
import VisibleTodoList from '../../../components/VisibleTodoList'
import Button from '../../../modules/Button'
const TodoList = () => (
    <View>
        <AddTodo />
        <Footer />
        <VisibleTodoList />
    </View>
)
TodoList.navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    StatusBar.setBackgroundColor(navigationOptions.headerStyle.backgroundColor,true);
    StatusBar.setBarStyle('default');
    return {
        title: params ? params.otherParam : 'TodoList',
        headerStyle: {
            backgroundColor: navigationOptions.headerStyle.backgroundColor,
        },
        headerRight:<View/>,
        headerTintColor: navigationOptions.headerTintColor,
    }
}
export default TodoList