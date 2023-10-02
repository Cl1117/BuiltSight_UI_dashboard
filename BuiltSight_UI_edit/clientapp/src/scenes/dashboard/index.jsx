import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
//ready import line chart for projection
import Dropdown from "../../components/Dropdown";
import Result from "../../components/Result";
import History from "../../components/History";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="AUSTRALIA'S CONSTRUCTION MATERIAL PRICE CHANGE PERCENTAGE TRACKER" />
            </Box>

            {/* Dropdowns row wrapper */}
            <Box display="flex" flexDirection="row">

                <Box flex="2" marginBottom="20px"> {/*dropdowns*/}
                    <Dropdown isDashboard={true} /> {/*dropdowns*/}

                    <Box marginTop="20px">             {/*result panel*/}
                        <Box>
                            <Typography
                                variant="h4"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                RESULT
                            </Typography>
                        </Box>
                            <Result isDashboard={true} /> 
                    </Box>
                </Box>

                <Box sx={{
                    width: "33%", marginLeft: "20px", marginBottom: "20px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "30px",
                    backgroundColor: colors.primary[100]
                    }}> {/*history panel*/}
                    <Box>
                        <Typography
                            variant="h4"
                            fontWeight="600"
                            color={colors.grey[100]}
                        >
                            History
                        </Typography>
                    </Box>
                    <History isDashboard={true} />
                </Box>
            </Box>


            {/* Line charts row wrapper */}
            <Box display="flex" flexDirection="row">

                {/* Left Line chart */}
                <Box flex="2" marginRight="20px" backgroundColor={colors.primary[500]}>
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h4"
                                fontWeight="600"
                                color={colors.grey[900]}
                            >
                                PERCENTAGE CHANGE IN MATERIAL PRICE
                            </Typography>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                Selected material
                            </Typography>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>

                {/* Right Line chart */}
                <Box flex="1" backgroundColor={colors.primary[400]}>
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h4"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                PROJETED PRICE CHANGE
                            </Typography>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                Selected material
                            </Typography>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default Dashboard;
