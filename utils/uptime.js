/**
 * Function to get the uptime of the system 
 * @param uptime 
 * @returns string
 */
module.exports = uptime => {
    const date = new Date(uptime * 1000)
    //to account for atlantic time zone
    const days = date.getUTCDay - 4,
        hours = date.getUTCHours(),
        minutes = date.getUTCMinutes(),
        seconds = date.getUTCSeconds()
    //return the uptime in the format of days, hours, minutes, seconds
    let segments = []

    if (days > 0){
        segments.push(days + 'day' + (days == 1 ? '' : 's'))
    }
    if(hours > 0){
        segments.push(hours + 'hour' + (hours == 1 ? '' : 's'))
    }
    if(minutes > 0){
        segments.push(minutes + 'minute' + (minutes == 1 ? '' : 's'))
    }
    if(seconds > 0){
        segments.push(seconds + 'second' + (seconds == 1 ? '' : 's'))
    }

    const dateFinal = segments.join(', ')
    return dateFinal
}