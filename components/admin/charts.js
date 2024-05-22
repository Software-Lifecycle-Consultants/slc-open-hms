'use client'
import AreaChartPlot from "./AreaChartPlot";
import BarChartPlot from "./BarChartPlot";

const Charts = () => {
  return (
    <>

      <section className="flex my-4 px-4 gap-3">
        <AreaChartPlot/>
      </section>

      <section className="flex my-4 px-4 gap-3">
        <BarChartPlot/>
      </section>
    </>
  );
};

export default Charts;
