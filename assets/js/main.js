const styles = require('../sass/_variables.scss');
const page   = window['page'] || {};


page.testPage = function() {
    console.log('font-size: ' + styles.fontSize);
};


module.exports = page;
