import checkContainsAnyText from './checkContainsAnyText';
var libraryRepoPage = require('../../pages/PageLibrary.json');

module.exports = (element, falseCase) => {
	let newFalseCase = true;

	if (typeof falseCase === 'function') {
		newFalseCase = false;
	} else if (falseCase === ' not') {
		newFalseCase = false;
	}

	var path = `libraryRepoPage.locators.${element}`;
	element = eval(path);

	checkContainsAnyText(element, newFalseCase);
};
