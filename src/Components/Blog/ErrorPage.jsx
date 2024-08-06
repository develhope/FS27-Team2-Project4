import cat from "../../assets/images/thinking.png";

export function ErrorPage() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
        <img src={cat}></img>
      <div className="text-center">

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We can't find that page.</p>
      </div>
      {/* <a href="https://www.flaticon.com/free-stickers/animals" title="animals stickers">Animals stickers created by Stickers - Flaticon</a> */}
    </div>
  );
}
