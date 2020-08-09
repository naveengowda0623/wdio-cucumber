import checkIfElementExists from '../lib/checkIfElementExists';
var libraryRepoPage = require('../../pages/PageLibrary.json');

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 */
module.exports = (action, type, element) => {
	/**
	 * Element to perform the action on
	 * @type {String}
	 */
	//const elem = (type === 'link') ? `=${element}` : element;


	var path = `libraryRepoPage.locators.${element}`;
	element = eval(path);
	/**
	 * The method to call on the browser object
	 * @type {String}
	 */
	const method = (action === 'click') ? 'click' : 'doubleClick';

	checkIfElementExists(element);

	browser[method](element);
};
