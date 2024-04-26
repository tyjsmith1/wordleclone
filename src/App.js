import Grid from './components/Grid';
import './App.css';

function App() {
  return (
    <body className='bg-gray-800 min-h-screen w-full'>
      <h1 className='text-gray-200 text-6xl font-bold text-center'>Wordle Clone</h1>
      <Grid />
    </body>
  );
}

export default App;
