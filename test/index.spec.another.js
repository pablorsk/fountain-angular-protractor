describe('Colmena Test', function() {
    // var firstCompnayLink = element(by.css('text-white'));
    var firstCompnayLink = element.all(by.repeater('company in vm.CompaniesService.companies')).get(0);

    var email = element(by.model('user.email'));
    var pass = element(by.model('user.password'));
    var loginbutton = element(by.tagName('button'));

    // var pass = element(by.model('text-white'));
    // var goButton = element(by.id('gobutton'));
    // var latestResult = element(by.binding('latest'));

    beforeEach(function() {
        // browser.get('http://juliemr.github.io/protractor-demo/');
        browser.get('http://localhost:3000/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Colmena versión ALPHA');
    });

    it('debería redireccionar al login', function() {

        expect(browser.getCurrentUrl()).toMatch(/login$/);

        email.sendKeys('someuser@gmail.com');
        pass.sendKeys('');

        loginbutton.click();

        expect(browser.getCurrentUrl()).toMatch(/company$/);
    });

    it('debería encontrar una compañía y poder hacerle click', function() {

        firstCompnayLink.click();

        expect(browser.getCurrentUrl()).toMatch(/dashboard$/);
    });

});
