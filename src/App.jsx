import './index.css';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

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
        <Button onClick={toggleBlueLightFilter} className='w-full sm:w-auto'>
          {isBlueLightFilter ? 'Disable Red-Purple Filter' : 'Enable Red-Purple Filter'}
        </Button>
        <Button className='w-full sm:w-auto'>Learn More</Button>
      </div>
    </div>
  );
}

export default App;
