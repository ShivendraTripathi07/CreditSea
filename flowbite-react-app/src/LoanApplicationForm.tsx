import { useState } from "react";
import Api from "./common";

interface FormData {
    fullName: string;
    loanAmount: number;
    loanTenure: number;
    employmentStatus: string;
    reasonForLoan: string;
    employmentAddress: string;
    acceptTerms: boolean;
    creditDisclosure: boolean;
}

const LoanApplicationForm = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        loanAmount: 0,
        loanTenure: 0,
        employmentStatus: "",
        reasonForLoan: "",
        employmentAddress: "",
        acceptTerms: false,
        creditDisclosure: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : type === "number" ? +value : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const {
            fullName,
            loanAmount,
            loanTenure,
            employmentStatus,
            reasonForLoan,
            employmentAddress,
            acceptTerms,
            creditDisclosure,
        } = formData;

        if (
            !fullName ||
            loanAmount <= 0 ||
            loanTenure <= 0 ||
            !employmentStatus ||
            !reasonForLoan ||
            !employmentAddress ||
            !acceptTerms ||
            !creditDisclosure
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            console.log("Form data being submitted:", formData);
            const response = await fetch(Api.loanForm.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // Include cookies if needed
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Submission failed");
            }

            const data = await response.json();
            alert("Application submitted successfully!");
            console.log(data);
        } catch (err: any) {
            console.error("Submission error:", err.message);
            alert(err.message || "Submission failed.");
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Loan Application Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium mb-1">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full border p-2 rounded"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium mb-1">Loan Amount</label>
                        <input
                            type="number"
                            name="loanAmount"
                            value={formData.loanAmount}
                            onChange={handleChange}
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Loan Tenure (in months)</label>
                        <input
                            type="number"
                            name="loanTenure"
                            value={formData.loanTenure}
                            onChange={handleChange}
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>
                </div>

                <div>
                    <label className="block font-medium mb-1">Employment Status</label>
                    <select
                        name="employmentStatus"
                        value={formData.employmentStatus}
                        onChange={handleChange}
                        required
                        className="w-full border p-2 rounded"
                    >
                        <option value="">-- Select --</option>
                        <option value="Employed">Employed</option>
                        <option value="Self-Employed">Self-Employed</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Student">Student</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium mb-1">Reason for Loan</label>
                    <textarea
                        name="reasonForLoan"
                        value={formData.reasonForLoan}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full border p-2 rounded"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Employment Address</label>
                    <textarea
                        name="employmentAddress"
                        value={formData.employmentAddress}
                        onChange={handleChange}
                        required
                        rows={2}
                        className="w-full border p-2 rounded"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        required
                        className="h-4 w-4"
                    />
                    <label className="text-sm">I accept the Terms and Conditions</label>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="creditDisclosure"
                        checked={formData.creditDisclosure}
                        onChange={handleChange}
                        required
                        className="h-4 w-4"
                    />
                    <label className="text-sm">I authorize credit history disclosure</label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default LoanApplicationForm;