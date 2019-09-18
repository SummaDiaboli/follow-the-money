// document.getElementById("post-popup-toggler").addEventListener("click", showPostPopup);

function showPostPopup(el){
    let popup = el.parentElement.querySelector("#post-popup");
    hidden = window.getComputedStyle(popup).getPropertyValue("opacity") == 0;
    if (hidden === false) {
        popup.animate([
            { opacity: 1 }, 
            { opacity: 0 }
        ], { 
            duration: 200,
            iterations: 1,
            easing: 'linear',
            fill: 'forwards'
        });

        setTimeout(function(){
            popup.style.opacity = 0;
        }, 200);
    } else{
        popup.animate([
            { opacity: 0 }, 
            { opacity: 1 }
        ], { 
            duration: 200,
            iterations: 1,
            easing: 'linear',
            fill: 'forwards'
        });

        setTimeout(function(){
            popup.style.opacity = 1;
        }, 200);
    }
}