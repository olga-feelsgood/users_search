import './Userscardlist.css';
import UsersCard from '../UsersCard/Userscard.jsx'


function UsersCardList(props) {

  return (
    <section className='users-cardlist'>
      {props.isUsersNotFound ? <p className='users-cardlist__notfound'>Ничего не найдено</p> : undefined}
      <ul className='users-cardlist__list'>
        {props.users.map((user, index) =>
          <UsersCard
            user={user}
            key={index + 1}
            onCardClick={props.onCardClick}
          />)}
      </ul>
    </section>
  );
}

export default UsersCardList;