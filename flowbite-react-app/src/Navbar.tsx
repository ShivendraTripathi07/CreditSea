import React, { useState, useContext } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import AppContext from './context'; // import context

const IconBtn: React.FC<{ icon: string }> = ({ icon }) => (
    <button className="text-gray-500 hover:text-green-700 text-lg">{icon}</button>
);

interface NavItemProps {
    icon: string;
    label: string;
    active?: boolean;
    className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, className = '' }) => {
    return (
        <a
            href="#"
            className={`flex items-center px-3 py-2 text-sm font-semibold ${active
                ? 'text-green-700 border-b-2 border-green-700'
                : 'text-gray-600 hover:text-green-700'
                } ${className}`}
        >
            <span className="mr-2">{icon}</span>
            <span>{label}</span>
        </a>
    );
};

const UserNavbar: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user, setUser } = useContext(AppContext); // 👈 get user from context
    const navigate = useNavigate();

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleLoginClick = () => {
        setDropdownOpen(false);
        navigate('/login');
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null); // Clear user from context
        setDropdownOpen(false);
        navigate('/login');
    };

    return (
        <>
            {/* Navbar */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200">
                <div className="flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto">
                    <div className="flex items-center space-x-4">
                        <span className="text-green-800 font-bold text-lg">CREDIT APP</span>

                        {/* Hamburger Icon */}
                        <button onClick={toggleSidebar} className="text-2xl text-gray-700 hover:text-green-700 md:hidden">
                            <HiOutlineMenu />
                        </button>

                        {/* Nav Items (Desktop only) */}
                        <div className="hidden md:flex items-center space-x-4 ml-4">
                            <NavItem active icon="🏠" label="Home" />
                            <NavItem icon="↔️" label="Payments" />
                            <NavItem icon="📊" label="Budget" />
                            <NavItem icon="💳" label="Card" />
                        </div>
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4 relative">
                        <IconBtn icon="🔔" />
                        <IconBtn icon="💬" />
                        <IconBtn icon="⚙️" />

                        {/* User Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="text-gray-700 hover:text-green-700 text-xl"
                            >
                                👤
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    {user ? (
                                        <>
                                            <div className="px-4 py-2 text-sm text-gray-700 border-b">
                                                👤 {user.fullName}
                                            </div>
                                            <div className="px-4 py-2 text-sm text-gray-700 border-b">
                                                🛡️ {user.role}
                                            </div>
                                            <div
                                                onClick={handleLogout}
                                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                            >
                                                🚪 Logout
                                            </div>
                                        </>
                                    ) : (
                                        <div
                                            onClick={handleLoginClick}
                                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        >
                                            🔐 Login
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-emerald-950 dark:bg-gray-800 shadow-md z-40 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex flex-col px-4 py-16 space-y-2">
                    <NavItem icon="🏠" label="Home" active className="text-white font-semibold" />
                    <NavItem icon="↔️" label="Payments" className="text-white font-semibold" />
                    <NavItem icon="📊" label="Budget" className="text-white font-semibold" />
                    <NavItem icon="💳" label="Card" className="text-white font-semibold" />
                </div>
            </div>

            {/* Backdrop */}
            {(sidebarOpen || dropdownOpen) && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30"
                    onClick={() => {
                        setSidebarOpen(false);
                        setDropdownOpen(false);
                    }}
                ></div>
            )}
        </>
    );
};

export default UserNavbar;
