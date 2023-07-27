import moment from 'moment'

function formatDate(date: string|undefined) {
    if(!date) return
    return moment(date).format('Do MMMM YYYY');
}

export { formatDate }

