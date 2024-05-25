import { useState } from 'react';
import './Users.css'
import SearchForm from '../SearchForm/Searchform.jsx';
import UsersCardList from '../UsersCardList/Userscardlist.jsx';
import usersApi from '../utils/UsersApi.js';


function Users(props) {

  const [allUsers, setAllUsers] = useState([]);//все юзеры с сервера
  const [isUsersNotFound, setIsUsersNotFound] = useState(false);//если не найдены юзеры по запросу

  function getAllUsers() {
    usersApi.getUsers()
      .then(users => {
        setAllUsers(users);
      })
  }

  function getFilteredUsers(query) {
    usersApi.filterUsers(query)
      .then(users => {
        if (users.length === 0) {
          setIsUsersNotFound(true);
          setAllUsers([]);
        } else {
          setIsUsersNotFound(false);
          setAllUsers(users);
        }
      })
  }

  return (
    <div className='wrapper'>
      <main className='movies'>
        <SearchForm
          onSearchAllUsers={getAllUsers}
          onFilterUsers={getFilteredUsers}
        />
        <UsersCardList
          users={allUsers}
          isUsersNotFound={isUsersNotFound}
          onCardClick={props.onCardClick}
        />
      </main>
    </div>
  );
}

export default Users;