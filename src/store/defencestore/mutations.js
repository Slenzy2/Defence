
export function saveAdminToken (state, payload) {
    state.adminToken = payload.token;
}

export function saveUserToken (state, payload) {
  state.userToken = payload.token;
}

export function getDepartments (state, payload) {
  let arr = [];
  payload.departments.forEach(item => {
    arr.push(item.abbr)
  })
  console.log(arr)
  state.departments = arr;
}

export function setRequests (state, payload) {
  state.outgoingRequests = payload.outgoing;
  state.incomingRequests = payload.incoming;
}

export function logout(state){
  console.log("Logout commited")
  state.userToken = null
}
