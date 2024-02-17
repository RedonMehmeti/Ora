function showTime(){
    // Create a new Date object to get the current date and time
    var date = new Date();

    // Extract hours, minutes, and seconds from the Date object
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

    // Initialize session to "AM"
    var session = "AM";

    // Adjust hours for 12-hour format and determine the session (AM/PM)
    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    // Add leading zeros to single-digit hours, minutes, and seconds
    if (h < 10) {
        h = "0" + h;
    } else {
        h = h;
    }

    if (m < 10) {
        m = "0" + m;
    } else {
        m = m;
    }

    if (s < 10) {
        s = "0" + s;
    } else {
        s = s;
    }

    // Format the time string with hours, minutes, seconds, and session
    var time = h + ":" + m + ":" + s + " " + session;

    // Update the content of the HTML element with id "MyClockDisplay"
    document.getElementById("MyClockDisplay").innerText = time;

    // Call the showTime function again after 1000 milliseconds (1 second)
    setInterval(showTime, 1000);
}

// Initial call to showTime to start the clock
showTime();