import  {format} from 'date-fns';

function Today() {
  
  const today = new Date();
  const dayName = format(today, 'EEEE');
  const date = today.getDate();
  const monthName = format(today, 'MMMM');
  const yearName = today.getFullYear();
    
  return (
    <div className="">
      <p className="lg:text-lg text-zinc-800 dark:text-zinc-400">{dayName}</p>
      <p className="text-4xl font-bold lg:text-6xl text-zinc-800 dark:text-zinc-300">{date}</p>
      <p className="w-full text-sm text-zinc-500 dark:text-zinc-600 lg:text-lg">{monthName} {yearName}</p>
    </div>
  );
}
export default Today;