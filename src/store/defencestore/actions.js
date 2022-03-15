import { Notify } from 'quasar';
import axios from 'axios';
import { useRoute } from 'vue-router';

// const route = useRoute();
const baseurl = "https://edefense.herokuapp.com/api";

export function triggerAddName (context, data) {
    context.commit('addName', data)
}

export function adminLogin (context, data) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
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

export function userLogin (context, data) {
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
              localStorage.setItem('userToken', token);
              context.commit('saveToken', {token})
              Notify.create({
                  message: 'Login Success.',
                  caption: 'User successfully authenticated.',
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

export function sendRequest (context, data) {
  // const { to, text, reference, title } = data;
  console.log(data);
  const { to, text, files, reference, title } = data;

  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: baseurl + '/user/request',
      // data: { to, text, reference, title }
      data: { to, text, files, reference, title },
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem('userToken')
      }
    })
    .then(response => {
      console.log(response);
      /*if(response.status === 201){
          let token = response.data.token;
          localStorage.setItem('userToken', token);
          context.commit('saveToken', {token})
          Notify.create({
              message: 'Login Success.',
              caption: 'User successfully authenticated.',
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
      }*/
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

export function getDepartments (context, data) {

  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: baseurl + '/user/department',
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem('userToken')
      }
    })
    .then(response => {
      // console.log(response.data.doc);
      if(response.status === 201 || response.status === 200){
          context.commit('getDepartments', {departments: response.data.doc})
          resolve();
      }else{
          Notify.create({
              message: "Error fetching departments.",
              color: 'red'
          })
          reject();
      }
    })
    .catch(err => {
        Notify.create({
            message: 'Error fetching departments.',
            color: 'red'
        })
    })
  })

}

