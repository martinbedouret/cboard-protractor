// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'https://cboard:5ab7f5b3-9ee3-4242-82c2-547cd8ffec04@ondemand.saucelabs.com/wd/hub',
  specs: ['spec.js'],
  multiCapabilities: [
    {
    browserName: 'microsoftedge'
  }]
}