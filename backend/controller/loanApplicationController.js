const LoanApplication = require("./../models/loanApplicationModel");

// @desc    Submit a new loan application
// @route   POST /api/loan-application
// @access  Public or Protected (based on your app)
const submitLoanApplication = async (req, res) => {
  try {
    const {
      fullName,
      loanAmount,
      loanTenure,
      employmentStatus,
      reasonForLoan,
      employmentAddress,
    } = req.body;

    // Basic validation
    if (
      !fullName ||
      !loanAmount ||
      !loanTenure ||
      !employmentStatus ||
      !reasonForLoan ||
      !employmentAddress
    ) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields" });
    }

    // Create a new loan application
    const loanApp = await LoanApplication.create({
      fullName,
      loanAmount,
      loanTenure,
      employmentStatus, // Ensure this matches the enum in your schema
      reasonForLoan,
      employmentAddress,
    });

    res.status(201).json({
      message: "Loan application submitted successfully",
      application: loanApp,
    });
  } catch (error) {
    console.error("Loan application error:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = submitLoanApplication;
