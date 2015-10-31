# Selenium Demo

## Preconditions
- Must have [node](https://nodejs.org/en/) installed
- Must have [chromedriver](https://sites.google.com/a/chromium.org/chromedriver/downloads) 
[installed](http://www.kenst.com/2015/03/installing-chromedriver-on-mac-osx/) and add to 
[path](https://splinter.readthedocs.org/en/0.1/setup-chrome.html)
- Have [git](https://git-scm.com/downloads) installed

## Initial Setup via command line
- `git --version`
    - Show you have git install
- `npm init`
    - Installs and sets up package.json file
    - Click yes to most requirements
- After installing all the NPM Packages
    - `mocha init path` <= Maybe 
    - `mkdir test`
    
## Install NPM Packages
- `npm install selenium-webdriver@2.47 --save-dev`
    - [Selenium-Webdriver](https://www.npmjs.com/package/selenium-webdriver)
- If [Mocha](https://www.npmjs.com/package/mocha) is not already installed globally
    - `npm install -g mocha`
- Then install Mocha locally into your project `npm install mocha --save-dev`
- `npm install wd` [WD.js](https://github.com/admc/wd)
- **Cool Reporting** [Mochawesome](https://www.npmjs.com/package/mochawesome)
`npm install mochawesome`
    - need to add the `--reporter mochawesome` after your test command

## Optional NPM Packages
- `npm install chai --save-dev` [Chai](https://www.npmjs.com/package/chai)
- `npm install chai-as-promised` [Chai-as-promised](https://www.npmjs.com/package/chai-as-promised)
    
## Fun Facts
- **IMPORTANT** check the package.json file and have to edit the `devDependencies` to match `"selenium-webdriver": "2.47.0"`
there is a known issue with selenium 2.48
- Mocha by default looks into the `test` folder to run your Javascript tests
- You can run you test by just typing `mocha` from the root of the directory

## Created By
[Tim Oien](https://www.github.com/mroien)
