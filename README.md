# biohazard4050.org

The new "2.0" version of our website!

(Mobile version still pretty sketchy at the moment...)

___

###Preparing for Deployment

Firstly, you will need the tools HTMLMinifier, cssnano, csso, and UglifyJS 2. They can be installed with npm by using the following commands:  
> `npm install html-minifier -g`  
> `npm install cssnano-cli -g`  
> `npm install csso -g`  
> `npm install uglify-js -g`  

To compress the files, run  
> `npm run minify`  

All the files will be minified and placed in the `dist` directory and will be ready for deployment.
