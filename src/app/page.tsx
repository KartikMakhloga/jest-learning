export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>

      <button className="bg-orange-500 py-2 px-2 rounded-lg">click me</button>

      <div>
        <label htmlFor="randomText">Enter Random Text: </label>
        <input type="text" id="randomText" />
      </div>

      <div className="mt-4">
        <label htmlFor="specificText">Enter Specific Text: </label>
        <input type="text" id="specificText" />
      </div>

      <div className="mt-4">
        <input placeholder="Search..." />
      </div>
      <div className="mt-4 text-black">
        <input value="KARTIK" readOnly/>
      </div>
    </main>
  );
}
