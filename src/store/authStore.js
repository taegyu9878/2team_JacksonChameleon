import { signInWithEmailAndPassword } from "firebase/auth";
import { create } from "zustand";
import { auth } from "../firebase/firebase";

export const useAuthStore = create((set)=>({
  //1. 상태변수

  //로그인
  onLogin : async(email,password)=>{
    try{
      const userCredential= await signInWithEmailAndPassword(auth,email,password);
      set({user:userCredential.user})
      alert("회원가입성공")
    }
    catch(err){
      alert(err.message)
    }
  }

}))