
export function addName (state, payload) {
    let old = [...state.names];
    state.names = [...old, payload]
}

export function saveToken (state, payload) {
    state.adminToken = payload.token;
}

export function getDepartments (state, payload) {
  let arr = [];
  payload.departments.forEach(item => {
    arr.push(item.name)
  })
  console.log(arr)
  state.departments = arr;
}
