const CheckInOut = require("../models/CheckInOut");

async function generateMonthlyReport(req, res) {
  try {
    const { year, month } = req.params;

    // Validate year and month
    if (!year || !month) {
      return res.status(400).json({ error: "Year and month must be provided" });
    }

    // Parse year and month to integers
    const yearInt = parseInt(year);
    const monthInt = parseInt(month);

    // Validate parsed integers
    if (
      isNaN(yearInt) ||
      isNaN(monthInt) ||
      yearInt < 0 ||
      monthInt < 1 ||
      monthInt > 12
    ) {
      return res.status(400).json({ error: "Invalid year or month" });
    }

    // Calculate start and end date of the month
    const startDate = new Date(yearInt, monthInt - 1, 1);
    const endDate = new Date(yearInt, monthInt, 0);

    // Get check-in/out entries within the specified month
    const monthlyEntries = await CheckInOut.find({
      checkInTime: { $gte: startDate, $lt: endDate },
    });

    // Calculate total checked-in time for each instructor
    const instructorTotalTimes = {};
    monthlyEntries.forEach((entry) => {
      const { instructorId, checkInTime, checkOutTime } = entry;
      const duration = checkOutTime.getTime() - checkInTime.getTime();

      if (!instructorTotalTimes[instructorId]) {
        instructorTotalTimes[instructorId] = 0;
      }
      instructorTotalTimes[instructorId] += duration;
    });

    res.status(200).json({ monthlyReport: instructorTotalTimes });
  } catch (error) {
    console.error("Error occurred during report generation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  generateMonthlyReport,
};
