const relativeDay = new Intl.RelativeTimeFormat(undefined, {style: 'long', numeric: 'auto'})
const formatDate = new Intl.DateTimeFormat(undefined, {})

export const dateDiffInDays = (a, z) => {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utcZ = Date.UTC(z.getFullYear(), z.getMonth(), z.getDate());

    return Math.floor((utcZ - utcA) / MS_PER_DAY);
}

export const dateHumanize = (date) => {
    const current = new Date()
    const diff = dateDiffInDays(current, date)

    if (diff > -30){
        return relativeDay.format(diff, 'day')
    } else {
        return formatDate.format(date)
    }
}

