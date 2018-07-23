// spec.js
describe('Verify app main functionality', function() {
  beforeEach(function() {
      browser.waitForAngularEnabled(false);
      browser.get('https://app.cboard.io/');
  });
  
  it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Cboard - AAC Communication Board');
  });

  it('should login successfully', function() {
      expect(element(by.buttonText('Login')).click());
      expect(element(by.name('email')).sendKeys('martinbedouret@gmail.com'));
      expect(element(by.name('password')).sendKeys('Cireha32065'));
      expect(element(by.css('.jss56.jss32.jss41.jss42.jss44.jss45.jss138')).click());
      expect(element(by.css('.Navbar.Board__navbar')));
  });

  it('should navigate thru pictograms', function() {
  });
});