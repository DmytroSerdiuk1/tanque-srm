import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";
import ProtectRoutes from "../ProtectRoutes/ProtectRoutes";

const Layout = () => {
    return (
        <ProtectRoutes>
            <Sidebar/>
            <Box sx={{
                padding: '20px',
                maxHeight: '100vh',
                paddingLeft: '320px'
            }}>
                <Outlet/>
            </Box>
        </ProtectRoutes>
    );
};

export default Layout;