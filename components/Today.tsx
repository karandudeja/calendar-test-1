import  {format} from 'date-fns';

function Today() {
  
  const today = new Date();
  const dayName = format(today, 'EEEE');
  const date = today.getDate();
  const monthName = format(today, 'MMMM');
  const yearName = today.getFullYear();
    
  return (
    <div className="">
      <p className="">{dayName}</p>
      <p className="text-4xl font-bold">{date}</p>
      <p className="text-sm text-gray-500">{monthName}, {yearName}</p>
    </div>
  );
}
export default Today;