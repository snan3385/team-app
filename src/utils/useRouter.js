import { useContext } from "react";
// import {useLocation} from "react-router";
import { __RouterContext } from "react-router";

export default () => useContext(__RouterContext);
// export default () => useLocation();
