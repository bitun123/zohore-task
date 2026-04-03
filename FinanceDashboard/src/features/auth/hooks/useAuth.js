import { useUserStore } from "../store/useUserStore";

export const useAuth = () => {
  const { setUser, setLoading, setError, logout } = useUserStore();

  //login
  const login = (email, password) => {
   
    try {
      setLoading(true);
      const users = JSON.parse(localStorage.getItem("users")) || [];


      const user = users.find(
        (u) => u.email.trim() == email.trim() && u.password.trim() == password.trim(),
      );

   
      if (!user) {
        setError("Invalid credentials");
        return { success: false };
      }
      setUser(user);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  //register
  const register = (userName, email, password) => {
    try {
      setLoading(true);
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const exists = users.find((u) => u.email === email);
      if (exists) {
        throw new Error("User already exists");
      }

      users.push({ userName, email, password, role: "user" });
      localStorage.setItem("users", JSON.stringify(users));
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { login, register, logout };
};
