
import firebase from '../../../firebase'





const set_data = () => {
    return (dispatch) => {
        dispatch({
            type: "SETDATA", payload: { name: "mudassir" , gender : "male"}
        })
    }
}

// const facebook_login = () => {
//         return(dispatch) =>{
//             var provider = new firebase.auth.FacebookAuthProvider();
//             firebase.auth().signInWithPopup(provider)
//             .then(function(result) {
//                 var token = result.credential.accessToken;
//                var user = result.user
//                let create_user = {
//                    name : user.displayName,
//                    email : user.email,
//                    profile : user.photoURL,
//                    uid : user.uid
//                }
//              firebase.database().ref('user').set(create_user)
//            .then(()=>{
//                alert("user login succcesfully")
//            })
//             }).catch(function(error) {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                console.log(errorMessage)
//               });
//         }
//         }
    


export {
    // 
    set_data
}