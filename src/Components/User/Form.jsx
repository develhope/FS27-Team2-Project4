import { useState } from "react";

export function Form() {
  const [data, setData] = useState({ username: "", password: "" });

  function inputHandle(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function formSubmit(e) {
    e.preventDefault();
    console.log(data);
  }


  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={inputHandle}
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={inputHandle}
          placeholder="password"
        />
        <button>Submit!</button>
      </form>

    
    </div>
  );
}