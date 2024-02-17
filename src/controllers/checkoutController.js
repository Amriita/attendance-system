const CheckInOut = require("../models/CheckInOut");

async function checkOut(req, res) {
  try {
    const { instructorId, checkOutTime } = req.body;

    // Validate instructorId and checkOutTime
    if (!instructorId || !checkOutTime) {
      return res
        .status(400)
        .json({ error: "Missing instructorId or checkOutTime" });
    }

    // Find the latest check-in entry for the instructor
    const latestCheckIn = await CheckInOut.findOne({ instructorId }).sort({
      checkInTime: -1,
    });

    // Check if there's a check-in entry for the instructor
    if (!latestCheckIn) {
      return res
        .status(400)
        .json({ error: "No check-in entry found for the instructor" });
    }

    // Update the check-out time for the latest check-in entry
    latestCheckIn.checkOutTime = checkOutTime;
    await latestCheckIn.save();

    res.status(200).json({ message: "Check-out successful" });
  } catch (error) {
    console.error("Error occurred during check-out:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  checkOut,
};
