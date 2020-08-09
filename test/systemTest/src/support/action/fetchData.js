import checkIfElementExists from '../lib/checkIfElementExists';
var libraryRepoPage = require('../../pages/PageLibrary.json');

/**
 * Set the value of the given input field to a new value or add a value to the
 * current element value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the element to
 * @param  {String}   element Element selector
 */

module.exports = (storyName) => {
	/**
	 * The command to perform on the browser object (addValue or setValue)
	 * @type {String}
	 */

	var testData = "";
	var tempVal = storyName.split(".");
	var storyId = tempVal[0];
	var paramName = tempVal[2];
	var scenarioId = tempVal[1]
	var data = masterTestData;

	for (var i = data.length - 1; i >= 0; i--) {
		if (data[i].StoryTitle == storyId && data[i].ScenarioId == scenarioId) {
			var temp = `data[${i}].${paramName}`;
			testData = eval(temp);
		}
	}

	return testData;

};
