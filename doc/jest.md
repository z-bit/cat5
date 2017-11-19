[Home](../README.md)
#### Testing with Jest
Jasmine only runs ***spec.ts***.<br> 
Jest runs ***test.ts*** and ***spec.ts***.<br>
In order for tests not to fail under Jasmine all files containing <br>
**.toMatchSnapshot()** should be named with extension ***test.ts***.

    • yarn add --dev jest	
    • yarn add --dev @types/jest
    • yarn add --dev jest-preset-angular
    • yarn add --dev jasmine-marbles

edit file ***package.json***

    scripts: {
        ...,
        "jest": "jest",
        "jest:watch": "jest --watch"
    }
    
    after *devDependencies*
    "jest": {
      "preset": "jest-preset-angular",
      "setupTestFrameworkScriptFile": "<rootDir>/src/jestSetup.ts"
    }   
    
create file ***src/jestSetup.ts***

    import 'jest-preset-angular';
    import './jestGlobalMocks';     
    
create file ***src/jestGlobalMocks.ts***

    const mock = () => {
      let storage = {};
      return {
        getItem: key => key in storage ? storage[key] : null,
        setItem: (key, value) => storage[key] = value || '',
        removeItem: key => delete storage[key],
        clear: () => storage = {},
      };
    };
    
    Object.defineProperty(window, 'localStorage', {value: mock()});
    Object.defineProperty(window, 'sessionStorage', {value: mock()});
    Object.defineProperty(window, 'getComputedStyle', {
      value: () => ['-webkit-appearance']
    });
    
check out if it works: 

    npm run jest
    npm run test    

* all 3 tests should pass with ***jest*** as well as with ***jasmine***
* npm run ... uses the local node_modules
* call just <code>jest</code> if ***jest*** is installed globally *(npm i -g jest)*