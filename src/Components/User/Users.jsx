import { useEffect, useState } from "react";

export function Users() {
  const [users, setUsers] = useState([
    {
      username: "Manuel",
      password: "kinkyEpiccante",
      admin: true,
    },
  ]);
  /* Stato primo form */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /* Stato secondo form */
  const [login, setLogin] = useState(null);
  const [inputLogin, setInputLogin] = useState({ username: "", password: "" });

  useEffect(
    () => console.log(login),
    [login]
  ); /*Legge i dati inseriti ad ogni modifica */

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      username,
      password,
      admin: false,
    }; /*Al submit dei dati crea il nuovo oggetto coi dati inseriti  */
    setUsers([
      ...users,
      newUser,
    ]); /*Aggiunge il nuovo oggetto all'array che contiene quello recuperato dall'inizializzazione di users */
  }

  /*creo una nuova funzione per recuperare i dati dagli input e passarli allo stato */
  function dataLogin(name, value) {
    setInputLogin({
      ...inputLogin,
      [name]: value,
    }); /* name ha le quadre perchè servono per richiamare la proprietà dell'oggetto */
  }

  function handleLogin(e) {
    /*gestisce il submit dei dati degli imput nel login */
    e.preventDefault();
    const loginUser = users.find(
      /*prendiamo il primo elemento dall'array user che ha il nome uguale a quello che abbiamo inserito nell'input */
      (user) => user.username === inputLogin.username
    );
    if (loginUser) {
      /*se questo username esiste allora verifichiamo che anche la password corrisponda, altrimenti mostriamo il relativo errore */
      if (loginUser.password === inputLogin.password) {
        setLogin(loginUser);
      } else {
        alert("Password errata!");
      }
    } else {
      alert("Username inesistente!");
    }
  }

  function handleDelete(index) {
    const deleteUser = users.filter(
      (user, indexOfUser) => indexOfUser !== index
    );
    setUsers(deleteUser);
  }

  const userList = users.map((user, index) => (
    <li key={index}>
      {user.username}

      {(login !== null && login.admin && (
        <button onClick={() => handleDelete(index)}> Delete user </button>
      )) ||
        (login !== null && login.username === user.username && (
          <button onClick={() => handleDelete(index)}> Delete user </button>
        ))}
    </li>
  ));

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          {" "}
          {/* gestisce il submit di tutti gli input nel form */}
          <input
            type="text"
            placeholder="username"
            name="signin-username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            } /*prende il valore di username dallo stato */
          />
          <input
            type="password"
            placeholder="password"
            name="signin-password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            } /*prende il valore di password dallo stato */
          />
          <button>Submit</button>
        </form>

        <form onSubmit={handleLogin}>
          {" "}
          {/* gestisce il submit di tutti gli input nel form */}
          <input
            type="text"
            placeholder="username"
            name="username"
            value={inputLogin.username}
            onChange={(e) =>
              dataLogin(e.target.name, e.target.value)
            } /*prende il valore da dataLogin che a sua volta li recupera dallo stato*/
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={inputLogin.password}
            onChange={(e) =>
              dataLogin(e.target.name, e.target.value)
            } /*prende il valore da dataLogin che a sua volta li recupera dallo stato*/
          />
          <button>Login</button>
        </form>
      </div>

      <ul>{userList}</ul>
    </div>
  );
}
