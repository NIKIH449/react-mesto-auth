import React from 'react';
import PopupWithForm from './PopupWithForm';
import registered from '../images/registered.svg';

function InfoTooltip(props) {
  return (
    <PopupWithForm onClose={props.onClose} isOpen={props.isOpen}>
      <img className="infoTooltip__image" alt="успех" src={registered} />
      <p className="infoTooltip__paragraph">Вы успешно зарегистрировались!</p>
    </PopupWithForm>
  );
}

export default InfoTooltip;
