let scrapeEmails = document.getElementById('scrapeEmails');


scrapeEmails.addEventListener("click", () => {
    alert('hello');

    //Get current active tab
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    // Execute script to [arse emails on page
    chrome.scrpiting.executeScript({
        target: {tabId: tab.id},
        func: scrapeEmailsFromPage,
    });
})

//Function to scrape Emails
function scrapeEmailsFromPage() {}