import './index.css';

function App() {
  return (
    <div className="App">
      <div className="bg-slate-700 text-slate-200 grid place-content-center min-h-screen">
        <h1 className="text-3xl font-thin">
          Hello, world!
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4">
        <div className="w-20 h-20 bg-teal-400 rounded-full">
          <div className="w-10 h-10 bg-red-400 rounded-full"></div>
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="">You have a new message!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
