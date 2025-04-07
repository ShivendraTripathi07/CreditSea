const LoanApplication = require("./../models/loanApplicationModel");

const getLoanApplications = async (req, res) => {
  try {
    const applications = await LoanApplication.find().sort({ createdAt: -1 }); // Latest first
    res.status(200).json(applications);
  } catch (err) {
    console.error("Error fetching loan applications:", err.message);
    res.status(500).json({ message: "Failed to fetch loan applications." });
  }
};

module.exports = { getLoanApplications };
