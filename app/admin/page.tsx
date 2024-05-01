"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import {
    TextField,
    Typography,
    Container,
    Grid,
    FormControlLabel,
    Checkbox,
    IconButton,
    InputAdornment,
    Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { loginPageData } from "@/data/loginPage";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { orangebuttonCommonStyle } from "@/components/homePage/styles.js";
import Link from "next/link";

const AdminLoginPage = () => {
    const router = useRouter(); // Initialize the router

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        showPassword: false,
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        field: string
    ) => {
        setFormData({
            ...formData,
            [field]: event.target.value,
        });
    };

    const handleTogglePasswordVisibility = () => {
        setFormData({
            ...formData,
            showPassword: !formData.showPassword,
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);

        // For demonstration, always navigate to dashboard
        const loginSuccessful = true; // Replace with actual logic

        if (loginSuccessful) {
            router.push("/admin/dashboard"); // Navigate to the admin dashboard
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="70vh" /* Set minimum height to occupy the full viewport */
        >
            <Container maxWidth="sm">
                <Box padding={5}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                {" "}
                                {/* Banner Section */}
                                <Typography
                                    variant="h4"
                                    align="center"
                                    fontSize="48px"
                                    style={{ fontFamily: "Lora", color: "rgba(17, 20, 45, 1)" }}>
                                    <b>{loginPageData.loginPageTitle}</b>{" "}
                                    {/* Render the title from loginPageData */}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Box marginTop={2}>
                                    <Typography
                                        align="center"
                                        fontSize="20px"
                                        style={{
                                            fontFamily: "Mulish",
                                            color: "rgba(81, 81, 81, 1)",
                                        }}>
                                        {loginPageData.loginPageDescription}
                                        {/* Render the subtitle from loginPageData */}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={8} marginTop={6}>
                                {/* Email Section */}
                                <Typography style={{ color: "rgba(17, 20, 45, 1)" }}>
                                    {loginPageData.loginPageEmailtxtCaption}
                                </Typography>
                                {/* Render the title from loginPageData */}
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                marginTop={-1.3}
                                style={{ textAlign: "center" }}>
                                {/* Email TextField */}
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange(e, "email")}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} marginTop={2.5}>
                                {/* Password Section */}
                                <Typography style={{ color: "rgba(17, 20, 45, 1)" }}>
                                    {loginPageData.loginPagePasswordtxtCaption}
                                </Typography>
                                {/* Render the title from loginPageData */}
                            </Grid>
                            <Grid item xs={12} marginTop={-1.3}>
                                {/* Password TextField */}
                                <TextField
                                    fullWidth
                                    label="Password"
                                    variant="outlined"
                                    type={formData.showPassword ? "text" : "password"} // Toggle visibility based on state
                                    value={formData.password}
                                    onChange={(e) => handleChange(e, "password")}
                                    required
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleTogglePasswordVisibility}
                                                    edge="end">
                                                    {formData.showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}{" "}
                                                    {/* Toggle visibility icon */}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid container>
                                {" "}
                                {/* Remember me and Forgot password Section */}
                                <Grid item xs={6} marginTop={1}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{
                                                    "& .MuiSvgIcon-root": { fontSize: 20 },
                                                    color: "#C7923E",
                                                    "&.Mui-checked": {
                                                        color: "#C7923E",
                                                    },
                                                    marginTop: "2px",
                                                }}
                                            />
                                        }
                                        label={
                                            loginPageData.loginPageCheckBoxCaption
                                        } /* Render the title from loginPageData */
                                        style={{ color: "rgba(17, 20, 45, 1)" }}
                                    />
                                </Grid>
                                <Grid item xs={6} marginTop={2} textAlign="right">
                                    <Typography style={{ color: "rgba(17, 20, 45, 1)" }}>
                                        <Link href="/">
                                            {loginPageData.loginPageForgotPasswordCaption}
                                        </Link>
                                        {/* Render the title from loginPageData & link the Forgot Password page */}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    {/* Placeholder for the bottom left corner */}
                                </Grid>
                                <Grid item xs={6} textAlign="right">
                                    {/* Placeholder for the bottom right corner */}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} marginTop={4} sx={{ marginBottom: "20px" }}>
                                {/* Login Button Section */}
                                <Button
                                    type="submit"
                                    sx={orangebuttonCommonStyle} // Add the button class
                                >
                                    {/* Render the title from loginPageData */}
                                    {loginPageData.loginPageButtonCaption}
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                {/* Register and Forgot password Section */}
                                <Typography align="center" style={{ color: "rgba(17, 20, 45, 1)" }}>
                                    {loginPageData.loginPageNoAccountCaption}{" "}
                                    {/* Render the Register page link */}
                                    <Link href="/register">
                                        {loginPageData.loginPageRegisterCaption}
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                container
                                alignItems="center"
                                justifyContent="center"
                                sx={{ marginBottom: "50px" }}
                            >
                                <Box
                                    bgcolor="#CCCCCC"
                                    borderRadius="50%"
                                    padding="3px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    marginRight="10px"
                                >
                                    <ArrowBack style={{ fontSize: "20px", color: "#000000" }} />
                                </Box>
                                <Typography
                                    style={{
                                        textAlign: "center",
                                        marginTop: "0px",
                                        color: "rgba(17, 20, 45, 1)",
                                    }}>
                                        <Link href="/">{loginPageData.loginPageBackArrowCaption}</Link>
                                    {/* Render the title from loginPageData & link the home page */}
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default AdminLoginPage;
