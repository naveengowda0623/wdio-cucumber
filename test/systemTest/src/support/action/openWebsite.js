import fetchData from '../action/fetchData';
/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 */
module.exports = (type, page) => {
    /**
     * The URL to navigate to
     * @type {String}
     */

    page = fetchData(page);
    
    const url = (type === 'url') ? page : browser.options.baseUrl + page;

    browser.url(url);
};
