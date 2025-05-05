import React from 'react'
import Header from './Header';
import Footer from './Footer';

// interface LayoutProps {
//     children: ReactNode;
//   }

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
