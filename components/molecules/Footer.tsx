'use client';

import { Layout } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p><PhoneOutlined className="mr-2" /> +1 234 567 890</p>
            <p><MailOutlined className="mr-2" /> placement@university.edu</p>
            <p><EnvironmentOutlined className="mr-2" /> University Campus, City</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="space-x-4">
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Placement Cell. All rights reserved.
      </div>
    </AntFooter>
  );
};

export default Footer;