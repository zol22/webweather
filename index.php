<?php
$zip = $_GET["zip"];
$url = "http://api.openweathermap.org/data/2.5/weather?zip=".$zip.","."us&appid=a8257db81643c8c6d894e79d283df895"; 
function display($url)
{

$fp = fopen ( $url , "r" ) or die ("Could not contact $url"); 
$contents = "";
while ( $more = fread ( $fp, 1000  ) ) {      $contents .=  $more ;   }
echo $contents ; 

}
display ($url );
?>



	
