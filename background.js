chrome.runtime.onInstalled.addListener(() => {
  console.log('Meet Recorder & Transcriber extension installed');
});

// Handle tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url?.includes('meet.google.com')) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ['content.js']
    });
  }
});