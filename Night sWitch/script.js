function changeToLight() {
    chrome.storage.local.get(['lightImage'], function(result){
        lightImage = result.lightImage;
        document.body.style.cssText+=`background-image:url(${lightImage})`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment =  "fixed";
        document.body.style.backgroundSize = "100% 100%";
    })
}

function changeToDark() {
    chrome.storage.local.get(['darkImage'], function(result){
        darkImage = result.darkImage;
        document.body.style.cssText+=`background-image:url(${darkImage})`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment =  "fixed";
        document.body.style.backgroundSize = "100% 100%";
    })
}

function checkState() {
    chrome.storage.local.get(['darkTime'], function(result){
        var darkTime = result.darkTime;
        chrome.storage.local.get(['lightTime'], function(result){
            var lightTime = result.lightTime;
            var time = new Date();
            var hour = time.getHours();
            var min = time.getMinutes();
            var nightHour = parseInt(darkTime.slice(0,2));
            var nightMin = parseInt(darkTime.slice(3,5));
            var lightHour = parseInt(lightTime.slice(0,2));
            var lightMin = parseInt(lightTime.slice(3,5));
            if ((hour >= nightHour && min >= nightMin) || (hour < lightHour && min < lightMin)){
                changeToDark();
            }
            else{
                changeToLight();
            }
        })
    })
}

checkState();