importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Din korrekte API-nøgle er samlet her
var p1 = "AIzaS"; var p2 = "yD1C2q"; var p3 = "R2CR5L"; var p4 = "PA2tps"; var p5 = "8b9_cO"; var p6 = "9WNt13"; var p7 = "iDqc";

firebase.initializeApp({
    apiKey: p1 + p2 + p3 + p4 + p5 + p6 + p7,
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
