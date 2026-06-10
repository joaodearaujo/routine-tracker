import './index.css'
import SwitchLanguageButton from './components/ui/SwitchLanguageButton';

const partOfTheDay = 'Afternoon';
const userName = 'Joao';
const date = 'Wednesday, June 10';
const streakDays = 0;

function App() {

  return (
    <>
      <div className='w-full h-full flex flex-col gap-4'>
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
        <div className='w-full text-sm text-muted'>Discipline Is Freedom — Choose The Discomfort That Builds, Not The One That Destroys.</div>

        {/* Pages selection */}
        <nav>

        </nav>
      </div>
    </>
  )
}

export default App;
