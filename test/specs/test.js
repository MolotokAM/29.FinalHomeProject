const assert = require('assert');
const testPage = require('..//page/test.page');
const loginPage = require('..//page/login.page');
const PrimePage = require('..//page/prime.page');
const RegPage = require('..//page/reg.page');
const CarePage = require('..//page/care.page');

let url = 'https://github.com/';

describe('GitHub.com page', () => {
    it('1. Implement registration Test case 1', () => {
        function makeid(length) {
            var result = '';
            var characters = 'abcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        var name = makeid(8);
        console.log("Username: " + name);

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        var pass = makeid(8);
        console.log("Password: " + pass);

        function makeid(length) {
            var result = '';
            var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        var email = makeid(10)
        email += "@dom.com"
        console.log("Email: " + email);

        browser.url(url)
        browser.maximizeWindow()

        testPage.setName(name)
        browser.pause(2000);
        testPage.setemail(email)
        browser.pause(2000);
        testPage.setpass(pass)
        browser.pause(2000);
        testPage.sigh()
        browser.pause(2000);
        let verify = $('[class="f4 mb-3"]')
        expect(verify).toBeDisplayed()
    })

    it('2. Implement registration at the bottom Test case 2', () => {
        function makeid(length) {
            var result = '';
            var characters = 'abcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        var name = makeid(8);
        console.log("Username: " + name);

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        var pass = makeid(8);
        console.log("Password: " + pass);

        function makeid(length) {
            var result = '';
            var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        var email = makeid(10)
        email += "@dom.com"
        console.log("Email: " + email);

        browser.url(url)
        browser.maximizeWindow()

        testPage.setName2(name)
        browser.pause(2000);
        testPage.setemail2(email)
        browser.pause(2000);
        testPage.setpass2(pass)
        browser.pause(2000);
        testPage.sigh2()
        browser.pause(2000);
        let verify = $('[class="f4 mb-3"]')
        expect(verify).toBeDisplayed()

    })

    it('3. Login to site with verification', () => {
        browser.url(url)
        browser.maximizeWindow()
        browser.pause(2000);
        testPage.sigh3();
        browser.pause(2000);
        loginPage.type1();
        browser.pause(2000);
        loginPage.type2();
        browser.pause(2000);
        loginPage.cli();
        browser.pause(2000);
        testPage.start();
        browser.pause(2000);
        let iflogin = browser.getUrl();
        console.log("Переход на страницу: " + iflogin);
        testPage.menu();
        browser.pause(2000);
        testPage.sighouttest();
        browser.pause(2000);
    })

    it('4.  Forgot password', () => {
        browser.url(url)
        browser.maximizeWindow()
        browser.pause(2000);
        testPage.sigh3();
        browser.pause(2000);
        loginPage.forgot();
        browser.pause(2000);
        loginPage.cli2();
        browser.pause(2000);
        expect(loginPage.show).toBeDisplayed()
        loginPage.type3()
        browser.pause(2000);
        loginPage.cli2();
        expect(loginPage.show).toBeDisplayed()
        loginPage.type4();
        browser.pause(2000);
        loginPage.cli2();
        expect(loginPage.show2).toBeDisplayed()

    })

    it('5. Mouseover ', () => {
        browser.url(url)
        browser.maximizeWindow()
        browser.pause(2000);
        $(PrimePage.why).moveTo()
        browser.pause(2000);
        $(testPage.sighin).moveTo()
        $(PrimePage.explore).moveTo()
        browser.pause(2000);
        $(testPage.sighin).moveTo()
        $(PrimePage.pricing).moveTo()
        browser.pause(2000);
        expect(PrimePage.why).toBeDisplayed()
        expect(PrimePage.explore).toBeDisplayed()
        expect(PrimePage.pricing).toBeDisplayed()



    })

    it('6. Pricing  ', () => {
        browser.url(url)
        browser.maximizeWindow()
        browser.pause(2000);
        $(PrimePage.pricing).moveTo()
        browser.pause(2000);
        PrimePage.clickplans();
        browser.pause(2000);
        CarePage.freeclick();
        browser.pause(2000);
        CarePage.type1();
        browser.pause(2000);
        CarePage.type2();
        browser.pause(2000);
        CarePage.type3();
        browser.pause(2000);

    })


    it('7. Explore GitHub ', () => {
        browser.url(url)
        browser.maximizeWindow()
        browser.pause(2000);
        $(PrimePage.explore).moveTo()
        browser.pause(2000);
        CarePage.clickgh();
        browser.pause(2000);
        CarePage.topickclick();
        browser.pause(2000);
        expect(CarePage.bigtopic).toBeDisplayed()

    })

    it('8. Webdriver.io  ', () => {
        browser.url(url)
        browser.maximizeWindow()
        browser.pause(2000);
        PrimePage.addsearch()
        browser.pause(2000);
        PrimePage.seatch.keys("\uE007");
        browser.pause(2000);
        PrimePage.clicktype();
        browser.pause(2000);
        PrimePage.firstdata();
        browser.pause(2000);
        console.log(browser.getUrl().includes("webdriverio"))
    })


    it('9. Free trial ', () => {
        browser.url(url)
        browser.maximizeWindow()
        browser.pause(2000);
        PrimePage.clickprice();
        browser.pause(2000);
        PrimePage.clickfree();
        browser.pause(2000);
        PrimePage.clickcloud();
        browser.pause(2000);
        RegPage.addlogin();
        RegPage.addemail();
        RegPage.addpass();
        browser.pause(2000);

    })



    it('10 Enterprice Server (Radio buttons) ', () => {

        function makeid(length) {
            var result = '';
            var characters = 'abcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        var name = makeid(8);


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        var company = makeid(10);


        function makeid(length) {
            var result = '';
            var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        var pass = makeid(8)


        browser.back();
        browser.pause(2000);
        PrimePage.clickserver();
        browser.pause(2000);
        RegPage.setname(name);
        browser.pause(2000);
        RegPage.setcompany(company);
        browser.pause(2000);
        RegPage.setpass(pass);
        browser.pause(2000);
        RegPage.radio.click();
        browser.pause(2000);
        RegPage.yes.click();
        browser.pause(2000);
        RegPage.list.addValue(name + company);
        browser.pause(2000);
        RegPage.agreed.click();
        browser.pause(2000);
    })

    it('11. Careers into console ', () => {
        browser.url(url)
        browser.maximizeWindow()
        browser.pause(2000);
        PrimePage.clickcareers();
        browser.pause(2000);
        PrimePage.clickposition();
        browser.pause(2000);
        var label1 = $('//*[text()[contains(.,"stems")]]').getHTML(false);
        var label2 = $('//h3[text()[contains(.,"Design")]]').getHTML(false);
        var label3 = $('//h3[text()[contains(.,"Engineering")]]').getHTML(false);
        var label4 = $('//h3[text()[contains(.,"Legal")]]').getHTML(false);
        var label5 = $('//h3[text()[contains(.,"Marke")]]').getHTML(false);
        var label6 = $('//h3[text()[contains(.,"Pro")]]').getHTML(false);
        var label7 = $('//h3[text()[contains(.,"Sales")]]').getHTML(false);
        var label8 = $('//h3[text()[contains(.,"Sec")]]').getHTML(false);
        var label9 = $('//h3[text()[contains(.,"Ser")]]').getHTML(false);
        var label10 = $('//h3[text()[contains(.,"Sol")]]').getHTML(false);
        var label11 = $('//h3[text()[contains(.,"Sup")]]').getHTML(false);
        console.log(" " + label1);
        console.log(" " + label2);
        console.log(" " + label3);
        console.log(" " + label4);
        console.log(" " + label5);
        console.log(" " + label6);
        console.log(" " + label7);
        console.log(" " + label8);
        console.log(" " + label9);
        console.log(" " + label10);
        console.log(" " + label11);
    })
})