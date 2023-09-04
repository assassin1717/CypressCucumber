const report = require('multiple-cucumber-html-reporter');
const moment = require('moment');

const currentDate = moment();
const formattedDate = currentDate.format('MMM Do YYYY, hh:mm A');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './cypress/reports',
	metadata:{
        browser: {
            name: 'chrome'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress Front-end testing'},
            {label: 'Execution Start Time', value: formattedDate}
        ]
    }
});