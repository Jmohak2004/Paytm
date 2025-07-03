import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 shadow-md bg-white rounded-md m-4">
        <h1 className="text-xl font-semibold">PayTM App</h1>
        <div className="flex items-center space-x-4">
          <p className="text-gray-600">Hello</p>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-medium text-gray-700">
            U
          </div>
        </div>
      </div>

      {/* Balance */}
      <div className="px-6">
        <h2 className="text-lg font-medium">
          Your balance <span className="font-bold text-gray-800">Rs 10,000</span>
        </h2>
      </div>

      {/* User List */}
      <div className="mt-6 px-6">
        <h3 className="text-md font-semibold mb-2">Users</h3>
        <input
          type="text"
          placeholder="Search users..."
          className="w-full p-2 mb-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-between items-center border p-3 rounded-md hover:bg-gray-50 transition">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-700">
              H
            </div>
            <p className="text-gray-800 font-medium">Harkirat Singh</p>
          </div>
          <button className="bg-gray-900 text-white text-sm px-4 py-1.5 rounded-md hover:bg-gray-700 transition">
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
