/**
 * Created by mroien on 10/31/15.
 */

// checks you are on the home page
exports.homePageAssertion = function() {
    return "AJC.com: Atlanta News, Sports, Atlanta Weather, Business News | www.tie3.ajc.com"
    };

// clicks the login button and logs in user
exports.login = function(username, password) {
    return driver
        .findElement({ id: 'cm-user-icon' }).click()
        .findElement({ id: 'capture_signIn_traditionalSignIn_emailAddress'})
        .sendKeys(username)
        .findElement({ id: 'capture_signIn_traditionalSignIn_password'})
        .sendKeys(password)
        .findElement({ id: 'capture_signIn_traditionalSignIn_signInButton' }).click();
};
