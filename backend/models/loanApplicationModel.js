const mongoose = require("mongoose");

const loanApplicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      //   required: true,
    },
    loanAmount: {
      type: Number,
      //   required: true,
    },
    loanTenure: {
      type: Number, // in months
      //   required: true,
    },
    employmentStatus: {
      type: String,
      enum: ["Employed", "Self-employed", "Unemployed", "Student", "Other"],
      //   required: true,
    },
    reasonForLoan: {
      type: String,
      //   required: true,
    },
    employmentAddress: {
      type: String,
      //   required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LoanApplication", loanApplicationSchema);
