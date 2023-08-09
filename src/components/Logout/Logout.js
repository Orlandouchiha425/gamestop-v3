import { logout } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";

export default function UserLogOut({ user, setUser }) {
  const navigate = useNavigate();
  function handleLogOut() {
    try {
      logout();
    } catch (error) {
      console.log(error);
    } finally {
      setUser(null);
      navigate("/");
    }
  }

  return (
    <div>
      <div>
        <h1>{user.email}</h1>
        <h1>{user.name}</h1>
        <button onClick={handleLogOut}>LOG OUT</button>
      </div>
    </div>
  );
}
