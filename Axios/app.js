axios.get("https://api.hostelduniya.com/api/hostel/rooms?hostel_id=1")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

// It manages all the things itself
// It parse the data itself and able to handle error