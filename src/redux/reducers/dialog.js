const initialState = {
    show: false,
    children: null,
    dialogTitle: null
};
export default (dialog = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_DIALOG':
            return Object.assign({}, initialState, {
                show: true,
                ...action
            });
        case 'HIDE_DIALOG':
            return initialState;
        default:
            return state;
    }
});
