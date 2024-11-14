import { Button } from '@/view/components/shadcn/button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-10 mx-auto flex max-w-xs flex-col items-center justify-center space-y-4 rounded-lg bg-gray-100 p-4 shadow-lg">
      <h1 className="text-2xl font-semibold">Counter: {count}</h1>
      <div className="flex space-x-4">
        <Button
          size={'lg'}
          variant={'default'}
          className="text-md font-semibold"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </Button>
        <Button
          size={'lg'}
          variant={'default'}
          className="text-md font-semibold"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default App;
