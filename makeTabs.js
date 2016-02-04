//make tabs
function makeTabsFromArray(arrayOfSearchTermsStrings) {
  for (var i = 0; i < arrayOfSearchTermsStrings.length; i++) {
		console.log('array at i ', arrayOfSearchTermsStrings[i]);
    chrome.tabs.create({ url: "http://www.google.com/#q=" + arrayOfSearchTermsStrings[i], windowId: i + 1 });
  }
}
