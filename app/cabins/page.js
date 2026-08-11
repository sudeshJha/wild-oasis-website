import Counter from "../components/Counter";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);

  return (
    <div>
      <h1>Cabins page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Counter users={users} />
    </div>
  );
}
