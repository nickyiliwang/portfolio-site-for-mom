import firebase, { firestore } from "../../../../../util/firebaseApp";

export const uploadProfileImage = (userId, file, handleCloseCallback) => {
  console.log(userId, file);
  const storageRef = firebase.storage().ref();
  const profileDbRef = firestore.collection("userProfile").doc(userId);

  // Upload the image to Cloud Storage.
  let filePath = `${userId}/ProfileImage/${file.name}`;
  firebase
    .storage()
    .ref(filePath)
    .put(file)
    .then(() => {
      storageRef
        .child(filePath)
        .getDownloadURL()
        .then(function (url) {
          // then uploads the download url from
          firestore
            .collection("userProfile")
            .doc(userId)
            .get()
            .then((doc) => {
              if (doc.exists) {
                profileDbRef.update({
                  photoURL: url,
                });

                handleCloseCallback();
                window.location.reload(false);
              }
            })
            .catch(function (error) {
              console.error("Error adding document: ", error);
            });
        })
        .catch((err) => console.error("error uploading file path", err));
    })
    .catch((err) => console.error("error uploading file", err));
};
