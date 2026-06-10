import './index.css'
import SwitchLanguageButton from './components/ui/SwitchLanguageButton';
import PageButton from './components/ui/PageButton';
import { pages } from './constants/pages';

const partOfTheDay = 'Afternoon';
const userName = 'Joao';
const date = 'Wednesday, June 10';
const streakDays = 0;

function App() {

  return (
    <>
      <div className='w-full h-full flex flex-col gap-4 items-center'>
        <header className='w-full h-fit flex bg-surface border border-px border-line rounded-xl px-4 py-4 items-center'>
          <div className='flex-1 h-full flex flex-col gap-2 mr-4'>
            <h1 className='text-ink font-semibold mb- text-xl w-fit'>Good {partOfTheDay ?? '!'}, {userName ?? 'User'}</h1>
            <p className='text-muted text-sm w-fit'>{date?? '-' }</p>
            <div className='w-fit flex gap-2 bg-amber/10 border border-px border-amber/22 rounded-full px-2 py-1'>
              <p className='text-amber text-sm'>Streak: <span className='font-semibold'>{streakDays ?? '-'} </span>Days</p>
            </div>
          </div>

          {/* Core Habits Counting */}
          <div className='size-22 rounded-full'></div>
        </header>

        {/* Language Selector */}
        <div className='w-full flex gap-2 items-center justify-end '>
          <SwitchLanguageButton language='EN' isSelected />
          <SwitchLanguageButton language='PT' />
        </div>

        {/* Motivational Phrase */}
        <div className='w-[95%] text-sm text-muted'>Discipline is freedom — choose the discomfort that builds, not the one that destroys.</div>

        {/* Pages selection */}
        <nav className='w-full flex gap-2'>
        {pages.map((page) => <PageButton name={page.name} itemsDone={page.itemsDone} totalItems={page.totalItems} /> )}
        </nav>

        {/* Page Content */}
        <div></div>
        
        {/* Reminder */}
        <footer className='w-full h-fit flex bg-surface border border-px border-line rounded-xl px-4 py-4 items-center'>
          <p className='text-sm text-muted text-justify'><span className='text-ink font-semibold'>Remember</span>: This is a menu, not an exam. Close the core items and let the rest build over time. One priority per cycle beats chasing everything at once.
          </p>
        </footer>
      </div>
    </>
  )
}

export default App;
