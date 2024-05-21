import React from "react";
import { Link, Box } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

/**
 * AdminLoginLink Component
 * A reusable component providing a link to navigate back to the admin login page.
 */

const AdminLoginLink: React.FC = () => (
  <Link
    href="/admin"
    variant="body2"
    sx={{
      mt: 2,
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      textDecoration: "none",
      color: "#4A5472",
    }}
  >
    <Box display="flex" alignItems="center">
      <ArrowBackOutlinedIcon sx={{ fontSize: "15px", marginRight: "10px" }} />
      Back to log in
    </Box>
  </Link>
);
export default AdminLoginLink;
