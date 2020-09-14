  $(document).ready( function(){

 	var $message = $(".message").hide();

 
   $("#btn").click(function(){ 
   
     var zip = $("#zip").val();
	 

     if(zip != ''){
         
		 $.ajax({
             type: 		"GET",
             url: 		"weather.php",
             data: 		"zip=" + zip,
         
         	beforeSend: function(){ 		
			                 $message.show(); },

			 error: 		function(xhr, status, error) {  
							  alert( "Error Mesaage:  \r\nNumeric code is: "  + xhr.status + " \r\nError is " + error);   },
			 
			 success: 	function(result){


				//$message.hide();
				r = JSON.parse(result);
			

				/*res =  "<br>Current Weather For: US"+
					   "<br>City: "			  + r.name+  " "				  +		
					   "<br>Coordinates: " 	  + r.coord.lon + " , " + r.coord.lat	 +		
					   "<br>Temperature: " 	  + r.main.temp + "&deg;F "		  +		
				       "<br>Weather: " 		  + r.weather[0].main + " "		  +		
					   "<br>Description: " 		  + r.weather[0].description + " "		  +		
					   "<br>Humidity: " 	  + r.main.humidity + 		
					   "<br>Wind speed: " 	  + r.wind.speed + 		
					   "<br> Date time: " +r.dt + 
					   "<br>Sunrise/epoch: "  + r.sys.sunrise + " "			  +
					   "<br>";*/

				$message.hide();

				
				city = r.name;
				time = r.dt;
				temperature =  Math.trunc(((r.main.temp - 273.15) * 9/5) + 32)+"&deg; F";
				humidity = r.main.humidity+"%"+" humidity";
				description= r.weather[0].main 
	
				weather_i = r.weather[0].icon;
				now = 'Now'
				console.log(weather_i);
				
				/*Need this to change bg*/
				$("#city").html(city);

				$("#temperature").html(temperature);
				$("#humidity").html(humidity);
				$("#description").html(description);
				$("#now").html(now);
				 console.log(humidity);
				$("#weather_icon").html(weather_i);
			
				startTime();

				function startTime(){
	 				var today = new Date();

	 				var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
					var month = months[today.getMonth()];
					var year = today.getFullYear();
					var date = today.getDate();

  					var h =  ("0" + ((today.getHours() % 12)||12)).substr(-2)
  					var amPm = h >= 12?'AM':'PM';
  					var m = ("0" + today.getMinutes()).substr(-2);
  					var s = ("0" + today.getSeconds()).substr(-2);

  					var day =  date + ' ' + month + ' ' + year;
  					time= h + ":" + m + ":" + s + " " +amPm;
  					$("#day").html(day);
  					$("#w3time").html(time);
  					var t = setTimeout(startTime, 500);
				}

				$(".w3_agile_main_grids").css("background-color", 'rgba(192,192,192,0.3)');

				
				// 04n missing!!

				switch (r.weather[0].icon){
	
					case "10n":
						var skycons = new Skycons({"color": "white"});
						skycons.add("weather_icon", Skycons.RAIN);
						 skycons.play();
						break;
					case "01d":
						var skycons = new Skycons({"color": "white"});
						skycons.add("weather_icon", Skycons.CLEAR_DAY);
						 skycons.play();
						break;
					case "01n":
						var skycons = new Skycons({"color": "white"});
						skycons.add("weather_icon", Skycons.CLEAR_NIGHT);
						 skycons.play();
						break;
					case "02d":
						var skycons = new Skycons({"color": "white"});
						skycons.add("weather_icon", Skycons.PARTLY_CLOUD_DAY);
						 skycons.play();
						break;
					case "02n":
						var skycons = new Skycons({"color": "white"});
						skycons.add("weather_icon", Skycons.PARTLY_CLOUD_NIGHT);
						 skycons.play();
						break;
					case "03d":
						var skycons = new Skycons({"color": "white"});
						skycons.add("weather_icon", Skycons.CLOUDY);
						 skycons.play();
						break;
					case "04d":
						var skycons = new Skycons({"color": "white"});
						skycons.add("weather_icon", Skycons.CLOUDY);
						 skycons.play();
						break;
					case "03n":
						var skycons = new Skycons({"color": "white"});
						skycons.add("weather_icon", Skycons.CLOUDY);
						 skycons.play();
						break;
					case "10d":
						var skycons = new Skycons({"color": "white"});
						skycons.add("weather_icon", Skycons.RAIN);
						 skycons.play();
						break;
					case "10n":
						var skycons = new Skycons({"color": "white"});
						skycons.add("weather_icon", Skycons.RAIN);
						 skycons.play();
						break;
					case "13d":
						var skycons = new Skycons({"color": "white"});
						skycons.add("weather_icon", Skycons.SNOW);
						 skycons.play();
						break;
					case "13n":
						var skycons = new Skycons({"color": "white"});
						skycons.add("weather_icon", Skycons.SNOW);
						 skycons.play();
						break;
					case "50d":
						var skycons = new Skycons({"color": "orange"});
						skycons.add("weather_icon", Skycons.FOG);
						 skycons.play();
						break;
					case "50n":
						var skycons = new Skycons({"color": "white"});
						skycons.add("weather_icon", Skycons.FOG);
						 skycons.play();
						break;
				}


				
			}	//success  - the } closes the definition or body of the function(result){ ...
		});	    //ajax  - the }) closes the  $.ajax({ ... the } closes the JSOn argument, and ) matches opening ( 
     };			//the }  closes the if(zip != '')  {  ....
  });			//anonymous fn handler for button click: } closes the body of code...the ) closes the click (   )
});				//the  })  closes the ready event anonymous handler:  ready( function(){ ....

