import { logout } from "../../utilities/users-service";
export default function UserLogOut({ user, setUser, admin, setAdmin }) {
  function handleLogOut() {
    logout();
    setUser(null);
  }
  console.log(admin.role);

  return (
    <div>
      <div>
        <h1>{user.email}</h1>
        <h1>{user.name}</h1>
        <button onClick={handleLogOut}>LOG OUT</button>
        <h3>your role is: {admin.role}</h3>
      </div>
    </div>
  );
}
