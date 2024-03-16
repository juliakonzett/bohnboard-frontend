import { React } from 'react';
import DoughnutChart from '../charts/DoughnutChart';
import RadarChart from '../charts/RadarChart';
import PieChart from '../charts/PieChart';

export default function CardGrid() {
  return (
    <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div className="flex flex-col justify-between rounded-2xl border-gray-900 border px-8 pb-8">
        <DoughnutChart className="mt-10" />
        <h3 className="mt-10 text-lg font-semibold leading-6 text-center">
          Coffe Beans in %
        </h3>
      </div>
      <div className="flex flex-col justify-between rounded-2xl border-gray-900 border px-8 pb-8">
        <RadarChart className="mt-10"/>
        <h3 className="mt-10 text-lg font-semibold leading-6 text-center">
          Coffe Beans in %
        </h3>
      </div>
      <div className="flex flex-col justify-between rounded-2xl border-gray-900 border px-8 pb-8">
        <PieChart/>
        <h3 className="mt-10 text-lg font-semibold leading-6 text-center">
          Coffe Beans in %
        </h3>
      </div>
    </div>
  );
}