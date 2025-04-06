import React, { useState } from 'react';

const LoanApplicationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        loanAmount: '',
        loanTenure: '',
        employmentStatus: '',
        reasonForLoan: '',
        employmentAddress1: '',
        employmentAddress2: '',
        acceptTerms: false,
        creditDisclosure: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Form submission logic here
    };

    // Chart data points for the line graph
    const chartPoints = [
        { x: 0, y: 500 },
        { x: 1, y: 600 },
        { x: 2, y: 450 },
        { x: 3, y: 380 },
        { x: 4, y: 520 },
        { x: 5, y: 480 },
        { x: 6, y: 400 },
        { x: 7, y: 350 },
        { x: 8, y: 450 },
        { x: 9, y: 400 }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold">APPLY FOR A LOAN</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full name as it appears on bank account
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Full name as it appears on bank account"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Loan Amount */}
                    <div>
                        <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
                            How much do you need?
                        </label>
                        <input
                            type="text"
                            id="loanAmount"
                            name="loanAmount"
                            placeholder="How much do you need?"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                            value={formData.loanAmount}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Loan Tenure */}
                    <div>
                        <label htmlFor="loanTenure" className="block text-sm font-medium text-gray-700 mb-1">
                            Loan tenure (in months)
                        </label>
                        <input
                            type="text"
                            id="loanTenure"
                            name="loanTenure"
                            placeholder="Loan tenure (in months)"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                            value={formData.loanTenure}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Employment Status */}
                    <div>
                        <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700 mb-1">
                            Employment status
                        </label>
                        <input
                            type="text"
                            id="employmentStatus"
                            name="employmentStatus"
                            placeholder="Employment status"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                            value={formData.employmentStatus}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="text-gray-400 text-center my-2">...</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Reason for Loan */}
                    <div>
                        <label htmlFor="reasonForLoan" className="block text-sm font-medium text-gray-700 mb-1">
                            Reason for loan
                        </label>
                        <textarea
                            id="reasonForLoan"
                            name="reasonForLoan"
                            placeholder="Reason for loan"
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                            value={formData.reasonForLoan}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-6">
                        {/* Employment Address 1 */}
                        <div>
                            <label htmlFor="employmentAddress1" className="block text-sm font-medium text-gray-700 mb-1">
                                Employment address
                            </label>
                            <input
                                type="text"
                                id="employmentAddress1"
                                name="employmentAddress1"
                                placeholder="Employment address"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                value={formData.employmentAddress1}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Employment Address 2 */}
                        <div>
                            <label htmlFor="employmentAddress2" className="block text-sm font-medium text-gray-700 mb-1">
                                Employment address
                            </label>
                            <input
                                type="text"
                                id="employmentAddress2"
                                name="employmentAddress2"
                                placeholder="Employment address"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                value={formData.employmentAddress2}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Chart and Checkboxes Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-6">
                    {/* Chart */}
                    <div>
                        <div className="text-gray-400 text-sm mb-2">Chart</div>
                        <div className="bg-white border border-gray-200 p-4 rounded-md h-64 relative">
                            {/* Y-axis labels */}
                            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                                <span>1000</span>
                                <span>750</span>
                                <span>500</span>
                                <span>250</span>
                                <span>0</span>
                            </div>

                            {/* Chart area */}
                            <div className="ml-8 h-full relative">
                                {/* Horizontal grid lines */}
                                <div className="absolute w-full h-full">
                                    <div className="border-t border-gray-200 h-1/4"></div>
                                    <div className="border-t border-gray-200 h-1/4"></div>
                                    <div className="border-t border-gray-200 h-1/4"></div>
                                    <div className="border-t border-gray-200 h-1/4"></div>
                                </div>

                                {/* Chart line */}
                                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                                    <polyline
                                        points="0,100 10,80 20,110 30,120 40,100 50,105 60,115 70,125 80,110 90,115"
                                        fill="none"
                                        stroke="#65A30D"
                                        strokeWidth="2"
                                        className="transform scale-y-100"
                                    />
                                    <polyline
                                        points="0,100 10,80 20,110 30,120 40,100 50,105 60,115 70,125 80,110 90,115"
                                        fill="none"
                                        stroke="#FACC15"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                        className="transform scale-y-90 translate-y-10"
                                    />
                                </svg>

                                {/* X-axis labels */}
                                <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-500 transform translate-y-6">
                                    {Array.from({ length: 10 }).map((_, i) => (
                                        <span key={i}>{i}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="flex flex-col justify-end space-y-6">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="acceptTerms"
                                    name="acceptTerms"
                                    type="checkbox"
                                    className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                                    checked={formData.acceptTerms}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="acceptTerms" className="text-gray-700">
                                    I have read the important information and accept that by completing the application I will be bound by the terms
                                </label>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="creditDisclosure"
                                    name="creditDisclosure"
                                    type="checkbox"
                                    className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                                    checked={formData.creditDisclosure}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="creditDisclosure" className="text-gray-700">
                                    Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-green-800 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoanApplicationForm;