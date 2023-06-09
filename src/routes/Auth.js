import React, { useState } from "react";
import { authService } from "fbase";
import { Link } from "react-router-dom";
import Home from "../routes/Home";

const Auth = ({isLoggedIn}) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {

    event.preventDefault();

    try {
      let data;
      data = await authService.signInWithEmailAndPassword(email,password);
      // if (newAccount) {
      //   data = await authService.signInWithEmailAndPassword(
      //     email,
      //     password
      //   );
      // } else {
      //   data = await authService.createUserWithEmailAndPassword(email, password);
      // }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };



  return (
    
    <div>

        <h1>로그인 임시 페이지</h1>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <br/>
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <br/>
        <input type="submit" value="로그인"/>
        <br/>
        {error}
      </form>
      <br/>
      <div>
        <button>구글 계정으로 로그인</button>
        <br/>
        <button><Link to ="../routes/Join">회원가입</Link></button>
      </div>
    </div>
  );

}
export default Auth;