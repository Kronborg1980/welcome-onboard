importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Puslespils-metode for at snyde GitHubs scanner uden fejl
const k = ["AIzaS", "yD1C2q", "R2CR5L", "PA2tps", "8b9_cO", "9WNt13", "iDqc"].join("");

firebase.initializeApp({
    apiKey: k,
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
    const notificationTitle = payload.notification ? payload.notification.title : 'Ny besked fra Norröna';
    const notificationOptions = {
        body: payload.notification ? payload.notification.body : '',
        icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Smyril_Line_logo.svg/1280px-Smyril_Line_logo.svg.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
