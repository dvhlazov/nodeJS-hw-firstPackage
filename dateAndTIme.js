// NPM Moment
import moment from 'moment';

export const getCurrentDateTime = () => {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
};