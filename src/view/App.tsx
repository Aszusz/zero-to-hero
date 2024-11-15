import { AC } from '@/core/actions';
import { useAppDispatch } from '@/shell/store';
import { useCount } from '@/shell/storeHooks';
import { Button } from '@/view/components/shadcn/button';

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
      <div className="grid w-full grid-cols-2 gap-4">
        <Button
          size={'lg'}
          variant={'default'}
          className="text-md font-semibold"
          onClick={increment}
        >
          Increment
        </Button>
        <Button
          size={'lg'}
          variant={'default'}
          className="text-md font-semibold"
          onClick={decrement}
        >
          Decrement
        </Button>
        <Button
          size={'lg'}
          variant={'default'}
          className="text-md col-span-2 font-semibold"
          onClick={incrementAsync}
        >
          Increment Async
        </Button>
      </div>
    </div>
  );
}

export default App;
