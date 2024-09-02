'use client';
import { usePathname } from 'next/navigation';
import NavBar from "./navbar";
// import DraggableBox from './setting';
import Footer from './footer';
const AssignPathRoles = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const specificRoute = [`/sign-in`];
    const isSpecificRoute = specificRoute.includes(pathname);
    return (
        <main className='flex flex-col min-h-screen'>
            {!isSpecificRoute && <NavBar />}
            <div className='flex-grow'>{children}</div>
            {!isSpecificRoute && <Footer />}
        </main>
    );
};

export default AssignPathRoles;
