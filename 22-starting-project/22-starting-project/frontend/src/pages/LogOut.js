import { redirect } from "react-router-dom";

export default function clearStorageAction(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    return redirect("/");
}