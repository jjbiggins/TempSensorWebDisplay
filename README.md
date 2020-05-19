# TempSensorWebDisplay

 Instructions for Compiling:
  
  
  1. Download Intellij IDE
  
  2. Open zip file in the IDE
  
  3.  Install needed node_modules from command line in the project source fol    der with command <91>npm install --save  {node_module}<92>. Needed node_    modules are twilio, plotly, firebase, nodejs, express, johnny-five, soc    ket.io.
  
  4. Change line 17 in bin/www that says var serviceAccount = require("/User    s/connoreschrich/Documents/Senior Design/SampleNodeJS/serviceAccountKey    .json");  and change it to your absolute path for serviceAccountKey.jso    n. (Relative path wouldn<92>t work)
  
  5. Make sure your port is configured to 3000 and the IP address is the loc    alhost address
  6. Run the www file and open up localhost:3000 in browser


## Design Documentation Software
	For the software portion of the lab we used NodeJS and Express to create our server. 
	We used Javascript and Jade for the client side. Our final implementation consisted of a server-client relationship to produce a robust and dynamic webpage in conjunction with a johnny-five framework that was capable of reading in and data handling from our Arduino Uno board. 
	We connected johnny-five with our server through the Firebase Realtime Database. Johnny-five would read in the data from the temperature sensor, which was a ‘Temperature’ object in johnny-five, which would then upload that data to the database.
	The frequency for the ‘Temperature’ object was set to 1000 so the temperature was being pulled every one second and being uploaded to the database. 
	The binary conversion was done using a Javascript library we found online. Using that function we created another function that would turn on the LEDs based on the values of each individual bit. 
	From there, it was simply a matter of only having that function run only when the button was pressed and having all of the LEDs turn off when the button was released. 
	Our server interacted with the browser client through a socket created with socket.io.
	At the same time the temperature was being uploaded to the database, the server was listening every one second for a change in temperature and was sending the current temperature through the socket to the web browser client.
	The client was listening to that socket and displaying the real time temperature on the screen.
	There is a toggle on the web page where the user could switch between seeing the temperature in Celsius and Fahrenheit.
	The server only sent the Celsius version of the temperature and the script within the Jade file handled the switch of the toggle and switching between Celsius and Fahrenheit. 
	For the graph, we used a cloud, streaming graph called Plotly. 
	We were able to create the plot from our server.
	We pulled the last 300 points from our database and used that as initial data on the graph that went from 300 to 0 on the axis “Seconds from Current Time.”
	From there, we listened to the database for new temperatures added and streamed the new data on the graph starting at 0 seconds.
	Plotly was created on the server side, and then was embedded within an iFrame on the webpage.
	When the temperature was graphed at 0 degrees C, it indicated that the temperature sensor was disconnected or turned off. 
	On the webpage there were three textfields; minTemp, maxTemp, and phoneNumber. 
	The user could set these values by hitting the send button in order to set the values for the temperature, in which they wanted to receive a text for.
	They could also set the phone number for this.
	The phone number needed to be formatted as ‘+1xxxxxxxxxx’ in order to set it for the API we were using to send the text. We used Twilio to send these messages.
	On the click of the send button, the client would use the socket to send those three values to the server. The server has default values for minTemp, maxTemp and phoneNumber in case the user never sets any. Once the server receives the user values, those default values get overwritten. 
	In addition, we have an On/Off toggle on the webpage that can turn the temperature sensor on and off. 
	It’s default value is ‘ON’.
	When the toggle changes, the client uses the socket to update the server and the server updates the variable ‘power’ to the  current state of the switch.
	Johnny-five listens for that state variable every time the temperature sensor detects data and will handle whether to turn it on or off. 


## Design Documentation Hardware:

The final list of components used in this project are:
A 9V battery with a wire connecting it to the arduino to supply power
A 4-pin tactile button that turns the LEDs on when pressed
1 x 10k Ohm resistor
A 6-pin power switch
Arduino Uno
7 x 220 Ohms resistors
10 segment LED display
An LED to indicate errors
1x 220 Ohm resistor
2 meter long DS18b20 temperature sensor
1x 4.7k Ohm resistor
A transparent box to enclose all the components 
A laptop to connect to the internet 



4-pin tactile switch:


 
6-pin switch: 



