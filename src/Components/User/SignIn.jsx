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
    <div className="justify-center items-center flex ">
    <div className="flex flex-col gap-2 max-w-72 justify-center items-center mt-20">
    <div className="flex flex-col gap-4 justify-center">
      <h1 className="flex items-center justify-center text-light-purple text-4xl font-semibold mb-8">SignIn</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center">
          {" "}
          {/* gestisce il submit di tutti gli input nel form */}
          <input
          className="rounded-md flex drop-shadow-lg p-2"
            type="text"
            placeholder="username"
            name="signin-username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            } /*prende il valore di username dallo stato */
          />
          <input
          className="rounded-md mt-2 flex drop-shadow-lg p-2"
            type="password"
            placeholder="password"
            name="signin-password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            } /*prende il valore di password dallo stato */
          />
          <button className="bg-pink mt-3 mb-6 hover:shadow-xl text-white font-bold p-2 rounded-lg   drop-shadow-lg ">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}
