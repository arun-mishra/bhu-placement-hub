import { ConfigProvider } from 'antd';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/molecules/Navbar';
import Footer from '@/components/molecules/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Placement Cell Department',
  description: 'Your gateway to career opportunities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ConfigProvider>
      </body>
    </html>
  );
}