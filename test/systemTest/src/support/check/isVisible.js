var libraryRepoPage = require('../../pages/PageLibrary.json');
/**
 * Check if the given element is (not) visible
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
module.exports = (element, falseCase) => {
	/**
	 * Visible state of the give element
	 * @type {String}
	 */

	var path1 = `libraryRepoPage.locators.${element}`;
	element = eval(path1);
	const isVisible = browser.isVisible(element);

	if (falseCase) {
		expect(isVisible).to.not
			.equal(true, `Expected element "${element}" not to be visible`);
	} else {
		expect(isVisible).to
			.equal(true, `Expected element "${element}" to be visible`);
	}
};
