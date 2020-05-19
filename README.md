# TempSensorWebDisplay

 Instructions for Compiling:
  
  
  1. Download Intellij IDE
  
  2. Open zip file in the IDE
  
  3.  Install needed node_modules from command line in the project source fol    der with command <91>npm install --save  {node_module}<92>. Needed node_    modules are twilio, plotly, firebase, nodejs, express, johnny-five, soc    ket.io.
  
  4. Change line 17 in bin/www that says var serviceAccount = require("/User    s/connoreschrich/Documents/Senior Design/SampleNodeJS/serviceAccountKey    .json");  and change it to your absolute path for serviceAccountKey.jso    n. (Relative path wouldn<92>t work)
  
  5. Make sure your port is configured to 3000 and the IP address is the loc    alhost address
  6. Run the www file and open up localhost:3000 in browser


## Design Documentation Software
	For the software portion of the lab I used NodeJS and Express to create our server. 
	I used Javascript and Jade for the client side. Our final implementation consisted of a server-client relationship to produce a robust and dynamic webpage in conjunction with a johnny-five framework that was capable of reading in and data handling from our Arduino Uno board. 
	I connected johnny-five with our server through the Firebase Realtime Database. Johnny-five would read in the data from the temperature sensor, which was a ‘Temperature’ object in johnny-five, which would then upload that data to the database.
	The frequency for the ‘Temperature’ object was set to 1000 so the temperature was being pulled every one second and being uploaded to the database. 
	The binary conversion was done using a Javascript library I found online. Using that function I created another function that would turn on the LEDs based on the values of each individual bit. 
	From there, it was simply a matter of only having that function run only when the button was pressed and having all of the LEDs turn off when the button was released. 
	Our server interacted with the browser client through a socket created with socket.io.
	At the same time the temperature was being uploaded to the database, the server was listening every one second for a change in temperature and was sending the current temperature through the socket to the web browser client.
	The client was listening to that socket and displaying the real time temperature on the screen.
	There is a toggle on the web page where the user could switch between seeing the temperature in Celsius and Fahrenheit.
	The server only sent the Celsius version of the temperature and the script within the Jade file handled the switch of the toggle and switching between Celsius and Fahrenheit. 
	For the graph, I used a cloud, streaming graph called Plotly. 
	I were able to create the plot from our server.
	I pulled the last 300 points from our database and used that as initial data on the graph that went from 300 to 0 on the axis “Seconds from Current Time.”
	From there, I listened to the database for new temperatures added and streamed the new data on the graph starting at 0 seconds.
	Plotly was created on the server side, and then was embedded within an iFrame on the webpage.
	When the temperature was graphed at 0 degrees C, it indicated that the temperature sensor was disconnected or turned off. 
	On the webpage there were three textfields; minTemp, maxTemp, and phoneNumber. 
	The user could set these values by hitting the send button in order to set the values for the temperature, in which they wanted to receive a text for.
	They could also set the phone number for this.
	The phone number needed to be formatted as ‘+1xxxxxxxxxx’ in order to set it for the API I were using to send the text. I used Twilio to send these messages.
	On the click of the send button, the client would use the socket to send those three values to the server. The server has default values for minTemp, maxTemp and phoneNumber in case the user never sets any. Once the server receives the user values, those default values get overwritten. 
	In addition, I have an On/Off toggle on the webpage that can turn the temperature sensor on and off. 
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

![4-pin tactile switch:](https://raw.githubusercontent.com/jjbiggins/TempSensorWebDisplay/master/page7image55198320.jpg)


 6-pin tactile switch:
 
 
![6-pin switch:](https://raw.githubusercontent.com/jjbiggins/TempSensorWebDisplay/master/iLLe%20%2B%20B33300333.jpg) 

Arduino Uno:


![Arduino Uno:](https://raw.githubusercontent.com/jjbiggins/TempSensorWebDisplay/master/page8image55312384.png)
![Arduino Uno:](https://raw.githubusercontent.com/jjbiggins/TempSensorWebDisplay/master/page8image55313008.png)



10-segment LED display:

![10-segment LED display:](https://raw.githubusercontent.com/jjbiggins/TempSensorWebDisplay/master/TITTTTT.jpg)
![10-segment LED display:](https://raw.githubusercontent.com/jjbiggins/TempSensorWebDisplay/master/page8image55312800.jpg)



DS18b20 temperature sensor:
![DS18b20 temperature sensor:](https://raw.githubusercontent.com/jjbiggins/TempSensorWebDisplay/master/page9image55313840.png)




I purchased two boxes for this project, I eventually decided to use the smaller transparent box as it kept all the circuitry more intact. I drilled 4 holes in the box, two holes for the buttons, one hole for the USB connection from the laptop to the arduino and the last hole was for the 2 meter long temperature sensor. The 10-LED segment display was connected to 7 220 ohm resistors to prevent the LEDs from drawing in too much current and burning. The 4-pin tactile button was connected to ground and pin 3 on the arduino as shown in the figure below. When the button is pressed, the LEDs light up. The right side of the 6-pin switch was connected the to power/ground pins from the arduino, specifically 3.3V, 5V and ground as shown below. The other side of the switch was connected the the three rails, that way when the switch is connected, power from the arduino goes through to the board. The temperature sensor was pretty straight forward to connected, reading the pins on the datasheet and connecting the suitable resistor to the output pin as well as connected the output pin to the arduino was all what was needed to be done.
Last but not least, I connected an LED (with a resistor) in the circuit to alert any errors in the circuit.
