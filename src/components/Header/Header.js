import React from "react";
import MuiDrawers from "./MuiDrawers";
import { withAuthSubscription } from "../../util/onAuthStateChanged";

const Header = (props) => {
  return <MuiDrawers {...props} />;
};

export default withAuthSubscription(Header);
