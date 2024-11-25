let mediaRecorder;
let audioContext;
let recordedChunks = [];
let recognition;

// Initialize speech recognition
function initSpeechRecognition() {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  
  recognition.onresult = (event) => {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] Transcription: ${transcript}`);
      }
    }
  };

  recognition.onerror = (event) => {
    console.error('Speech Recognition Error:', event.error);
  };
}

// Start recording
async function startRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    
    mediaRecorder = new MediaRecorder(stream);
    audioContext = new AudioContext();
    
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    mediaRecorder.start(1000);
    initSpeechRecognition();
    recognition.start();
    
    console.log('Recording and transcription started');
  } catch (error) {
    console.error('Error starting recording:', error);
  }
}

// Stop recording
function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
    mediaRecorder.stream.getTracks().forEach(track => track.stop());
  }
  
  if (recognition) {
    recognition.stop();
  }
  
  if (audioContext) {
    audioContext.close();
  }
  
  console.log('Recording and transcription stopped');
  recordedChunks = [];
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'startRecording') {
    startRecording();
  } else if (message.action === 'stopRecording') {
    stopRecording();
  }
});