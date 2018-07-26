# Raspberry Pi Web GPIO Interface

----
## Installation
###### In your terminal of choice, run the following commands:

    git clone https://github.com/heunetik/RPi-WebGPIO.git

---
    cd RPi-WebGPIO

---
    npm install

----
## Usage
- When in the "RPi-WebGPIO" folder, enter `node ./server.js`

- If the console outputs "listening on 3000", your server is live on port 3000

- **Note:** if you would like to use your own port, you can add it as a command line argument like `node ./server.js 27015`; then the console should output "listening on XYZ", or in this case, 27015

----
## Interface

![alt text](https://i.imgur.com/jWZGj1r.png "GPIO Web Interface")

----
## Notes

- The code was tested on a Raspberry Pi 1 Model B+
- Initially, the pins always appear as "Off", because currently there is no way to read the state of a pin with the `rpio` package

####
Known bugs

- Slight CSS issues when the screen is narrower than 460px