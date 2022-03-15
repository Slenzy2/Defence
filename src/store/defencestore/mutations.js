
export function addName (state, payload) {
    let old = [...state.names];
    state.names = [...old, payload]
}

