import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login({ setLogin, users }) {
  const [inputLogin, setInputLogin] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  useEffect(
    () => console.log(users),
    [users]
  ); /*Legge i dati inseriti ad ogni modifica */

  function handleClick() {
    navigate("/signin");
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
      (user) => user.username === inputLogin.username
    );
    /*prendiamo il primo elemento dall'array user che ha il nome uguale a quello che abbiamo inserito nell'input */
    if (loginUser) {
      /*se questo username esiste allora verifichiamo che anche la password corrisponda, altrimenti mostriamo il relativo errore */
      if (loginUser.password === inputLogin.password) {
        setLogin(loginUser);
        navigate("/login" + inputLogin.username);
      } else {
        alert("Password errata!");
      }
    } else {
      alert("Username inesistente!");
    }
  }

  return (
    <div className="flex flex-col gap-4 content-center max-w-72 ">
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-pink-800 text-lg">Login</h1>

        
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 justify-center"
        >
          {" "}
          {/* gestisce il submit di tutti gli input nel form */}
          <input
            className="rounded-lg flex drop-shadow-lg "
            type="text"
            placeholder="username"
            name="username"
            value={inputLogin.username}
            onChange={(e) =>
              dataLogin(e.target.name, e.target.value)
            } /*prende il valore da dataLogin che a sua volta li recupera dallo stato*/
          />
          <input
            className="rounded-lg mt-4 flex drop-shadow-lg"
            type="password"
            placeholder="password"
            name="password"
            value={inputLogin.password}
            onChange={(e) =>
              dataLogin(e.target.name, e.target.value)
            } /*prende il valore da dataLogin che a sua volta li recupera dallo stato*/
          />
          <button className="bg-red-400 mt-3 text-red-50 font-bold p-2 rounded-lg  drop-shadow-lg  hover:bg-orange-300">
            Login
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <h5 className="font-medium ">Non sei ancora registrato?</h5>
        <button
          onClick={handleClick}
          className="bg-red-400 p-2 text-red-50 font-bold rounded-lg  drop-shadow-lg  hover:bg-orange-300 "
        >
          SignIn
        </button>
      </div>
    </div>
  );
}
