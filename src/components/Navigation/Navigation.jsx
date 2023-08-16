import { Link } from 'react-router-dom';
const Navigation = () => (
  <>
    <Link to="/">Home</Link>
    <div
      style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'flex-end',
        marginRight: '40px',
      }}
    >
      <Link to="login">Login</Link>
      <Link to="register">Register</Link>
      <Link to="phonebook">PhonebookPage</Link>
    </div>
  </>
);
export default Navigation;
