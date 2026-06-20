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


  return (
          <div className={cn('w-full h-full relative flex flex-col gap-4')}>
            <div className='w-full flex gap-4'>
            <header className='w-full rounded-xl pb-1 bg-surface2'>
               <div className='w-full h-fit flex bg-surface rounded-xl px-4 py-4 items-center'>
                <div className='flex-1 h-full flex flex-col gap-0.5 mr-4 text-left'>
                  {/* Greeting and Date */}
                  <h1 className='text-ink font-semibold text-xl font-secondary'>Good {partOfTheDay ?? '!'}, {userName ?? 'User'}</h1>
                  <p className='text-muted text-sm '>{date?? '-' }</p>
                </div>
                {/* Core tasks counter */}
                <ProgressRing />
              </div>
            </header>

                {/* Settings Buttons */}
                <div className='w-fit flex flex-col gap-2 items-center justify-center '>
                  <StandardButton   
                    onClick={toggleTheme} 
                    Icon={isDark ? Moon : Sun} 
                    label='Toggle theme'
                    classNameIcon={isDark ? 'text-purple group-hover:shadow-blue/50' : 'text-amber group-hover:shadow-amber/50'}
                    />
                  {/* Edit Mode */}
                  <StandardButton   
                    onClick={toggleEditMode} 
                    Icon={SquarePen} 
                    label='Toggle edit mode'
                    classNameWrapper={`${isEditMode && 'bg-edit pb-1'}`}
                    classNameButton={`${isEditMode && 'border-edit'}`}
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
            <div className='flex items-center w-full gap-2'>
              {isEditMode && <AddButton title="Page" />}
              {isEditMode && <AddButton title="Group" />}
            </div>
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
            <div className='rounded-xl bg-surface2 pb-1'>   
              <div className="text-muted text-xs flex gap-4 justify-evenly bg-surface rounded-xl p-2 border border-line">
              <div className='flex gap-1 items-center'><Star/><span className='uppercase'>core</span></div>
                {Object.entries(CATEGORY_COLORS)
                  .map(([key, color]) => 
                  <div className='flex gap-2 items-center' key={key}>
                    <Dot color={color}/>
                    <span className='capitalize'>{key}</span>
                  </div>)}
              </div>
            </div>

            {/* Warning */}
            <div className="rounded-xl pb-1 bg-surface2 ">
              <footer  className='w-full h-fit flex bg-surface border border-line rounded-xl px-4 py-4 items-center'>
                <p className='text-xs text-muted text-justify'>
                  <span className='text-ink font-semibold'>
                    Remember
                  </span>
                  : This is a menu, not an exam. Close the core items and let the rest build over time. One priority per cycle beats chasing everything at once.
                </p>
              </footer>
            </div>
          </div>
      )
}

export default App;
