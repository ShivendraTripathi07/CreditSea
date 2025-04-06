import React from 'react';

// Icons
const UserGroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>
);

const CashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
        <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
    </svg>
);

const ChartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
    </svg>
);

const PiggyBankIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.161 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
        <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.5c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 21v-3.192a3.353 3.353 0 011.875-3.019V6zM10.5 8.625a2.625 2.625 0 116.001-.001 2.625 2.625 0 01-6 .001zM10.875 15a2.625 2.625 0 104.5 0 2.625 2.625 0 00-4.5 0z" />
    </svg>
);

const BankIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
        <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
        <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
    </svg>
);

const DollarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a3.833 3.833 0 001.719-.756c.712-.566 1.112-1.35 1.112-2.178 0-.829-.4-1.612-1.113-2.178a3.833 3.833 0 00-1.718-.756V8.334c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
    </svg>
);

// Interfaces
interface StatCardProps {
    icon: React.ReactNode;
    value: string | number;
    label: string;
}

interface LoanRowProps {
    userImage: string;
    query: string;
    updated: string;
    customerName: string;
    customerId: string;
    date: string;
    time: string;
    status: 'pending' | 'approved';
}

// Components
const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => {
    return (
        <div className="flex bg-white shadow-sm">
            <div className="flex items-center justify-center bg-green-800 text-white p-4">
                <div className="w-6 h-6">{icon}</div>
            </div>
            <div className="flex flex-col justify-center p-4">
                <div className="text-xl font-bold">{value}</div>
                <div className="text-xs uppercase font-medium text-gray-500">{label}</div>
            </div>
        </div>
    );
};

const LoanRow: React.FC<LoanRowProps> = ({
    userImage,
    query,
    updated,
    customerName,
    customerId,
    date,
    time,
    status,
}) => {
    return (
        <tr className="border-b">
            <td className="py-4 flex items-center">
                <img src={userImage} alt="User" className="w-10 h-10 rounded-full mr-3" />
                <div>
                    <div className="font-medium">{query}</div>
                    <div className="text-xs text-gray-500">Updated {updated}</div>
                </div>
            </td>
            <td className="py-4">
                <div>{customerName}</div>
                <div className="text-xs text-gray-500">ID: {customerId}</div>
            </td>
            <td className="py-4">
                <div>{date}</div>
                <div className="text-xs text-gray-500">{time}</div>
            </td>
            <td className="py-4">
                {status === 'pending' ? (
                    <button className="bg-yellow-500 text-white rounded-full px-4 py-1 text-sm">Pending</button>
                ) : (
                    <button className="bg-green-500 text-white rounded-full px-4 py-1 text-sm">Approved</button>
                )}
            </td>
            <td className="py-4 text-center">
                <button className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </button>
            </td>
        </tr>
    );
};

const AdminDashboard: React.FC = () => {
    // Sample loan data
    const loans = [
        {
            userImage: "https://i.pravatar.cc/150?img=1",
            query: "Contact Email not Linked",
            updated: "1 day ago",
            customerName: "Tom Cruise",
            customerId: "34.25.65.2610",
            date: "June 08, 2021",
            time: "8:30 PM",
            status: "pending" as const,
        },
        {
            userImage: "https://i.pravatar.cc/150?img=5",
            query: "Adding Images to Featured Posts",
            updated: "1 day ago",
            customerName: "Matt Damon",
            customerId: "34.25.65.2610",
            date: "June 09, 2021",
            time: "8:00 AM",
            status: "pending" as const,
        },
        {
            userImage: "https://i.pravatar.cc/150?img=8",
            query: "When will I be charged this month?",
            updated: "1 day ago",
            customerName: "Robert Downey",
            customerId: "34.25.65.2610",
            date: "June 08, 2021",
            time: "7:30 PM",
            status: "pending" as const,
        },
        {
            userImage: "https://i.pravatar.cc/150?img=12",
            query: "Payment not going through",
            updated: "2 days ago",
            customerName: "Christian Bale",
            customerId: "34.25.65.2610",
            date: "June 08, 2021",
            time: "5:00 PM",
            status: "pending" as const,
        },
        {
            userImage: "https://i.pravatar.cc/150?img=15",
            query: "Unable to add replies",
            updated: "2 days ago",
            customerName: "Henry Cavil",
            customerId: "34.25.65.2610",
            date: "June 08, 2021",
            time: "4:00 PM",
            status: "approved" as const,
        },
        {
            userImage: "https://i.pravatar.cc/150?img=20",
            query: "Downtime since last week",
            updated: "3 days ago",
            customerName: "Chris Evans",
            customerId: "34.25.65.2610",
            date: "June 08, 2021",
            time: "2:00 PM",
            status: "approved" as const,
        },
        {
            userImage: "https://i.pravatar.cc/150?img=23",
            query: "Referral Bonus",
            updated: "4 days ago",
            customerName: "Sam Smith",
            customerId: "34.25.65.2610",
            date: "June 08, 2021",
            time: "11:30 AM",
            status: "pending" as const,
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-2xl font-bold text-green-900 mb-6">Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatCard icon={<UserGroupIcon />} value="200" label="ACTIVE USERS" />
                <StatCard icon={<UserIcon />} value="100" label="BORROWERS" />
                <StatCard icon={<CashIcon />} value="550,000" label="CASH DISBURSED" />
                <StatCard icon={<ChartIcon />} value="1,000,000" label="CASH RECEIVED" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatCard icon={<PiggyBankIcon />} value="450,000" label="SAVINGS" />
                <StatCard icon={<UserIcon />} value="30" label="REPAID LOANS" />
                <StatCard icon={<BankIcon />} value="10" label="OTHER ACCOUNTS" />
                <StatCard icon={<DollarIcon />} value="50" label="LOANS" />
            </div>

            {/* Recent Loans */}
            <div className="bg-white shadow-sm p-6 rounded">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold">Recent Loans</h2>
                    <div className="flex gap-4">
                        <button className="flex items-center text-gray-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                            </svg>
                            Sort
                        </button>
                        <button className="flex items-center text-gray-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Filter
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-gray-500 border-b">
                                <th className="pb-3 font-normal">User details</th>
                                <th className="pb-3 font-normal">Customer name</th>
                                <th className="pb-3 font-normal">Date</th>
                                <th className="pb-3 font-normal">Action</th>
                                <th className="pb-3 font-normal"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {loans.map((loan, index) => (
                                <LoanRow key={index} {...loan} />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
                    <div>
                        Rows per page:
                        <select className="ml-2 border-none bg-transparent">
                            <option>7</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                    </div>
                    <div>1-7 of 1240</div>
                    <div className="flex items-center gap-2">
                        <button className="p-1 rounded-full hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button className="p-1 rounded-full hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;