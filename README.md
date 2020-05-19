# TempSensorWebDisplay

 Instructions for Compiling:
  
  
  1. Download Intellij IDE
  
  2. Open zip file in the IDE
  
  3.  Install needed node_modules from command line in the project source fol    der with command <91>npm install --save  {node_module}<92>. Needed node_    modules are twilio, plotly, firebase, nodejs, express, johnny-five, soc    ket.io.
  
  4. Change line 17 in bin/www that says var serviceAccount = require("/User    s/connoreschrich/Documents/Senior Design/SampleNodeJS/serviceAccountKey    .json");  and change it to your absolute path for serviceAccountKey.jso    n. (Relative path wouldn<92>t work)
  
  5. Make sure your port is configured to 3000 and the IP address is the loc    alhost address
  6. Run the www file and open up localhost:3000 in browser
