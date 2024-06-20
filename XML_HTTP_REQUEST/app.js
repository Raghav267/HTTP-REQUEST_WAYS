const req = new XMLHttpRequest(); // we need to attach two callbacks functions to it

req.onload = function () {
    // console.log(this);
    const responsefromapi = JSON.parse(this.responseText);
    // we need to parse the xml response.
    console.log(responsefromapi);
}

req.onerror = function () {
    console.log(error);
}

const url = "https://api.hostelduniya.com/api/hostel/rooms?hostel_id=1";

req.open("GET", url);

req.send();