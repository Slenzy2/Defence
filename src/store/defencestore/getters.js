
export function getDepartments (state) {
  // console.log(state);
  return state.departments;
}

export function getRequests (state) {
  return ({ incoming: state.incomingRequests, outgoing: state.outgoingRequests });
}

export function getLogs (state) {
  return state.logs;
}