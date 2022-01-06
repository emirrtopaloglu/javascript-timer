// Minutes & Seconds

var mleft = document.querySelector(".minute-left");
var mright = document.querySelector(".minute-right");

var sleft = document.querySelector(".second-left");
var sright = document.querySelector(".second-right");

// Buttons

var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var reset = document.querySelector("#reset");

// Others

var sfirst = 0;
var ssecond = 0;
var mfirst = 0;
var msecond = 0;

var Count;

// Functions

function Timer() {
        sfirst++;

        if ( sfirst == 10 ) {
            sfirst = 0;
            ssecond++;
        }

        if ( ssecond == 6 ) {
            ssecond = 0;
            mfirst++;
        }

        if ( mfirst == 10 ) {
            mfirst = 0;
            msecond++;
        }

        Print()
}

function Print() {
    sright.innerHTML = sfirst;
    sleft.innerHTML = ssecond;
    mright.innerHTML = mfirst;
    mleft.innerHTML = msecond;
}

start.addEventListener("click", () => {
    if ( Count == null ) {
        Count = setInterval(Timer, 1000);
    }

    stop.addEventListener("click", () => {
        clearInterval(Count);
    })

    reset.addEventListener("click", () => {
        clearInterval(Count);
        sfirst = 0;
        ssecond = 0;
        mfirst = 0;
        msecond = 0;
        Print()
    });

})
