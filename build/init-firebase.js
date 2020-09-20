// TODO: Replace the following with your app's Firebase project configuration
import * as admin from 'firebase-admin';


var serviceAccount = require("./kiosk-online-firebase-adminsdk-yuf74-2609994c90.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://kiosk-online.firebaseio.com"
});