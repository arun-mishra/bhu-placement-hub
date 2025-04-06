'use client';

import { Layout, Menu } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import {
  Home,
  User,
  Building2,
  BarChart3,
  Briefcase,
  Calendar,
  HeadphonesIcon
} from 'lucide-react';

const { Header } = Layout;

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { key: '/', icon: <Home className="w-4 h-4" />, label: 'Home' },
    { key: '/student', icon: <User className="w-4 h-4" />, label: 'Student Dashboard' },
    { key: '/company', icon: <Building2 className="w-4 h-4" />, label: 'Company Dashboard' },
    { key: '/statistics', icon: <BarChart3 className="w-4 h-4" />, label: 'Statistics' },
    { key: '/jobs', icon: <Briefcase className="w-4 h-4" />, label: 'Jobs' },
    { key: '/events', icon: <Calendar className="w-4 h-4" />, label: 'Events' },
    { key: '/services', icon: <HeadphonesIcon className="w-4 h-4" />, label: 'Services' },
  ];

  return (
    <Header className="bg-white shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-primary">Placement Cell</div>
        <Menu
          mode="horizontal"
          selectedKeys={[pathname]}
          items={menuItems}
          onClick={({ key }) => router.push(key)}
          className="border-none"
        />
      </div>
    </Header>
  );
};

export default Navbar;