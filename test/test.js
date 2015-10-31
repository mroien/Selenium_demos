/**
 * Created by mroien on 10/30/15.
 */

var webdriver = require("selenium-webdriver"),
    test = require('selenium-webdriver/testing'),
    assert = require('assert'),
    driver;


"use strict";

var tie3 = 'http://www.tie3.ajc.com';

test.describe('Simple Test', function(){

    var pom = require('../pom/pom.js');

    this.timeout(15000);
    test.before(function(){
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        driver.get(tie3);
    });

    test.beforeEach(function(){
        //console.log('Testing before each test --------------------');
    });

    test.afterEach(function(){
        //console.log('Testing after each test --------------------')
    });

    test.after(function(){
        driver.quit();
    });

    ///// Tests start

    test.it('should be on the home page', function(){
        driver.getTitle().then(function(title){
            assert.equal(pom.homePageAssertion(),title, "Test did not work!!!!!!!");
        })
    });

    test.it('should login in a user', function(){
        driver.findElement({ id: 'cm-user-icon' }).click();
        driver.findElement({ id: 'capture_signIn_traditionalSignIn_emailAddress'})
            .sendKeys('');
        driver.findElement({ id: 'capture_signIn_traditionalSignIn_password'})
            .sendKeys('');
        driver.findElement({ id: 'capture_signIn_traditionalSignIn_signInButton' }).click();
    })
});