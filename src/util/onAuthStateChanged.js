//auth
import { auth } from "./util/firebaseApp";

const [isSignedIn, setIsSignedIn] = useState(false);
const [userData, setUserData] = useState(null);

auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const photoURL = user.photoURL;
    const uid = user.uid;
    const providerData = user.providerData;
    setIsSignedIn(true);
    setUserData(providerData);
  } else {
    setUserData(null);
    setIsSignedIn(false);
  }
});
