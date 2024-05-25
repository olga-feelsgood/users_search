import { useState } from 'react';
import './App.css';
import Users from '../Users/Users.jsx'
import Popup from '../Popup/Popup.jsx';


function App() {

  const [selectedCard, setSelectedCard] = useState({}); //выбранная карточка с юзером
  const [isUserPopupOpen, setUserPopupOpen] = useState(false); //открыть/закрыть popup

  function handleCardClick(card) {
    // console.log('нажали');
    setSelectedCard(card);
    setUserPopupOpen(true);
  }

  function closePopup() {
    setUserPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <Users onCardClick={handleCardClick} />
      <Popup
        user={selectedCard}
        onClose={closePopup}
        isOpen={isUserPopupOpen}
      />
    </>
  )
}

export default App