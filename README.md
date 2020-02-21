# which-tests
This is NodeJS project that uses WebdriverIO (v5), Selenium and Cucumber framework to perform automated front end tests for which.co.uk

The cucumber-features are in the /features directory, the cucumber step-definitions are in the /step-definitions directory

It uses the Page-Object pattern, the page-objects are in the /pageObjects directory

# STEP-1 INSTALL

After you clone the project from github, do , in the root folder of the project :

-   npm install

# STEP-2 RUN THE TESTS

- npm run which-test@prod

  This will run the script called 'which-test@prod' defined in the package.json in the 'scripts' section
  which will start the wdio ( webdriverio ) test runner and pass it the which-test@prod.js configuration file as parameter
  It will only run tests which have '@runme' tag. Tag can be changed in wdio.

# HOW WAS THIS PROJECT GENERATED
  ( this is just for your information, there is no need to perform these steps )

(http://webdriver.io/guide/getstarted/install.html)

-  npm init
-  npm install webdriverio --save-dev
-  npm install @wdio/cli
-  ./node_modules/.bin/wdio config
   ( starts the wizard that setups wdio ( webdriverIO )

    * Where do you want to execute your tests?
      - On my local machine
    * Which framework do you want to use?
      - cucumber
    * Shall I install the framework adapter for you? (Y/n)
      - Y ( yes )
    * Where are your feature files located?
      - ./features/*.feature
    * Where are your step definitions located?
      - ./step-definitions
    * Which reporter do you want to use?
      - spec - https://github.com/webdriverio/wdio-spec-reporter ( 2nd option, press Space to mark it & then press Enter )
    * Shall I install the reporter library for you?
      - Y ( yes )
    * Do you want to add a service to your test setup?
      - selenium-standalone - https://github.com/webdriverio/wdio-selenium-standalone-service ( press Space to mark it & then press Enter )
    * Shall I install the services for you?
      - Y ( yes )
    * Level of logging verbosity
      - verbose
    * In which directory should screenshots gets saved if a command fails?
      - ./errorShots/
    * What is the base url?
      - the url of the page you want to test ( e.g https://www.which.co.uk/ )

    The above will generate file : ./wdio.conf.js. You can rename to one of your own choice

# Configuration

   You can change wdio according to test requirement.For example baseUrl, browserName can be changed.

   If you would like to run specific tests only then use tag. Add tag in 'tagExpression'

   Note : When new wdio config is added or renamed, make sure you add/update it in package.json

## Browser

   The tests can be run on different browsers. The browser is configured based on
   the following environment variables.

- `browserName`. Either `chrome` or `firefox`.