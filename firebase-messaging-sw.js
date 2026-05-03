importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Bruger din originale og 100% korrekte metode til API-nøglen
var k = ["AIza","SyD1","C2qR","2CR5","LPA2","tps8","b9_c","O9WN","t13i","Dqbc"];

firebase.initializeApp({
    apiKey: k.join("").substring(0, 39),
    authDomain: "norrona-app.firebaseapp.com",
    databaseURL: "https://norrona-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "norrona-app",
    storageBucket: "norrona-app.firebasestorage.app",
    messagingSenderId: "836610543277",
    appId: "1:836610543277:web:3e74479daf205453bd0024"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Modtog baggrundsbesked: ', payload);
    const notificationTitle = payload.notification.title || 'Ny besked';
    const notificationOptions = {
        body: payload.notification.body || '',
        icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Smyril_Line_logo.svg/1280px-Smyril_Line_logo.svg.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
