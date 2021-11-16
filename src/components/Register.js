import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as auth from '../auth';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword]  = useState('');

  function onRegister(e) {
    e.preventDefault();
    auth.signUp(password, email)
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
          <h2 className="auth__title">Регистрация</h2>
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
        <div className="auth__container">
          <button onClick={onRegister} className="auth__submit-button">
            Зарегистрироваться
          </button>
          <p className="auth__paragraph">
            Уже зарегистрированы?
            <Link to="/sign-in" className="auth__link">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Register;
