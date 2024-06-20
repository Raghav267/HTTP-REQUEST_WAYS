fetch("https://api.hostelduniya.com/api/hostel/rooms?hostel_id=1")
    // By default fetch  send  GET Request to server
    // it return a promise which can be resolved by .then

    .then((res) => {

        // as  it return promise the data needs to completed fetched and parsed which is done by json();
        return res.json();
    })
    // it return again an promise which is further resolved and we get the data;
    .then((data) => {
        console.log(data);
    })

