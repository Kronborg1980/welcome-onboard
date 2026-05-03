importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyD1C2qR2CR5LPA2tps8b9_cO9WNt13iDqc",
    projectId: "norrona-app",
    messagingSenderId: "836610543277",
    appId: "1:836610543277:web:3e74479daf205453bd0024"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Smyril_Line_logo.svg/1280px-Smyril_Line_logo.png'
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
});
