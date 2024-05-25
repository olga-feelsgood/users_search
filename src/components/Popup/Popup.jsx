import './Popup.css';


function Popup(props) {

  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`} onClick={props.onClose}>
      <div className='popup__content' onClick={(e) => e.stopPropagation()}>
        <h2 className='popup__title'>{props.user.name}</h2>
        <div className='popup__details'>

          <div className='popup__group'>
            <p className='popup__name'>Телефон:</p>
            <p className='popup__value'>{props.user.phone}</p>
          </div>

          <div className='popup__group'>
            <p className='popup__name'>Почта:</p>
            <p className='popup__value'>{props.user.email}</p>
          </div>

          <div className='popup__group'>
            <p className='popup__name'>Дата приема:</p>
            <p className='popup__value'>{props.user.hire_date}</p>
          </div>

          <div className='popup__group'>
            <p className='popup__name'>Должность:</p>
            <p className='popup__value'>{props.user.position_name}</p>
          </div>

          <div className='popup__group'>
            <p className='popup__name'>Подразделение:</p>
            <p className='popup__value'>{props.user.department}</p>
          </div>
        </div>
        <p className='popup__name popup__name_additional'>Дополнительная информация:</p>
        <p className='popup__value popup__value_additional'>{props.user.address}</p>
        <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default Popup;