export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex flex-col p-5 border border-gray-200 shadow-md rounded-lg backdrop-blur-2xl">
      <div className="flex justify-between">
        <h1>Location</h1>
        <h1>Cart</h1>
      </div>
      <div className="flex self-center pt-4">
        <h1>Search Bar</h1>
      </div>
    </header>
  );
}
