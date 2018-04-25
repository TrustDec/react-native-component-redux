import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Todo from './Todo';
const TodoList = ({ todos, onTodoClick }) => (
    <View>{todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)}</View>
);
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};
export default TodoList;
