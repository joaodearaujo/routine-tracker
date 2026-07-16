import { useState, useEffect } from 'react';
import '@/index.css'
import { CategoriesLegend } from '@/components/ui/CategoriesLegend';
import { Header } from './components/Header';
import { DefaultButton } from './components/ui/Buttons/DefaultButton';
import { LogOut } from 'lucide-react';
import { api } from './features/routine/api/api';
import { LoginForm } from './features/auth/components/LoginForm';
import { RoutineNav } from './features/routine/components/RoutineNav';
import { RoutineRouter } from './features/routine/components/RoutineRouter';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await api.get<any>('v1/user/me');
        localStorage.setItem('user', JSON.stringify(user));
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setIsChecking(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await api.post('v1/auth/logout', {});
    } finally {
      localStorage.removeItem('user');
      setIsAuthenticated(false);
    }
  };

  if (isChecking) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <div className='h-full w-full flex items-center justify-center border border-line rounded-xl'>
        <LoginForm onLoginSuccess={() => setIsAuthenticated(true)} />
      </div>
    );
  }

  return (
    <>
      <div className='flex-1 w-full min-h-0 flex flex-col gap-4'>
          <Header />
          <RoutineNav />
          <RoutineRouter />
      </div>
      <div className='w-full flex gap-4'>
        <CategoriesLegend />
        <DefaultButton
          onClick={handleLogout}
          Icon={LogOut}
          label="Logout"
          classNameIcon="group-hover:text-red-400 "
      />
      </div>
    </>


    
  )
}

export default App;