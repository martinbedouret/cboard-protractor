// spec.js
describe('Verify app main title', function() {
  it('should have a title', function() {
      browser.waitForAngularEnabled(false);
      browser.get('https://app.cboard.io/');
      expect(browser.getTitle()).toEqual('Cboard - AAC Communication Board');
  });
});

describe('Verify app login', function() {
  it('should login successfully', function() {
      browser.waitForAngularEnabled(false);
      browser.get('https://app.cboard.io/');
      expect(element(by.buttonText('Login')).click());
      expect(element(by.name('email')).sendKeys('martinbedouret@gmail.com'));
      expect(element(by.name('password')).sendKeys('Cireha32065'));
      expect(element(by.css('.jss56.jss32.jss41.jss42.jss44.jss45.jss138')).click());
      expect(element(by.css('.Navbar.Board__navbar')));
  });
});

describe('Verify app is operative', function() {
  it('should navigate thru pictograms', function() {
      browser.waitForAngularEnabled(false);
      browser.get('https://app.cboard.io/');
  });
});