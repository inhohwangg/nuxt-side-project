export default {
    namespaced:true,
    state: {
        token: null
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        }
    },
    actions: {
    },

}

export async function login(userId, password) {
    const response = await http.post('/loginpage', {
        userId,
        password
    })
    if (response.status === 200) {
        store.commit('/auth/setToken', response.data.token)
    }
    return response
}