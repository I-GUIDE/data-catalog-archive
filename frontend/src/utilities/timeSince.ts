// 365 days
const SECONDS_IN_YEAR = 31536000

// 30 days
const SECONDS_IN_MONTH = 2592000

// 1 day
const SECONDS_IN_DAY = 86400

// 1 hour
const SECONDS_IN_HOUR = 3600

// 1 minute
const SECONDS_IN_MINUTE = 60

export function timeSince(date: Date): string {

    const now = new Date()
    const delta = now.getTime() - date.getTime()
    const seconds = Math.floor(delta / 1000);

    let interval = seconds / SECONDS_IN_YEAR;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }

    interval = seconds / SECONDS_IN_MONTH;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }

    interval = seconds / SECONDS_IN_DAY;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / SECONDS_IN_HOUR;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }

    interval = seconds / SECONDS_IN_MINUTE;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }

    return Math.floor(seconds) + " seconds";
}

export default timeSince;
