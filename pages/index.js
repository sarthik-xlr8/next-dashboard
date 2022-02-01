import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Grid,
  Divider,
  NativeSelect,
  Typography,
  Popover,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  DatePicker,
  TextField,
} from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/material/styles";
import strings from "../utils/language";
import { HOME_PAGE_DURATION_OPTIONS } from "../utils/constants";
// import revenueData from "../src/revenue.json";

const Dashboard = () => {
  // const { revenueData, isLoading } = useSelector((state) => state);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(requestUsers(revenueData));
  // }, []);

  const [openFilterDropDown, setOpenFilterDropDown] = useState(false);
  const [filterDropDownAnchor, setFilterDropDownAnchor] = useState(null);
  const [duration, setDuration] = useState("Select The Date");

  const revenue = useSelector((state) => state.home.revenue);
  console.log({ revenue });

  const onFilterClickHandler = useCallback(
    (e) => {
      setOpenFilterDropDown(!openFilterDropDown);
      console.log(e.currentTarget);
      setFilterDropDownAnchor(filterDropDownAnchor ? null : e.currentTarget);
    },
    [openFilterDropDown, filterDropDownAnchor]
  );

  const onDropDownCloseHandler = useCallback(() => {
    setOpenFilterDropDown(false);
    setFilterDropDownAnchor(null);
  }, []);

  const onDurationChange = (event) => {
    setDuration(event.target.value);
  };
  return (
    <>
      <Head>
        <title>Dashboard | Material Kit</title>
      </Head>
      <Box className="home-container" sx={{ m: 6, mb: "10px" }}>
        <Box className="home-header-wrapper" sx={{ mb: 2 }}>
          <h1 className="home-overview-title">{strings.welcome}</h1>
          <div className="home-overview-subtitle">
            {strings.redifine_your_marketing_strategy_subtitle}
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Box
              onClick={onFilterClickHandler}
              sx={{
                width: 270,
                height: 30,
                backgroundColor: "#ffffff",
                border: "1px solid #d7d7d7",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRadius: "4px",
                justifyContent: "space-between",
                px: 2,
                cursor: "pointer",
              }}
            >
              <Typography>{duration}</Typography>
              <ArrowDropDownIcon />
              <Popover
                id={!!filterDropDownAnchor ? "simple-popover" : undefined}
                open={!!filterDropDownAnchor}
                anchorEl={filterDropDownAnchor}
                onClose={onDropDownCloseHandler}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box
                  sx={{
                    width: "460px",
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <InputLabel id="duration-dropdown-label">
                    {strings.duration}
                  </InputLabel>
                  <Select
                    size="small"
                    value={duration}
                    labelId={"duration-dropdown-label"}
                    id={"duration-dropdown"}
                    variant="outlined"
                    onChange={onDurationChange}
                  >
                    {HOME_PAGE_DURATION_OPTIONS.map((option, i) => (
                      <MenuItem key={i} value={option.label}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <Box sx={{ display: "flex", mt: 1 }}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", pr: 1 }}
                    >
                      <InputLabel id="start-date-label">
                        {strings.starting}
                      </InputLabel>
                      <TextField
                        size="small"
                        labelId="start-date-label"
                        type="date"
                      />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <InputLabel id="end-date-label">
                        {strings.ending}
                      </InputLabel>
                      <TextField
                        size="small"
                        labelId="end-date-label"
                        type="date"
                      />
                    </Box>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Typography>{strings.compared_to}</Typography>
                  <Box sx={{ display: "flex", mt: 1 }}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", pr: 1 }}
                    >
                      <InputLabel id="target-start-date-label">
                        {strings.starting}
                      </InputLabel>
                      <TextField
                        size="small"
                        labelId="target-start-date-label"
                        type="date"
                      />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <InputLabel id="target-end-date-label">
                        {strings.ending}
                      </InputLabel>
                      <TextField
                        size="small"
                        labelId="target-end-date-label"
                        type="date"
                      />
                    </Box>
                  </Box>
                </Box>
              </Popover>
            </Box>
            <Button variant="contained" startIcon={<FileUploadOutlinedIcon />}>
              {strings.export_dashboard}
            </Button>
          </Box>
        </Box>
        <Divider />
      </Box>

      <Box className="home-container" sx={{ m: 2 }}>
        <Box className="home-header-wrapper" sx={{ mb: 2 }}>
          <Box
            display="flex"
            flexdirection="row"
            sx={{ justifyContent: "space-evenly" }}
          >
            <Box
              display="flex"
              style={{ flexDirection: "column", gap: "10px" }}
              // sx={{ marginLeft: "30px" }}
            >
              <Paper
                elevation={14}
                sx={{ height: "100px", width: "500px", mb: "20px" }}
              >
                <Typography padding="10px" sx={{ marginLeft: "20px" }}>
                  Your Revenue for the{" "}
                  <span style={{ fontWeight: 700 }}>{`${duration}`}</span> is
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: "24px" }}>
                    {revenue?.[duration]?.price}
                  </Typography>
                  <Typography>{revenue?.[duration]?.percentage}</Typography>
                </Box>
              </Paper>
              <Paper elevation={8} sx={{ height: "50px", width: "500px" }}>
                <Typography padding="10px">
                  {strings.total_no_orders}
                </Typography>
              </Paper>
              <Paper elevation={8} sx={{ height: "50px", width: "500px" }}>
                <Typography padding="10px">
                  {strings.gross_profit_margin}
                </Typography>
              </Paper>
              <Paper elevation={8} sx={{ height: "50px", width: "500px" }}>
                <Typography padding="10px">{strings.mer}</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper elevation={14} sx={{ height: "270px", width: "700px" }}>
                Chart
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
