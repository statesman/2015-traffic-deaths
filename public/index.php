<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <?php
  $meta = array(
    "title" => "2015 traffic fatalities | Statesman.com",
    "description" => "A look at the traffic deaths in Austin, Texas in of 2015, a record  year.",
    "thumbnail" => "http://projects.statesman.com/project_path/assets/share.png", // needs update
    "shortcut_icon" => "http://media.cmgdigital.com/shared/media/2015-11-16-11-32-05/web/site/www_mystatesman_com/images/favicon.ico",
    "apple_touch_icon" => "http://media.cmgdigital.com/shared/theme-assets/242014/www.statesman.com_fa2d2d6e73614535b997734c7e7d2287.png",
    "url" => "http://projects.statesman.com/news/2015-traffic-deaths/",
    "twitter" => "statesman"
  );
?>

  <title>Interactive: <?php print $meta['title']; ?> | Austin American-Statesman</title>
  <link rel="shortcut icon" href="<?php print $meta['shortcut_icon']; ?>" />
  <link rel="apple-touch-icon" href="<?php print $meta['apple_touch_icon']; ?>" />

  <link rel="canonical" href="<?php print $meta['url']; ?>" />

  <meta name="description" content="<?php print $meta['description']; ?>">

  <meta property="og:title" content="<?php print $meta['title']; ?>"/>
  <meta property="og:description" content="<?php print $meta['description']; ?>"/>
  <meta property="og:image" content="<?php print $meta['thumbnail']; ?>"/>
  <meta property="og:url" content="<?php print $meta['url']; ?>"/>

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@<?php print $meta['twitter']; ?>" />
  <meta name="twitter:title" content="<?php print $meta['title']; ?>" />
  <meta name="twitter:description" content="<?php print $meta['description']; ?>" />
  <meta name="twitter:image" content="<?php print $meta['thumbnail']; ?>" />
  <meta name="twitter:url" content="<?php print $meta['url']; ?>" />

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="dist/style.css">

  <link href='http://fonts.googleapis.com/css?family=Lusitana:400,700' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Merriweather+Sans:400,300,300italic,400italic,700italic,700,800,800italic' rel='stylesheet' type='text/css'>
 

  <?php /* CMG advertising and analytics */ ?>
  <?php include "includes/advertising.inc"; ?>
  <?php include "includes/metrics-head.inc"; ?>

</head>
<body>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

        <a class="navbar-brand" href="http://www.statesman.com/" target="_blank">
        <img class="visible-xs visible-sm" width="103" height="26" src="assets/logo-short-black.png" />
        <img class="hidden-xs hidden-sm" width="273" height="26" src="assets/logo.png" />
        </a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="./">Interactive <span class="sr-only">(current)</span></a></li>
        <li><a href="#" target="_blank">Story</a></li>
        <li class="visible-xs small-social"><a target="_blank" href="https://www.facebook.com/sharer.php?u=<?php echo urlencode($meta['url']); ?>"><i class="fa fa-facebook-square"></i></a><a target="_blank" href="https://twitter.com/intent/tweet?url=<?php echo urlencode($meta['url']); ?>&via=<?php print urlencode($meta['twitter']); ?>&text=<?php print urlencode($meta['title']); ?>"><i class="fa fa-twitter"></i></a><a target="_blank" href="https://plus.google.com/share?url=<?php echo urlencode($meta['url']); ?>"><i class="fa fa-google-plus"></i></a></li>
      </ul>
        <ul class="nav navbar-nav navbar-right social hidden-xs">
          <li><a target="_blank" href="https://www.facebook.com/sharer.php?u=<?php echo urlencode($meta['url']); ?>"><i class="fa fa-facebook-square"></i></a></li>
          <li><a target="_blank" href="https://twitter.com/intent/tweet?url=<?php echo urlencode($meta['url']); ?>&via=<?php print urlencode($meta['twitter']); ?>&text=<?php print urlencode($meta['title']); ?>"><i class="fa fa-twitter"></i></a></li>
          <li><a target="_blank" href="https://plus.google.com/share?url=<?php echo urlencode($meta['url']); ?>"><i class="fa fa-google-plus"></i></a></li>
        </ul>
    </div>
  </div>
</nav>

  <article class="container">
    <div class="row">
      <div class="col-xs-12 header">
        <h1>2015 traffic deaths</h1>
        <p>Published January 8, 2015</p>
        <p>The 2015 year was the deadliest on record in Austin for traffic fatalities with XXX deaths, and authorities have not identified what caused the spike or a way to curve it. 
        To learn more about the victims, select a point on the map for more details, or peruse the table below.</p>
      </div>

      <div class="col-sm-8 col-xs-12">
        <div id="map"></div>
      </div>

      <div class="col-sm-4 col-xs-12">
        <div id="detail">
          <div class="clearfix">
            <img class="pull-left instructions" src="assets/click-map.png" />
            <h4>Select a point on the map to see additional details.</h4>
          </div>
   
        </div>
      </div>
      <div class="col-xs-12">
        <h3>List of victims</h3>
        <div class="table-responsive">
          <table id="detailTable" class="table table-condensed table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Race</th>
                <th>Age</th>
                <th>Relation</th>
                <th>Location</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Race</th>
                <th>Age</th>
                <th>Relation</th>
                <th>Location</th>
              </tr>
            </tfoot>
          </table>

        </div>
      </div>
    </div>
    <div class="row">
      <hr>
      <div class="col-lg-9"><img src="/assets/tf-type.png" class="img-responsive"></div>
      <div class="visible-sm-block visible-xs-block visible-md-block"><img src="/assets/tf-daytime.png" class="img-responsive"></div>
      <div class="col-sm-4 col-lg-3"><img src="/assets/tf-perpop.png" class="img-responsive"></div>
      <div class="hidden-sm hidden-xs hidden-md col-sm-12 col-lg-6"><img src="/assets/tf-daytime.png" class="img-responsive"></div>
      <div class="col-sm-4 col-lg-3"><img src="/assets/tf-annual.png" class="img-responsive"></div>
      <div class="col-sm-4 col-lg-3"><img src="/assets/tf-vehicles.png" class="img-responsive"></div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <strong>Source:</strong> Austin Police Department with further reporting by Alejandro Martinez-Cabrera, Nicole Chavez, Phil Jankoski, Katie Urbaszewski, Roberto Villalpando. <strong>Presentation:</strong> Christian McDonald.
          </div>
        </div>
      </div>
  </article>

    <!-- bottom matter -->
    <?php include "includes/banner-ad.inc";?>
    <?php include "includes/legal.inc";?>
    <?php include "includes/project-metrics.inc"; ?>
    <?php include "includes/metrics.inc"; ?>

    <script src="dist/scripts.js"></script>




  <?php if($_SERVER['SERVER_NAME'] === 'localhost'): ?>
    <script src="//localhost:35729/livereload.js"></script>
  <?php endif; ?>
</body>
</html>
