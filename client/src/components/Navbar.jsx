import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ connectWallet, address, isConnected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleConnectWallet = async () => {
    await connectWallet(); // Connect wallet
    navigate("/display-campaign"); // Redirect to /display-campaign after connection
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CrowdFunding</span>
        </Link>

        {/* Right Side */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-2">
          {/* Before Connection: Connect Wallet */}
          {!isConnected ? (
            <button
              onClick={handleConnectWallet} // Use the new function here
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Connect Wallet
            </button>
          ) : (
            <>
              <Link
                to="/create-campaign"
                className="bg-green-500 px-6 py-2 rounded-lg text-white font-bold hover:bg-green-600"
              >
                Create Campaign
              </Link>
              <Link to="/profile" className="ml-4 text-gray-700 dark:text-white text-2xl">
                <FaUserCircle />
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
