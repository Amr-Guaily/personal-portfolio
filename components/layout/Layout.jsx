import { Sidebar, Footer, Navbar } from 'components/index';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="flex relative">
      {/* Sidebar in Large Screens */}
      <div className="min-w-[290px] hidden lg:block fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      {/* Sidebar in small Screens */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ x: '-300' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
            exit={{ opacity: 0 }}
            className="lg:hidden min-w-[270px] fixed h-full z-50"
          >
            <Sidebar setShowSidebar={setShowSidebar} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 min-h-screen lg:ml-[290px] flex flex-col">
        <Navbar setShowSidebar={setShowSidebar} />
        <main className="flex-1 px-12 py-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
