export function UserList({ users, setUsers, login }) {
  function handleDelete(index) {
    const deleteUser = users.filter((_, indexOfUser) => indexOfUser !== index);
    setUsers(deleteUser);
  }

  function handleGiveAdminPermission(index) {
    const userCopy = [...users];
    userCopy[index].admin = !userCopy[index].admin;
    setUsers(userCopy);
  }
  return (
    <>
      <div>
        {users.map((user, index) => (
          <li className="font-bold" key={index}>
            {user.username}

            {login !== null && login.admin && (
              <button
                className="bg-red-400 mt-3 text-red-50 font-bold p-2 rounded-lg  drop-shadow-lg ml-8 mr-8 hover:bg-orange-300"
                onClick={() => handleGiveAdminPermission(index)}
              >
                {user.admin ? "Remove admin" : "Set Admin"}
              </button>
            )}
            {(login !== null && login.admin && (
              <button
                className="bg-red-400 mt-3 text-red-50 font-bold p-2 rounded-lg  drop-shadow-lg  mr-8 hover:bg-orange-300"
                onClick={() => handleDelete(index)}
              >
                {" "}
                Delete user{" "}
              </button>
            )) ||
              (login !== null && login.username === user.username && (
                <button
                  className="bg-red-400 mt-3 text-red-50 font-bold p-2 rounded-lg  drop-shadow-lg mr-8 hover:bg-orange-300"
                  onClick={() => handleDelete(index)}
                >
                  {" "}
                  Delete user{" "}
                </button>
              ))}
          </li>
        ))}
      </div>
    </>
  );
}
