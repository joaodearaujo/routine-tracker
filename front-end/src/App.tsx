import '@/index.css'
import { RoutineRouter } from './features/routine/components/RoutineRouter';
import { CategoriesLegend } from '@/components/ui/CategoriesLegend';
import { RoutineNav } from '@/features/routine/components/RoutineNav';
import { Header } from './components/Header';

function App() {
  return (
        <>
          <div className='h-full min-h-0 flex flex-col gap-4'>
              <Header />
              <RoutineNav />
              <RoutineRouter />
          </div>
          <CategoriesLegend />
        </>
      )
}

export default App;
