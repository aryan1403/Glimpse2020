import axios from "axios";

// axios.get("http://localhost:8080/").then(res => console.log(res.data));

const URL = "http://localhost:8080";

export async function sendMail(mail) {
    const res = await axios.post(URL+"/register", {email: mail});

    return res.data;
}

export async function userExists(mail) {
    const res = await axios.post(URL+"/exists", {email: mail});

    return res.data;
}

export async function saveUserCreds(mail, password) {
    const res = await axios.post(URL+"/saveusercreds", {email: mail, pass: password});

    return res.data;
}

export async function isLogin(mail, password) {
    const res = await axios.post(URL+"/login", {email: mail, pass: password});

    return res.data;
}