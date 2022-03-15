
export function addName (state, payload) {
    let old = [...state.names];
    state.names = [...old, payload]
}

export function saveToken (state, payload) {
    state.adminToken = payload.token;
}

