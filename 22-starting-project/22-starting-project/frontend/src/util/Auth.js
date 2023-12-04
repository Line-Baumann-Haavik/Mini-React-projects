export default function getToken(){
    return localStorage.getItem("token");
}

export function tokenLoader(){
    return getToken();
}