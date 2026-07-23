import { useState } from "react";

const [currentUser, setCurrentUser] = useState(null);
const [authState,SetAuthState] = useState(null)

const login = useCallback((user) => {
  setCurrentUser(user);
}, []);

const value = SetAuthState(() => {
  currentUser,
  login
});