import React, { useState } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    joinDate: string;
    avatar: string;
}

interface LoanApplication {
    id: string;
    user: User;
    message: string;
    timestamp: string;
    date: string;
    time: string;
    status: 'PENDING' | 'VERIFIED';
}

const LoanDashboard: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(7);
    const totalApplications = 1240;

    const summaryCards = [
        { icon: "💵", title: "LOANS", value: "50", bgColor: "bg-green-800" },
        { icon: "👤", title: "BORROWERS", value: "100", bgColor: "bg-green-800" },
        { icon: "💰", title: "CASH DISBURSED", value: "550,000", bgColor: "bg-green-800" },
        { icon: "🐖", title: "SAVINGS", value: "450,000", bgColor: "bg-green-800" },
        { icon: "👥", title: "REPAID LOANS", value: "30", bgColor: "bg-green-800" },
        { icon: "📈", title: "CASH RECEIVED", value: "1,000,000", bgColor: "bg-green-800" },
    ];

    const applications: LoanApplication[] = [
        {
            id: "1",
            user: {
                id: "u1",
                name: "Tom Cruise",
                email: "tom@example.com",
                joinDate: "04/05/2019",
                avatar: "/api/placeholder/35/35",
            },
            message: "Contact Email not Linked",
            timestamp: "Updated 1 day ago",
            date: "June 09, 2021",
            time: "6:30 PM",
            status: "PENDING",
        },
        {
            id: "2",
            user: {
                id: "u2",
                name: "Matt Damon",
                email: "matt@example.com",
                joinDate: "04/05/2019",
                avatar: "/api/placeholder/35/35",
            },
            message: "Adding Images to Featured Posts",
            timestamp: "Updated 1 day ago",
            date: "June 09, 2021",
            time: "6:00 PM",
            status: "PENDING",
        },
        {
            id: "3",
            user: {
                id: "u3",
                name: "Robert Downey",
                email: "robert@example.com",
                joinDate: "04/05/2019",
                avatar: "/api/placeholder/35/35",
            },
            message: "When will I be charged this month?",
            timestamp: "Updated 1 day ago",
            date: "June 08, 2021",
            time: "6:00 PM",
            status: "PENDING",
        },
        {
            id: "4",
            user: {
                id: "u4",
                name: "Christian Bale",
                email: "christian@example.com",
                joinDate: "04/05/2019",
                avatar: "/api/placeholder/35/35",
            },
            message: "Payment not going through",
            timestamp: "Updated 2 days ago",
            date: "June 08, 2021",
            time: "6:00 PM",
            status: "VERIFIED",
        },
        {
            id: "5",
            user: {
                id: "u5",
                name: "Henry Cavil",
                email: "henry@example.com",
                joinDate: "04/05/2019",
                avatar: "/api/placeholder/35/35",
            },
            message: "Unable to add replies",
            timestamp: "Updated 2 days ago",
            date: "June 08, 2021",
            time: "6:00 PM",
            status: "VERIFIED",
        },
        {
            id: "6",
            user: {
                id: "u6",
                name: "Chris Evans",
                email: "chris@example.com",
                joinDate: "04/05/2019",
                avatar: "/api/placeholder/35/35",
            },
            message: "Downtime since last week",
            timestamp: "Updated 3 days ago",
            date: "June 08, 2021",
            time: "6:00 PM",
            status: "VERIFIED",
        },
        {
            id: "7",
            user: {
                id: "u7",
                name: "Sam Smith",
                email: "sam@example.com",
                joinDate: "04/05/2019",
                avatar: "/api/placeholder/35/35",
            },
            message: "Referral Bonus",
            timestamp: "Updated 4 days ago",
            date: "June 08, 2021",
            time: "6:00 PM",
            status: "PENDING",
        },
    ];

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        const maxPage = Math.ceil(totalApplications / rowsPerPage);
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(parseInt(event.target.value));
        setCurrentPage(1);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb Navigation */}
                <div className="flex items-center text-green-800 font-medium mb-4">
                    <span>Dashboard</span>
                    <span className="mx-2">&gt;</span>
                    <span className="text-gray-700">Loans</span>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {summaryCards.map((card, index) => (
                        <div key={index} className="bg-white rounded shadow flex overflow-hidden">
                            <div className={`${card.bgColor} text-white p-4 flex items-center justify-center text-2xl w-16`}>
                                <span>{card.icon}</span>
                            </div>
                            <div className="p-4 flex flex-col justify-center flex-grow">
                                <div className="text-2xl font-bold">{card.value}</div>
                                <div className="text-xs uppercase tracking-wider text-gray-500">{card.title}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Applications Table */}
                <div className="bg-white rounded shadow mb-6">
                    <div className="p-4 flex justify-between items-center border-b">
                        <h2 className="text-lg font-semibold">Applied Loans</h2>
                        <div className="flex space-x-2">
                            <button className="text-gray-500 px-3 py-1 border rounded flex items-center">
                                <span className="mr-1">Sort</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </button>
                            <button className="text-gray-500 px-3 py-1 border rounded flex items-center">
                                <span className="mr-1">Filter</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-500 text-sm border-b">
                                    <th className="px-4 py-3 w-1/3">User Recent Activity</th>
                                    <th className="px-4 py-3">Customer name</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Action</th>
                                    <th className="px-4 py-3"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {applications.map((application) => (
                                    <tr key={application.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-4">
                                            <div className="flex items-center">
                                                <img
                                                    src={application.user.avatar}
                                                    alt={application.user.name}
                                                    className="w-8 h-8 rounded-full mr-3"
                                                />
                                                <div>
                                                    <div className="font-small text-black">{application.message}</div>
                                                    <div className="text-sm text-gray-500">{application.timestamp}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="font-small text-black">{application.user.name}</div>
                                            <div className="text-sm text-gray-500">ID: {application.user.joinDate}</div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div>{application.date}</div>
                                            <div className="text-sm text-gray-500">{application.time}</div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-white text-xs uppercase ${application.status === "PENDING" ? "bg-yellow-400" : "bg-green-500"
                                                    }`}
                                            >
                                                {application.status === "PENDING" ? "Pending" : "Verified"}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <button className="text-gray-400 hover:text-gray-600">
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

                    {/* Pagination */}
                    <div className="px-4 py-3 border-t flex justify-between items-center text-sm">
                        <div className="flex items-center">
                            <span className="mr-2">Rows per page:</span>
                            <select
                                value={rowsPerPage}
                                onChange={handleRowsPerPageChange}
                                className="border rounded px-2 py-1"
                            >
                                <option value="5">5</option>
                                <option value="7">7</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                            </select>
                        </div>
                        <div className="text-gray-500">
                            1-{rowsPerPage} of {totalApplications}
                        </div>
                        <div className="flex space-x-1">
                            <button
                                onClick={handlePrevPage}
                                className="w-8 h-8 flex items-center justify-center rounded border hover:bg-gray-50"
                                disabled={currentPage === 1}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNextPage}
                                className="w-8 h-8 flex items-center justify-center rounded border hover:bg-gray-50"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanDashboard;