const defaultSchedule = {
    schedule: 0
};
export default (schedule = (state = defaultSchedule, action) => {
    switch (action.type) {
        case 'STARE_DOWNLOADING':
            return { schedule: action.schedule, ...action };
        default:
            return state;
    }
});
