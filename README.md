2015 Traffic deaths
====================

From single-page project as outlined below.

## Manual data processing

To make up for my lack of programming skills. Export as CSV then make these changes:

### Description:

* Have to exchange bad quotes from MS Word.
* have to get rid of the extra returns entered by Alejandro. Use no wrap to find them. You'll know if the paste doesn't match rows. Replace the old column.
* Replace double quotes into single quotes 

### Date of accident

* Need to subtract 6 hours from the date_time_accident field since import-export module does not convert timezone upon export. Create a column after date_time_accident. Use function `=N2-TIME(6,0,0)`.
* Change format to time with AM/PM.
* rename `date_time_converted`.
* Paste as values and then get rid of old column.

### Age

* Add column after date_birth and use this `=FLOOR(((O2-J2)/365.25),1)`. Another possible formulae `=ROUNDDOWN(YEARFRAC(I2, O2, 1), 0)`.
* Change type to General.

### Fix gender

Change M and F to Male and Female.

### Race/ethnicity

Fix case. `=REPLACE(L2,1,1,UPPER(LEFT(L2,1)))`

### Relation

Fix case. `=REPLACE(N2,1,1,UPPER(LEFT(N2,1)))`

### Export and convert

Run through [Mr. Data Converter](https://shancarter.github.io/mr-data-converter/) as JSON-Properties.

Save as data.json in `public` folder.

Single-page project
==============================

Framework for a single page project, though it could be multiple pages. Just less complex than our immersive-template setup.

## Steps when you set up a project

* use `package.json` and `npm install`
* use `bower.json` and `bower install`
* You need the `.ftppass` and `.slack` files described below.
* Run the default grunt task.

### Public folder
There is a `public` folder that has the published files:
	* assets: images and other accces
	* dist: where js and css is compiled
	* fonts: for font-awesome
	* includes: files for metrics, advertising and other includes

### Src folder
The `src` folder is for components that are used by grunt tasks and copied into the `public/dist` folder:
* js: for project specific files. `main.js` will get minified into the dist folder.
* less: for less css source files, based on [bootstrap](http://getbootstrap.com/getting-started/).


## Configurations

### ftpush

The path is in `Gruntfile.js`. Add the username/password into a file called `.ftppass` as per [ftpush docs](https://www.npmjs.com/package/grunt-ftpush). Make sure that file is in the .gitignore.


```
{
  "key": {
    "username": "username",
    "password": "password"
  }
}
```

### slack msg

The `grunt-slack-hook` plugin let's us publish finished url to slack as part of ftpush. Needs a .slack file with the Webhook URL from Slack configurations. Just a single line with that url and no return.

