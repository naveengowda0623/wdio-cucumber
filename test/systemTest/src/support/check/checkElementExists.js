import checkIfElementExists from '../lib/checkIfElementExists';
var libraryRepoPage = require('../../pages/PageLibrary.json');
/**
 * Check if the given element exists
 * @param  {String}   isExisting Whether the element should be existing or not
 *                               (an or no)
 * @param  {String}   elem       Element selector
 */
module.exports = (isExisting, elem) => {
	/**
	 * Falsecase assertion
	 * @type {Boolean}
	 */

	var path = `libraryRepoPage.locators.${elem}`;
	elem = eval(path);

	let falseCase = true;

	if (isExisting === 'an') {
		falseCase = false;
	}

	checkIfElementExists(elem, falseCase);
};
