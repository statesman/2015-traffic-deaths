2015 Traffic deaths
====================

Project of traffic deaths for 2015. Mainly a leaflet map and a table, with some added static graphics.

## Datatables

First time to use datatables for something.

* Uses [datatables](https://datatables.net/) for bootstrap installed from [bower](https://datatables.net/blog/2015-11-09).

`$ bower install --save datatables.net-dt`
`$ bower install --save datatables.net-bs`

* Add those two file installs to `Gruntfile.js`
* include the `pagination` and `glyphicons` modules in `src/less/custom-bootstrap/bootstrap.less`
* Add glyphicon fonts, which I did by adding copy to `Gruntfile.js` like we do fontawesome.

I'm calling the data for the table in a copy of the data because it has to be formatted slightly different for leaflet.js. Surely there is a way to use the same data file for both instances.

## Manual data processing

To make up for my lack of programming skills. Export as CSV then make these changes:

### Description:

* Check for bad quotes from MS Word.
* Check for bad returns.

By using the a better [csv to json](http://www.convertcsv.com/csv-to-json.htm) converter the quote marks are handled.

### Date of accident

* Need to subtract 6 hours from the date_time_accident field since import-export module does not convert timezone upon export. Create a column after date_time_accident. Use function `=N2-TIME(6,0,0)`.
* Change format to time with AM/PM.
* rename `date_time_converted`.
* Paste as values and then get rid of old column.

### Age

* Add column after date_birth and use this `=ROUNDDOWN(YEARFRAC(O2, J2, 1), 0)`.
* Change type to General.

### Fix gender

Change M and F to Male and Female.

### Race/ethnicity

Fix case. `=REPLACE(L2,1,1,UPPER(LEFT(L2,1)))`

### Relation

Fix case. `=REPLACE(N2,1,1,UPPER(LEFT(N2,1)))`

### Thumbs

Replace blank thumbs with a gif. Yes, this is totally the wrong way to do this but so is every other manual fix here.

Add to all the blank cells:

`assets/spacer.gif`

If changed in the JSON:

`"thumb":""`
`"thumb":"assets/spacer.gif"`


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

