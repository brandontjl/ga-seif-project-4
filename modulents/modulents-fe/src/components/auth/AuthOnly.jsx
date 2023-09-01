import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import { DateTime } from "luxon";

export default function AuthOnly(props) {
    const { getUserFromToken, logoutSuccess } = useContext(AuthContext);

    const user = getUserFromToken();
    if (!user) return <Navigate to={"/userLogin"} />;

    const now = DateTime.now().toUnixInteger();

    if (user.exp && user.exp < now) {
        logoutSuccess();
        return <Navigate to={"/userLogin"} />;
    }

    return <props.component></props.component>;
}