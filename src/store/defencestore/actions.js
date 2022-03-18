
import { Notify } from 'quasar';
import axios from 'axios';
import { useRoute } from 'vue-router';
import env from '../../../env.js';

// const route = useRoute();
// const baseurl = "https://edefense.herokuapp.com/api";
const baseurl = env.backend;

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
                context.commit('saveAdminToken', {token})
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
              console.log(response.data);
              let token = response.data.token;
              localStorage.setItem('userToken', token);
              let department = response.data.doc.department;
              localStorage.setItem('userDept', department);
              context.commit('saveUserToken', {token})
              Notify.create({
                  message: 'Login Success.',
                  caption: 'User successfully authenticated.',
                  color: 'blue'
              })
              resolve();
              /*
                USER DETAILS
                _id: "61bb47b0dfc25d42011b4b63"​​
                avi: ""​​
                department: "61b40ca89627d34b67535126"​​
                isAdmin: false​​
                name: ""​​
                password: "$2a$10$skyLOwVl6o2hg8e4.rN/qeHsMRZqPIzPneoj/9Z87qqhBAX//dDZS"​​
                rank: ""​​
                role: "Registry"​​
                username: "reg@DDI"
               */
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

export function getRequests (context, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: baseurl + '/user/request',
        headers: {
          'Authorization': 'Bearer '+localStorage.getItem('userToken')
        }
      })
      .then(response => {
        console.log(response.data);
        if(response.status === 201 || response.status === 200){
            let outgoing = [];
            let incoming = [];
            let userDept = localStorage.getItem('userDept');
            let requests = response.data.doc;
            requests.forEach(item => {
                if(item.from === userDept){
                    outgoing.push(item);
                }else{
                    incoming.push(item);
                }
            });
            context.commit('setRequests', {outgoing, incoming})
            resolve();
        }else{
            Notify.create({
                message: "Error fetching requests.",
                color: 'red'
            })
            reject();
        }
      })
      .catch(err => {
          Notify.create({
              message: 'Error fetching requests.',
              color: 'red'
          })
      })
    })

}

export function sendMail (context, data) {
    // const { to, text, reference, title } = data;
    console.log(data);
    const { to, text, files, title } = data;

    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: baseurl + '/user/mail',
        // data: { to, text, title }
        data: { to, text, files, title },
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
              message: 'Error sending mail.',
              color: 'red'
          })
      })
    })

}
