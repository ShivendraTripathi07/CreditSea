import React, { useState, useEffect } from 'react';
import LoanApplicationForm from './LoanApplicationForm';

interface LoanApplication {
    _id: string;
    fullName: string;
    loanAmount: number;
    loanTenure: number;
    employmentStatus: string;
    reasonForLoan: string;
    employmentAddress: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    status?: string; // Added this field as it will be set programmatically
}

const UserDashboard: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loanApplications, setLoanApplications] = useState<LoanApplication[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const openForm = () => setIsModalOpen(true);
    const closeForm = () => setIsModalOpen(false);

    useEffect(() => {
        const fetchLoanApplications = async () => {
            try {
                const response = await fetch('http://localhost:8000/user/applications');
                if (!response.ok) {
                    throw new Error('Failed to fetch loan applications');
                }
                const data = await response.json();

                // Adding status field to each application (for demonstration)
                // In a real app, this would likely come from the backend
                const statusOptions = ['Pending', 'Verified', 'Rejected', 'Approved'];
                const processedData = data.map((app: LoanApplication, index: number) => ({
                    ...app,
                    status: statusOptions[index % statusOptions.length]
                }));

                setLoanApplications(processedData);
            } catch (err) {
                setError('Error fetching loan applications');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLoanApplications();
    }, []);

    const [searchTerm, setSearchTerm] = useState('');

    const filteredApplications = loanApplications.filter(app =>
        app.reasonForLoan.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Function to get status badge styles
    const getStatusStyles = (status: string) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'bg-yellow-500 text-white';
            case 'verified':
                return 'bg-green-500 text-white';
            case 'rejected':
                return 'bg-red-600 text-white';
            case 'approved':
                return 'bg-blue-700 text-white';
            default:
                return 'bg-gray-200 text-gray-800';
        }
    };

    // Format date function
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    // Format time function
    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            {/* Balance and Loan Section */}
            <div className="mb-4 relative">
                <div className="flex flex-col left-0 pl-25 items-start justify-center py-6">
                    <div className="bg-green-600 p-3 rounded-lg mb-2">
                        {/* Money Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div className="text-xs text-gray-500 uppercase mb-1">DEFICIT</div>
                    <div className="text-4xl font-bold flex items-center">
                        <span className="text-green-600 text-sm mr-1">₦</span>
                        0.0
                    </div>
                </div>


                {/* Get A Loan Button */}
                <div className="absolute top-0 right-0 mt-10 mr-4">
                    <button
                        onClick={openForm}
                        className="px-6 py-3 bg-green-800 text-white rounded-md hover:bg-green-700"
                    >
                        Get A Loan
                    </button>


                </div>
            </div>

            {/* Quick Action Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-4 flex">
                <button className="flex-1 py-3 text-center hover:bg-gray-50 focus:outline-none border-b-2 border-green-600 font-medium">
                    Borrow Cash
                </button>
                <button className="flex-1 py-3 text-center hover:bg-gray-50 focus:outline-none text-gray-600">
                    Transact
                </button>
                <button className="flex-1 py-3 text-center hover:bg-gray-50 focus:outline-none text-gray-600">
                    Deposit Cash
                </button>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {/* Search Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for loans"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />

                </div>
            </div>
            {isModalOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                        onClick={closeForm}
                    ></div>

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto w-full max-w-5xl relative">
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
                                onClick={closeForm}
                            >
                                &times;
                            </button>

                            <LoanApplicationForm />
                        </div>
                    </div>
                </>
            )}

            {/* Applied Loans Section */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Applied Loans</h2>
                    <div className="flex space-x-2">
                        <button className="flex items-center px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">
                            {/* Sort Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                            </svg>
                            <span>Sort</span>
                        </button>
                        <button className="flex items-center px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">
                            {/* Filter Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            <span>Filter</span>
                        </button>
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                    </div>
                ) : error ? (
                    <div className="text-center py-8 text-red-500">{error}</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Applicant
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date Applied
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredApplications.map((application) => (
                                    <tr key={application._id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                                                    <span className="text-xs text-gray-600">
                                                        {application.fullName.split(' ').map(name => name[0]).join('')}
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="font-medium text-gray-900">{application.fullName}</div>
                                                    <div className="text-sm text-gray-500">{application.employmentStatus}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="font-medium text-gray-900">{application.loanAmount.toLocaleString()}.00</div>
                                            <div className="text-sm text-gray-500">{application.reasonForLoan}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="font-medium text-gray-900">{formatDate(application.createdAt)}</div>
                                            <div className="text-sm text-gray-500">{formatTime(application.createdAt)}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyles(application.status || 'Pending')}`}>
                                                {(application.status || 'PENDING').toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-gray-500 hover:text-gray-700">
                                                {/* Ellipsis Icon */}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserDashboard;