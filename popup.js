let isRecording = false;

document.getElementById('startRecording').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  if (tab.url.includes('meet.google.com')) {
    chrome.tabs.sendMessage(tab.id, { action: 'startRecording' });
    document.getElementById('startRecording').disabled = true;
    document.getElementById('stopRecording').disabled = false;
    document.getElementById('status').textContent = 'Recording in progress...';
    isRecording = true;
  } else {
    document.getElementById('status').textContent = 'Please open a Google Meet session';
  }
});

document.getElementById('stopRecording').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.tabs.sendMessage(tab.id, { action: 'stopRecording' });
  document.getElementById('startRecording').disabled = false;
  document.getElementById('stopRecording').disabled = true;
  document.getElementById('status').textContent = 'Recording stopped';
  isRecording = false;
});