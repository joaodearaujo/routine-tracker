import './index.css'
import { Routine } from './features/routine/components/Routine';
import { ProgressRing } from './components/ProgressRing';
import { useRoutines } from './features/routine/hooks/useRoutines';
import { SetRoutineButton } from './components/SetRoutineButton';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEditMode } from './context/EditModeContext';
import { StandardButton } from './components/StandardButton';
import { cn } from './utils/cn';
import { AddButton } from './features/routine/components/AddButton';
import { CATEGORY_COLORS } from './constants/categoryColors';
import { Dot } from './components/Dot';
import { Star } from './components/Star';
import { Moon, SquarePen, Sun } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

const partOfTheDay = 'Afternoon';
const userName = 'Joao';
const date = 'Wednesday, June 10';

function App() {

  const { routines, isLoading } = useRoutines();
  const location = useLocation();
  const { isEditMode, toggleEditMode } = useEditMode();
  const { isDark, toggleTheme } = useTheme();

  if (isLoading) return <p className="text-sm text-muted">Loading...</p>;

  return (
          <div className={cn('w-full h-full relative flex flex-col gap-4')}>
            <div className='w-full flex gap-4'>
              <header className='w-full h-fit flex bg-surface border-2 border-line rounded-xl px-4 py-4 items-center'>
                <div className='flex-1 h-full flex flex-col gap-0.5 mr-4 text-left'>
                  {/* Greeting and Date */}
                  <h1 className='text-ink font-semibold text-xl font-secondary'>Good {partOfTheDay ?? '!'}, {userName ?? 'User'}</h1>
                  <p className='text-muted text-sm '>{date?? '-' }</p>
                </div>
                {/* Core tasks counter */}
                <ProgressRing />
              
              </header>
                {/* Settings Buttons */}
                <div className='w-fit flex flex-col gap-2 items-center justify-center bg-surface p-2 rounded-xl border-2 border-line'>
                  <StandardButton   
                    onClick={toggleTheme} 
                    Icon={isDark ? Moon : Sun} 
                    label='Toggle theme'
                    classNameButton={isDark ? 'hover:border-blue hover:shadow-blue/50' : 'hover:border-amber hover:shadow-amber/50'}
                    classNameIcon={isDark ? 'group-hover:text-blue group-hover:shadow-blue/50' : 'group-hover:text-amber group-hover:shadow-amber/50'}
                    />
                  <StandardButton   
                    onClick={toggleEditMode} 
                    Icon={SquarePen} 
                    label='Toggle edit mode'
                    classNameButton={`hover:border-edit hover:shadow-edit/50 ${isEditMode && 'border-edit'}`}
                    classNameIcon={`group-hover:text-edit hover:shadow-edit/50 ${isEditMode && 'text-edit'}`}
                  />
                </div>
            </div>
            
            {/* Edit Warner */}
             {isEditMode &&            
              <div className='w-full text-edit font-secondary text-[12px] font-bold shadow-aura shadow-edit/20 bg-edit/10 border-2 border-edit/20 rounded-lg transition-all duration-300'>
                <div className={cn(
                        'text-edit font-secondary text-[12px] font-bold p-2 bg-edit/10  rounded-lg transition-all duration-300',
                  )}
                >
                 Edit mode enabled! — Add or remove pages, groups, and tasks!
                </div>
              </div>
            }   
              
            {/* Pages selection */}
            <nav className='w-full h-full flex flex-col items-start justify-center shrink-0  gap-2 '>
              {isEditMode && <AddButton title="Add Page" />}
              <div className='w-full flex items-center gap-2'>
                <div className='w-full flex items-center gap-2'>
                  {routines.map(routine => <SetRoutineButton
                                              key={routine.id}
                                              title={routine.title}
                                              tasks={routine.groups.flatMap(group => group.tasks)}
                                              isActive={location.pathname === `/${routine?.title}`}/>)}
                </div>
              </div>
            </nav>

            {/* Page Content */}
            <div className='w-full  flex flex-col gap-4'>
              {/* Routes for each Page*/}
                <Routes>
                  {routines.map(routine => <Route 
                                              path={`/${routine?.title}`} 
                                              key={routine.id}
                                              element={<Routine routine={routine}/>} 
                                            />
                                          )}

                </Routes>
            </div>

            {/*Task Categories  */}
            <div className="text-muted text-xs flex gap-4 justify-center">
              <div className='flex gap-2'><Star/><span className='uppercase'>core</span></div>
                {Object.entries(CATEGORY_COLORS)
                  .map(([key, color]) => 
                  <div className='flex gap-2 items-center' key={key}>
                    <Dot color={color}/>
                    <span className='capitalize'>{key}</span>
                  </div>)}
            </div>

            {/* Warning */}
            <footer  className='w-full h-fit flex bg-surface border-2 border-line rounded-xl px-4 py-4 items-center'>
              <p className='text-sm text-muted text-justify'>
                <span className='text-ink font-semibold'>
                  Remember
                </span>
                : This is a menu, not an exam. Close the core items and let the rest build over time. One priority per cycle beats chasing everything at once.
              </p>
            </footer>
          </div>
      )
}

export default App;
