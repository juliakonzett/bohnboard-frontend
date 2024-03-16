import { React } from 'react';
import DoughnutChart from '../charts/DoughnutChart';
// import PieChart from '../charts/PieChart';

export default function CardGrid({ fillLevel, timeStamp }) {
  const percentageOfBeans = ((fillLevel / 6000) * 100).toFixed(2);
  const dateTime = new Date(timeStamp).toLocaleDateString("de", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div className="flex flex-col rounded-2xl border-gray-900 border px-8 pb-8">
        <h3 className="mt-10 text-lg font-semibold leading-6 text-center">
          Date & time
        </h3>
        <h2 className="mt-2 text-center">{dateTime} Uhr</h2>
        <h3 className="mt-10 text-lg font-semibold leading-6 text-center">
          Fill Level
        </h3>
        <h2 className="mt-2 text-center">{fillLevel}g</h2>
      </div>
      <div className="flex flex-col justify-between rounded-2xl border-gray-900 border px-8 pb-8">
        <DoughnutChart fillLevel={fillLevel} className="mt-10" />
        <h3 className="mt-10 text-lg font-semibold leading-6 text-center">
          Coffe Beans in {percentageOfBeans}%
        </h3>
      </div>
      {/* <div className="flex flex-col justify-between rounded-2xl border-gray-900 border px-8 pb-8">
        <PieChart />
        <h3 className="mt-10 text-lg font-semibold leading-6 text-center">
          Coffe Beans in %
        </h3>
      </div> */}
    </div>
  );
}