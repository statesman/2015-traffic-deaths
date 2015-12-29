2015 Traffic deaths
====================

From single-page project as outlined below.

* There is a Grunt task called `processdata` that goes into `/tasks` and runs a file there. That is where I can change thumbor urls.

## Manual data processing

To make up for my lack of programming skills. Export as CSV then make these changes:

### Age

Add column after date_birth and use this `=FLOOR(((O2-J2)/365.25),1)`

### Date of accident

Need to subtract 6 hours from the date_time_accident field since import-export module does not convert timezone upon export. Create a column after date_time_accident. `=O2-TIME(6,0,0)`

### Column names

Either change the column names to `lat` and `lng` or change the code to read `latitude` and `longitude`.

### Description field problems

There are problem with exporting the description field.

* The description cuts off in the middle of hrefs.
* Special characters in the Redactor plugin are causing non-standard JSON.

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

