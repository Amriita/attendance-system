function validateCheckInOutData(data) {

  // Validation logic for check-in/out data
  if (!data || typeof data !== "object") {
    throw new Error("Invalid data format");
  }

  const { instructorId, checktime, OutTime } = data;

  if (!instructorId || typeof instructorId !== "string") {
    throw new Error("Invalid instructorId");
  }

  if (
    !checktime ||
    !(checktime instanceof Date) ||
    isNaN(checktime.getTime())
  ) {
    throw new Error("Invalid checkInTime");
  }

  if (
    OutTime &&
    (!(OutTime instanceof Date) || isNaN(OutTime.getTime()))
  ) {
    throw new Error("Invalid checkOutTime");
  }
}

module.exports = {
  validateCheckInOutData,
};
