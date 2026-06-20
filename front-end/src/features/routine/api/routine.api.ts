const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const getRoutines = async () => {
  const res = await fetch(`${BASE_URL}/v1/page`);
  if (!res.ok) throw new Error('Failed to fetch routines');
  return res.json();
};

export const toggleCompleted = async () => {
  const res = await fetch(`${BASE_URL}/v1/task`);
  if (!res.ok) throw new Error('Failed to fetch routines');
};

export const createRoutine = async (title: string) => {
  const res = await fetch(`${BASE_URL}/v1/page`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }), 
  });
  if (!res.ok) throw new Error('Failed to create routine');
  return res.json();
};