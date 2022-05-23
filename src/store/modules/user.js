export default {
  actions: {
    
  },

  mutations: {
    login(state, dataForm){
      const user = state.userArray.find(el => el.email === dataForm.email && el.password === dataForm.password)
      if(!!user){
        console.log(`Здравствуйте ${user.name}`);
        state.currentUser = user
        localStorage.setItem('currentUser', JSON.stringify(user))
      }else{
        console.log('Ошибка! Пользователь не найден.');
      }
    },

    register(state, dataFrom){
      if(dataFrom.agreement){

        if(dataFrom.password === dataFrom.subPassword){

          if(!!state.userArray.find(el => el.email === dataFrom.email)){
            console.log('Такая почта уже занята!');
          }else{
            const newUser = {
              ...dataFrom,
              role: 'user'
            }
            delete newUser.subPassword
            state.userArray.push(newUser)
            state.currentUser = newUser
            console.log(`Поздравляю ${newUser.name}, вы успешно зарегестрировались!`);
            localStorage.setItem('currentUser', JSON.stringify(newUser))
            localStorage.setItem('userArray', JSON.stringify(state.userArray))
          }

        }else{
          console.log('Пароли не совпадают!');
        }

      }else{
        console.log('Обработка не разрешена!');
      }
    },

    saveUser(state, user){
      state.currentUser = user
    },

    saveArrayUser(state, array){
      state.userArray = JSON.parse(array)
    },

    emptyUser(state){
      state.currentUser = null
      localStorage.removeItem('currentUser')
    }
  },

  state: {
    userArray: [{
      name: 'admin',
      email: 'admin@gmail.com',
      password: '123',
      role: 'admin'
    }],
    currentUser: null,
  },
  
  getters:{
    isAuth(state){
      return !!state.currentUser
    },

    isAdmin(state){
      if(!!state.currentUser && state.currentUser.role === 'admin'){
        return true
      }else{
        return false
      }
    }
  }
}