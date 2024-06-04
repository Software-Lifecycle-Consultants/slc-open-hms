'use client';
import { Box } from "@mui/material";
import AreaChartPlot from "./AreaChartPlot";
import BarChartPlot from "./BarChartPlot";

const Charts = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6,padding: '80px' }}> {/* Outer Box */}
        <Box sx={{ backgroundColor: 'white', padding: '50px',borderRadius:5 }}> {/* White Box 1 */}
          <section className="flex my-4 px-4 gap-3">
            <AreaChartPlot />
          </section>
        </Box>
        <Box sx={{ backgroundColor: 'white', padding: '50px',borderRadius:5 }}> {/* White Box 2 */}
          <section className="flex my-4 px-4 gap-3">
            <BarChartPlot />
          </section>
        </Box>
      </Box>
    </>
  );
};

export default Charts;
