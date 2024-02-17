const CheckInOut = require("../models/CheckInOut");
const { validateCheckInOutData } = require("../services/validationService");

async function checkIn(req, res) {
  try {
    const { instructorId, checkInTime } = req.body;

    const checktime = new Date(checkInTime)
    // Validate check-in data
    validateCheckInOutData({ instructorId, checktime });

    // Save check-in data to the database
    const checkInEntry = new CheckInOut({
      instructorId,
      checkInTime,
    });
    await checkInEntry.save();

    res.status(200).json({ message: "Check-in successful" });
  } catch (error) {
    console.error("Error occurred during check-in:", error);
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  checkIn,
};
