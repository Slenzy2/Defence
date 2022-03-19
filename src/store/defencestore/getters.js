
export function getDepartments (state) {
  // console.log(state);
  return state.departments;
}

export function getRequests (state) {
  return ({ incoming: state.incomingRequests, outgoing: state.outgoingRequests });
}

export function getMails (state) {
  return ({ inbox: state.inbox, sent: state.sent });
}

export function usersInDept (state) {
  return state.usersInDept;
}

export function getLogs (state) {
  return state.logs;
}
