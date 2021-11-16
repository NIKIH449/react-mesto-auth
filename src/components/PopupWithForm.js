import React from 'react';

function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.isOpen ? 'popup_opened' : ''} popup_type_${
        props.name
      }`}
    >
      <div className="popup__container">
        <form
          className="popup__form"
          name={props.name}
          onSubmit={props.onSubmit}
        >
          <button
            type="button"
            onClick={props.onClose}
            className={`popup__button-close popup__button-close_type_${props.name}`}
          ></button>
          {props.title && <h2 className="popup__title">{props.title}</h2>}
          {props.children}
          {props.buttonText && (
            <button
              className={`popup__button-save popup__button-save_type_${props.name}`}
              type="submit"
            >
              {props.buttonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
