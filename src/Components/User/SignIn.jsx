import { useState } from "react";

export function SignIn({ setUsers, users }) {
  /* Stato primo form */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <div className="flex flex-col justify-center gap-4 content-center max-w-72 ">
      <div className="flex flex-col gap-4 ">
      <h1 className="text-pink-800 text-lg">SignIn</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center">
          {" "}
          {/* gestisce il submit di tutti gli input nel form */}
          <input
          className="rounded-lg"
            type="text"
            placeholder="username"
            name="signin-username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            } /*prende il valore di username dallo stato */
          />
          <input
          className="rounded-lg"
            type="password"
            placeholder="password"
            name="signin-password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            } /*prende il valore di password dallo stato */
          />
          <button className="bg-red-400 text-red-50 font-bold p-2 rounded-lg  hover:bg-orange-300">Submit</button>
        </form>
      </div>
    </div>
  );
}
