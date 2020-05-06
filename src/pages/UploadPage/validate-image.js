const _validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];

export const validate = (oForm) => {
  const arrInputs = oForm.getElementsByTagName("input");
  for (const i = 0; i < arrInputs.length; i++) {
    const oInput = arrInputs[i];
    if (oInput.type == "file") {
      const sFileName = oInput.value;
      if (sFileName.length > 0) {
        const blnValid = false;
        for (let j = 0; j < _validFileExtensions.length; j++) {
          const sCurExtension = _validFileExtensions[j];
          if (
            sFileName
              .substr(
                sFileName.length - sCurExtension.length,
                sCurExtension.length
              )
              .toLowerCase() == sCurExtension.toLowerCase()
          ) {
            blnValid = true;
            break;
          }
        }

        if (!blnValid) {
          alert(
            "Sorry, " +
              sFileName +
              " is invalid, allowed extensions are: " +
              _validFileExtensions.join(", ")
          );
          return false;
        }
      }
    }
  }

  return true;
};
