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
    <div className="justify-center items-center flex p-10">
    <div className="flex flex-col gap-2 max-w-72 justify-center items-center mt-20">
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="flex items-center justify-center text-dark-blue text-4xl font-semibold mb-8">Login</h1>

        
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 justify-center"
        >
          {" "}
          {/* gestisce il submit di tutti gli input nel form */}
          <input
            className="rounded-md flex drop-shadow-lg p-2"
            type="text"
            placeholder="username"
            name="username"
            value={inputLogin.username}
            onChange={(e) =>
              dataLogin(e.target.name, e.target.value)
            } /*prende il valore da dataLogin che a sua volta li recupera dallo stato*/
          />
          <input
            className="rounded-md mt-2 flex drop-shadow-lg p-2"
            type="password"
            placeholder="password"
            name="password"
            value={inputLogin.password}
            onChange={(e) =>
              dataLogin(e.target.name, e.target.value)
            } /*prende il valore da dataLogin che a sua volta li recupera dallo stato*/
          />
          <button className="bg-light-blue hover:bg-dark-blue mt-3 mb-6 hover:shadow-xl text-white font-bold p-2 rounded-lg   drop-shadow-lg  hover:bg-orange-300">
            Login
          </button>
        </form>
      </div>
        <h5 className="text-xs ">Non sei ancora registrato?</h5>
        <button
          onClick={handleClick}
          className="bg-pink hover:shadow-xl p-2 text-red-50 font-bold rounded-lg px-12 drop-shadow-lg "
        >
          SignIn
        </button>
    </div>
    </div>
  );
}
