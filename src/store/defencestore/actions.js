import { Notify } from 'quasar';
import axios from 'axios';
import { useRoute } from 'vue-router';

// const route = useRoute();
const baseurl = "https://edefense.herokuapp.com/api";

export function triggerAddName (context, data) {
    console.log(context);
    context.commit('addName', data)
}

export function adminLogin (context, data) {
    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            url: baseurl + '/login',
            data: {
                username: data.username,
                password: data.password
            }
        })
        .then(response => {
            if(response.status === 201){
                let token = response.data.token;
                localStorage.setItem('adminToken', token);
                context.commit('saveToken', {token})
                Notify.create({
                    message: 'Login Success.',
                    caption: 'Admin successfully authenticated.',
                    color: 'blue'
                })
                resolve();
            }else{
                Notify.create({
                    message: "Login Failure.",
                    caption: "Authentication error, check credentials.",
                    color: 'red'
                })
                reject();
            }
        })
        .catch(err => {
            Notify.create({
                message: 'Login Failure.',
                caption: "Authentication error, check credentials.",
                color: 'red'
            })
        })
    })

}

