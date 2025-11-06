import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { create } from "zustand";
import { auth, googleProvider } from "../firebase/firebase";

export const useAuthStore = create((set)=>({

  //1. 상태변수


  //로그인, //회원가입
  user: null,
  


  //회원가입
  onMember: async({email,password,name,address,phone})=>{
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      set({user: userCredential.user})
      alert("회원가입 성공")
    }
    catch(err){
      alert(err.message)
    }
  },

  //로그인
  onLogin : async(email,password)=>{
    try{
      const userCredential= await signInWithEmailAndPassword(auth,email,password);
      set({user:userCredential.user})
      alert("로그인성공")
    }
    catch(err){
      alert(err.message)
    }
  },

  //구글
  onGoogleLogin: async() =>{
    try{
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
    }
  }

}))