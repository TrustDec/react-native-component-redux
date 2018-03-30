export default dialog = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_DIALOG':
            return true
        default:
            return false
    }
}