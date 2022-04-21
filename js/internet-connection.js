var hint = document.getElementById("hint");
var icon = document.getElementById("icon");
    
// Defining function to update connection status
function updateConnectionStatus() {  
    var status = document.getElementById("status");
    if(navigator.onLine) {
        icon.innerHTML = '<i class="wifi1 uil uil-wifi"></i>'; 
        status.innerHTML = "You're online now";
        hint.innerHTML = "Hurray! Internet is connected.";
        status.classList.add("online");
        status.classList.remove("offline");                       
    } else {
        icon.innerHTML = '<i class="wifi2 uil uil-wifi-slash"></i>';  
        status.innerHTML = "You're offline now";
        hint.innerHTML = "Opps! Internet is disconnected.";
        status.classList.add("offline");
        status.classList.remove("online");          
    }
}

// Attaching event handler for the load event
window.addEventListener("load", updateConnectionStatus);

// Attaching event handler for the online event
window.addEventListener("online", function(e) {
    updateConnectionStatus();
    hint.innerHTML = "Hurray! Internet is connected.";
});

// Attaching event handler for the offline event
window.addEventListener("offline", function(e) {        
    updateConnectionStatus();
    hint.innerHTML = "Opps! Internet is disconnected."; 
});