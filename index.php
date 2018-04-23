<?php
if ($_SERVER['HTTPS'] != 'on') {
    header("Location: https://zwanto.org/bal/");
    exit();
}
?>
<!DOCTYPE html>
<html>
    <head>
        <!-- Title and icon -->
        <title>Boites aux lettres</title>
        <link rel="icon" href="https://zwanto.org/lincoln/Img/favicon-96x96.png" />

        <!-- meta tags -->
        <meta charset="UTF-8">
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
        <meta name="theme-color" content="#ffa500">       

        <!-- Font from lincoln.fr -->
        <style type='text/css'>
            @font-face {
                font-family: "lincoln";
                src: url("../Font/Gotham-Book.woff2") format("woff2");
            }
        </style>

        <!-- Bootstrap CSS -->
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'>

        <!-- Leaflet CSS -->
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" />
        <link rel='stylesheet' href='https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.css'>
        <link rel='stylesheet' href='https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.Default.css'>

        <!-- Custom CSS -->
        <link rel='stylesheet' href='Stylesheet/main.css'>

        <!-- jQuery first, then Tether, then Bootstrap JS. -->
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.js'></script>
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.js'></script>

        <!-- Highcharts -->
        <script src="https://code.highcharts.com/highcharts.src.js"></script>
        <script src="https://code.highcharts.com/highcharts-more.js"></script>

        <!-- Leaflet -->
        <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"></script>   
        <script src="https://unpkg.com/leaflet.markercluster@1.3.0/dist/leaflet.markercluster.js"></script>   

        <!-- Font Awesome -->
        <script defer src="https://pro.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-+1nLPoB0gaUktsZJP+ycZectl3GX7wP8Xf2PE/JHrb7X1u7Emm+v7wJMbAcPr8Ge" crossorigin="anonymous"></script>

        <!-- Elastic Search 
        <script defer src='https://zwanto.org/lincoln/Libs/elasticsearch-js/elasticsearch.js'></script>-->

        <!-- Custom JS -->
        <script src='Javascripts/main.js' ></script>
    </head>
    <body>
        <div id='navbar' class='col-xs-12 col-sm-12 col-md-6 col-lg-3'>
            <div>
            <input id="inputAddress" aria-describedby="emailHelp" placeholder="Enter address">
            <div></div>
            </div>
        </div>
        <div id="map"></div>

        <script src='Javascripts/map.js' ></script>
        <script src='Javascripts/bal.js' ></script>
        <script src='Javascripts/geoLoc.js' ></script>
          <!-- AIzaSyBFyyenDy9BWC_IFOJJlXQHg0DObmPf9b0 -->
                <!-- AIzaSyAjYg1Z62MsM9AwLKyz2YNoZZvf0E3kkvc -->
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjYg1Z62MsM9AwLKyz2YNoZZvf0E3kkvc&callback=mapInit"></script>

    </body>
</html>



