let permissionStatus = Notification.permission;
console.log("Notifications permission status is: " + permissionStatus);

switch(permissionStatus) {
    case "default":
        console.log("User has not been asked about notifications yet!");
        askNotificationPermission();
        break;
    case "granted": 
        console.log("User has given us permission to create notifications!");

        setTimeout(() => {
            let newNotification = new Notification("Example notification", {
                body: "Ding Dong!"
            });
            newNotification.addEventListener("click", (event) => {
                window.focus();
            });

        }, 5000);

        break;
    case "denied":
        console.log("User said no");
        break;
    default:
        console.log("Something ent wrong with Notification permissions.")
        break;
}



function askNotificationPermission(){
    Notification.requestPermission().then (result => {
        console.log("User said: " + result);
        permissionStatus = result;
    });
}