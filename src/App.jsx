import './index.css';
import { useState } from 'react';
import BannedFoods from './BannedFoods';

function App() {
  const [isBlueLightFilter, setIsBlueLightFilter] = useState(false);

  const toggleBlueLightFilter = () => {
    setIsBlueLightFilter(!isBlueLightFilter);
  };

  return (
    <div className={`p-4 sm:p-6 md:p-8 ${isBlueLightFilter ? 'red-purple-filter' : ''}`}>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Safer Eating</h1>
      <p className='text-base sm:text-lg mt-2'>Unveiling risks in processed foods for healthier choices.</p>
      <div className='mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4'>
        <button onClick={toggleBlueLightFilter} className='w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm sm:text-base'>
          {isBlueLightFilter ? 'Disable Red-Purple Filter' : 'Enable Red-Purple Filter'}
        </button>
        <button className='w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm sm:text-base'>Learn More</button>
      </div>
      <BannedFoods />
    </div>
  );
}

export default App;
