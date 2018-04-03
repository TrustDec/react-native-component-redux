export default dialog = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_DIALOG':
            return true
        case 'HIDE_DIALOG':
            return false
        default:
            return state
    }
}