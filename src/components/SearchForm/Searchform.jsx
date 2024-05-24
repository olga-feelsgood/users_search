import { useState } from 'react';
import './Searchform.css';


function SearchForm(props) {

  const [searchQuery, setSearchQuery] = useState('');

  const changeSearchQuery = (evt) => {
    setSearchQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(searchQuery);
    if (searchQuery.length === 0) {
      props.onSearchAllUsers();
    } else {
      props.onFilterUsers(searchQuery);
    }
  }

  return (

    <div className='searchform'>
      <form className='searchform__form'
        onSubmit={handleSubmit}
        name='searchform'>
        <input
          className='searchform__input'
          placeholder='Введите ключевое слово запроса или нажмите на лупу для вывода всех пользователей'
          type='text'
          value={searchQuery}
          onChange={changeSearchQuery}
        />
        <button className='searchform__button' type='submit'></button>
      </form>
    </div>
  )
}

export default SearchForm;