function clock() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];
    var months = [
        "January",
        "Febuary",
        "Marach",
        "April",
        "May",
        "June",
        "July",
        "August",
        "Septembar",
        "Novembar",
        "Decembar",
    ];
    var hrs = document.getElementById("hours");
    var min = document.getElementById("minutes");
    var sec = document.getElementById("second");
    var period = document.getElementById("ampm");
    var date = document.getElementById("ddmmyy");
    var day = document.getElementById("dd");
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var d = time.getDay();
    var dd = time.getDate();
    var mm = time.getMonth();
    var yy = time.getFullYear();
    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    var ampm = h <= 12 ? "PM" : "AM";
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrs.innerHTML = (h);
    min.innerHTML = (m);
    sec.innerHTML = (s);
    period.innerHTML = ampm;
    day.innerHTML = days[d];
    date.innerHTML = months[mm] + " " + dd + ", " + yy;
}
setInterval(clock, 1000);
