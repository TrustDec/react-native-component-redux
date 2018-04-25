const defaultMock = [
  { id: 0, text: '吃饭', completed: false },
  { id: 1, text: '睡觉', completed: true },
  { id: 2, text: '打豆豆', completed: false },
];
export default (todos = (state = defaultMock, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id + defaultMock.length - 1,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(
        todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
      );
    default:
      return state;
  }
});
