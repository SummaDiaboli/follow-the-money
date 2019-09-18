playlistPopup = false;
notificationsPopup = false;

document.getElementById("playlist-toggle").addEventListener("click", slidePlaylists)
document.getElementById("notifications-toggle").addEventListener("click", fadeNotifications)

function slidePlaylists(){
    if (playlistPopup === false) {
        document.getElementById("playlist-popup").animate([
            { bottom: '-90%' }, 
            { bottom: '10%' }
        ], { 
            duration: 400,
            iterations: 1,
            easing: 'ease',
            fill: 'forwards'
        });
    } else {
        document.getElementById("playlist-popup").animate([
            { bottom: '10%' }, 
            { bottom: '-90%' }
        ], { 
            duration: 400,
            iterations: 1,
            easing: 'ease',
            fill: 'forwards'
        });
    }
    document.getElementById("playlist-toggle").classList.toggle('active');
    playlistPopup = !playlistPopup;
}

function fadeNotifications(){
    if (notificationsPopup === false) {
        document.getElementById("notifications-popup").style.display = "flex";
        document.getElementById("notifications-popup").animate([
            { opacity: 0 }, 
            { opacity: 1 }
        ], { 
            duration: 200,
            iterations: 1,
            easing: 'linear',
            fill: 'forwards'
        });
        document.getElementById("notifications-toggle").classList.add('active');
    } else {
        document.getElementById("notifications-popup").animate([
            { opacity: 1 }, 
            { opacity: 0 }
        ], { 
            duration: 200,
            iterations: 1,
            easing: 'linear',
            fill: 'forwards'
        });
        setTimeout(function(){
            document.getElementById("notifications-popup").style.display = "none";
        }, 200);
    }
    notificationsPopup = !notificationsPopup;
}

truncate('truncate-text');

function truncate(id){
    let string = document.getElementById(id).innerHTML;
    var maxLength = 80;
    var result = string.substring(0, maxLength) + '...';
    document.getElementById(id).innerHTML = result;
}