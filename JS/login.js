var attempt = 3;
function validate() {
    var Username = document.getElementById("Username").value;
    var Password = document.getElementById("Password").value;
    if (Username == "Formget" && Password == "Formget#123") {
        alert("Login Succesful");
        window.location = "success.html";
        return false;
    }
    else {
        attempt--;
        alert("You have left" + attempt + "attempt;");
        if (attempt == 0) {
            document.getElementById("Username").disabled = true;
            document.getElementById("Password").disabled = true;
            document.getElementById("submit").disabled = true
            return false;
        }
    }
}