import { AC } from '@/core/actions';
import { useAppDispatch } from '@/shell/store';
import { useCount } from '@/shell/storeHooks';

function App() {
  const count = useCount();
  const dispatch = useAppDispatch();
  const increment = () => dispatch(AC['ui/increment'](null));
  const decrement = () => dispatch(AC['ui/decrement'](null));
  const incrementAsync = () => dispatch(AC['ui/increment-async'](null));

  return (
    <div className="m-10 mx-auto flex max-w-xs flex-col items-center justify-center space-y-4 rounded-lg bg-gray-100 p-4 shadow-lg">
      <h1 className="text-2xl font-semibold">Counter: {count}</h1>

      {/* Button grid container */}
      <div className="grid grid-cols-2 gap-4 w-full">
        {/* Increment button */}
        <button
          className="rounded-lg bg-blue-500  px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={increment}
        >
          Increment
        </button>

        {/* Decrement button */}
        <button
          className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={decrement}
        >
          Decrement
        </button>

        {/* Increment Async button, spanning two columns */}
        <button
          className="col-span-2 rounded-lg bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={incrementAsync}
        >
          Increment Async
        </button>
      </div>
    </div>
  );
}

export default App;
