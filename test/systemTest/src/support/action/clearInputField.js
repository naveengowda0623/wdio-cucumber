
var libraryRepoPage = require('../../pages/PageLibrary.json');
/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   element Element selector
 */
module.exports = (element) => {
	var path = "libraryRepoPage.locators."+element;
	element = eval(path);
	browser.clearElement(element);
};
