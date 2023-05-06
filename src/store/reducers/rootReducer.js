const initState = { // lưu State vào 1 object
    users: [
        {id: 1, name: 'Trường'},
        {id: 2, name: 'Quốc'}
    ],
    posts:[]
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'DELETE_USER':
            console.log('>> Run into delete user: ', action);
            let users = state.users;

            users = users.filter(item => item.id !== action.payload.id);
            console.log('Check user delete: ', users);            
            return {
                ...state, users
            };
            
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000);
            let user = {id: id, name: `Random - ${id}`}
            return {
                ...state, users: [...state.users, user]
            };            
        default:
            return state; // trả 1 cục state                       
    }
}

export default rootReducer;