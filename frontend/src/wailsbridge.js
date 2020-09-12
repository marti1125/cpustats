export default {
    Start: function (callback) {
        if (callback) {
            window.wails.Events.On("wails:ready", callback)
        }
    }
}