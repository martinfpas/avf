import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className='layout' data-testid="main-layout" style={{ width: "100%", justifyContent: "center" }} >
        {children}
    </div>
}