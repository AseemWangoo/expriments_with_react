### Push Notifications

- Register app as Firebase project
- npm i firebase
- Insert service worker
- Firebase init.js and the env production
- Vapid key which is under Web Configuration, (Cloud Messaging Tab), Webpush certificate's key
- Configuration in App.js
- Ask for getToken by notification component

### For foreground

- npm i react-toastify
- https://fkhadra.github.io/react-toastify/introduction/
- If notifications show twice,
  `https://stackoverflow.com/questions/66263996/react-app-my-alert-window-is-showing-up-twice`

### For using notifications

- Enter the value in REACT_APP_VAPID_KEY
- Inside the firebaseInit.js, place your firebase config
- Inside the firebase-messaging-sw.js, place your firebase config
