var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari == true) {
   document.getElementsByTagName('main').style.display = 'none'; 
   document.getElementById('browser-message').style.display = 'flex'; 
   console.log(isSafari);
}

console.log(isSafari);