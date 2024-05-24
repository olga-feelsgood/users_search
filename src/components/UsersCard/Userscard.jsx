import './Userscard.css';


function UsersCard(props) {

  return (
    <li className='users-card'>
      <h2 className='users-card__title'>{props.user.name}</h2>
      <p className='users-card__phone'>{props.user.phone}</p>
      <p className='users-card__email'>{props.user.email}</p>
    </li >
  );
}

export default UsersCard;