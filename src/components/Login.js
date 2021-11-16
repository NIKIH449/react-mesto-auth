import React, { useRef, useState } from 'react';
import * as auth from '../auth';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword]  = useState('');

  function onLogin(e) {
    e.preventDefault();
    auth.signIn(password, email)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <section className="auth">
      <form className="auth__form">
        <div className="auth__container">
          <h2 className="auth__title">Войти</h2>
          <input
            value={email}
            onChange={handleChangeEmail}
            id="auth__input"
            type="email"
            name="email"
            className="auth__input"
            placeholder="Email"
            required
          />
          <input
            value={password}
            onChange={handleChangePassword}
            id="password"
            type="password"
            name="password"
            className="auth__input"
            placeholder="Пароль"
            minLength="6"
            maxLength="40"
          />
        </div>
        <button onClick={onLogin} className="auth__submit-button">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
