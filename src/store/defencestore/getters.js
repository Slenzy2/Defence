
export function getDepartments (state) {
  // console.log(state);
  return state.departments;
}

export function getRequests (state) {
  return ({ incoming: state.incomingRequests, outgoing: state.outgoingRequests });
}