const express = require("express");
const userSignUpController = require("../controller/userSignUpController");
const userLoginController = require("../controller/userLoginController");
const userDetail = require("../controller/userDetails");
const authMiddleware = require("../middleware/authMiddleware");
// const { default: loanApplicationModel } = require("../models/loanApplicationModel");
const submitLoanApplication = require("../controller/loanApplicationController");
const { getLoanApplications } = require("../controller/userloancontroller");

const router = express.Router();

router.post("/signup", userSignUpController);
router.post("/login", userLoginController);
router.get("/userDetail", authMiddleware, userDetail);
router.post("/loanApplication", submitLoanApplication);
router.get("/applications", getLoanApplications);



module.exports = router;
