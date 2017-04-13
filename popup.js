$(document).ready(function () {
    console.log("test")
    $("#serialNum").focus();
    $("#serialNum").keypress(function (e) {
        console.log(e.which)
        if (e.which == 13) {
            console.log("Enter key pressed!");
            chrome.tabs.query(
                {
                    currentWindow: true,    // currently focused window
                    active: true            // selected tab
                },
                function (foundTabs) {
                    if (foundTabs.length > 0) {
                        console.log("found the tab");
                        console.log("url is " + url);
                        foundTabs[0].url = "http://partsurfer.hp.com/Search.aspx?searchText=";
                        url = foundTabs[0].url;
                        url = url + $("#serialNum").val();
                        console.log("URL is now " + url);
                        chrome.tabs.update({
                            url: url
                        });
                    } else {
                        // there's no window or no selected tab
                    }
                }
            );
        }
    });
})

