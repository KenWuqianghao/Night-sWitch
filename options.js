window.onload = function() {

    var dark_image = document.getElementById('dark_image');
    var light_image = document.getElementById('light_image');

    dark_image.addEventListener('change', function(e) {
        var file = dark_image.files[0];
        var imageType = /image.*/;

        if (file.type.match(imageType)) {
            var reader = new FileReader();
            reader.onload = function(e) {chrome.storage.local.set({darkImage : reader.result});}
            reader.readAsDataURL(file);	
        }
    });

    light_image.addEventListener('change', function(e) {
        var file = light_image.files[0];
        var imageType = /image.*/;

        if (file.type.match(imageType)) {
            var reader = new FileReader();
            reader.onload = function(e) {chrome.storage.local.set({lightImage : reader.result});}
            reader.readAsDataURL(file);	
        }
    });
    

}

function save_options() {
    var dark_time = document.getElementById('dark_time').value;
    var light_time = document.getElementById('light_time').value;                                     
    chrome.storage.local.set({darkTime: dark_time, lightTime: light_time });
    console.log("SAVED");
}

document.getElementById('save').addEventListener('click',save_options);
