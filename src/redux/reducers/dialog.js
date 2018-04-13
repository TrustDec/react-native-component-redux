const initialState={
    isShow:false,
    children:null
};
export default dialog = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'SHOW_DIALOG':
            return {isShow:true,children:action.children}
        case 'HIDE_DIALOG':
            return {isShow:false,children:null}
        default:
            return state
    }
}