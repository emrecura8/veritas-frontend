
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      {/* Your main content to the right */}
      <div className="flex-1 bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">Main Content</h1>
        {/* Your content here */}
      </div>
    </div>
  );
}

export default App;
