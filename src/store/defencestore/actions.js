
export function triggerAddName (context, data) {
    console.log(context);
    context.commit('addName', data)
}

