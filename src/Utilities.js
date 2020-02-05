export function getActionStates(actionName) {
    if (typeof actionName !== 'string') {
      throw new Error('actionName must be a string');
    }
    const actionNameUpper = actionName.toUpperCase();
    const inProgress = `FETCHING_${actionNameUpper}`;
    const success = `FETCH_${actionNameUpper}_SUCCESS`;
    const failure = `FETCH_${actionNameUpper}_ERRORED`;
    const clear = `CLEAR_${actionNameUpper}`;

    return {
      inProgress,
      success,
      failure,
      clear
    };
}

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const formateDay = str => {
	let result = '';
	let currentDate = new Date().getTime();
	let updateDate = new Date(str);
	let updateDateTimeStamp = updateDate.getTime();
	let millisecondDay = 60 * 60 * 24 * 1000;
	let dayCount = Math.round((currentDate - updateDateTimeStamp) / millisecondDay);
	if (dayCount > 30) {
		result = `on ${updateDate.getDate()} ${months[updateDate.getMonth()]}`;
	} else {
		result = `${dayCount} days ago`;
	}

	return result;
};