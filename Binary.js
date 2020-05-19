const five = require('johnny-five');
var board = new five.Board();

board.on("ready", function () {
    var led7 = new five.Led(7);
    var led8 = new five.Led(8);
    var led9 = new five.Led(9);
    var led10 = new five.Led(10);
    var led11 = new five.Led(11);
    var led12 = new five.Led(12);
    var led13 = new five.Led(13);

    bin = twosComplement(-3,7);
    bin = bin.split('');
    console.log(bin);
    this.repl.inject({
        led7: led7,
        led8: led8,
        led9: led9,
        led10: led10,
        led11: led11,
        led12: led12,
        led13: led13
    });
    turnOnLeds(bin);
});
function turnOnLeds(bin){
    var led7 = new five.Led(7);
    var led8 = new five.Led(8);
    var led9 = new five.Led(9);
    var led10 = new five.Led(10);
    var led11 = new five.Led(11);
    var led12 = new five.Led(12);
    var led13 = new five.Led(13);

    if(bin[0] === '1')
    {
        led7.on();
    }
    else
    {
        led7.off();
    }

    if(bin[1] === '1')
    {
        led8.on();
    }
    else
    {
        led8.off();
    }

    if(bin[2] === '1')
    {
        led9.on();
    }
    else
    {
        led9.off();
    }

    if(bin[3] === '1')
    {
        led10.on();
    }
    else
    {
        led10.off();
    }

    if(bin[4] === '1')
    {
        led11.on();
    }
    else
    {
        led11.off();
    }

    if(bin[5] === '1')
    {
        led12.on();
    }
    else
    {
        led12.off();
    }

    if(bin[6] === '1')
    {
        led13.on();
    }
    else
    {
        led13.off();
    }
}


//https://gist.github.com/bsara/519df5f91833d01c20ec
function twosComplement(value, bitCount) {
    var binaryStr;

    if (value >= 0) {
        var twosComp = value.toString(2);
        binaryStr    = padAndChop(twosComp, '0', (bitCount || twosComp.length));
    } else {
        binaryStr = (Math.pow(2, bitCount) + value).toString(2);

        if (Number(binaryStr) < 0) {
            return undefined
        }
    }
    return binaryStr;
}

function padAndChop(str, padChar, length) {
    return (Array(length).fill(padChar).join('') + str).slice(length * -1);
}
