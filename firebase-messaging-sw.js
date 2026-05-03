importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Din Firebase konfiguration
var k = ["AIza","SyD1","C2qR","2CR5","LPA2","tps8","b9_c","O9WN","t13i","Dqbc"];
firebase.initializeApp({
    apiKey: k.join("").substring(0, 39),
    projectId: "norrona-app",
    messagingSenderId: "836610543277",
    appId: "1:836610543277:web:3e74479daf205453bd0024"
});

const messaging = firebase.messaging();

// Håndterer beskeden, når appen ligger i baggrunden
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Modtog besked i baggrunden: ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Smyril_Line_logo.svg/1280px-Smyril_Line_logo.svg.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
