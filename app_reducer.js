const INITIAL_STATE = {
users : [
  {
    name : "Mudassir",
    email : "muudasir"
  }
]
}



export default (state = INITIAL_STATE, action) => {
  // console.log("action=>>>>",action)
  switch (action.type) {
    case "SETDATA":
      return ({
        ...state,
        users : [...state.users,action.payload ]
      })
  }
  return state
}

