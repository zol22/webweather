<?php
$zip = $_GET["zip"];
$url = "http://api.openweathermap.org/data/2.5/weather?zip=".$zip.","."us&units=imperial&appid=439d4b804bc8187953eb36d2a8c26a02"; 
function display($url)
{

$fp = fopen ( $url , "r" ) or die ("Could not contact $url"); 
$contents = "";
while ( $more = fread ( $fp, 1000  ) ) {      $contents .=  $more ;   }
echo $contents ; 

}
display ($url );
?>



	
