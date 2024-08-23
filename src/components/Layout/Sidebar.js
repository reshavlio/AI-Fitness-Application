// Import React and other necessary libraries
import React from 'react';

// Import specific icons from 'react-icons'
import { AiOutlineHome, AiOutlineUser, AiOutlineAppstore } from 'react-icons/ai';

// Define your component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icon">
        <AiOutlineHome /> {/* Home icon */}
        <span>Home</span>
      </div>
      <div className="icon">
        <AiOutlineUser /> {/* User icon */}
        <span>Profile</span>
      </div>
      <div className="icon">
        <AiOutlineAppstore /> {/* Appstore icon */}
        <span>Apps</span>
      </div>
    </div>
  );
};

// Export the component
export default Sidebar;
