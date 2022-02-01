import {
  Box,
  Button,
  Container,
  Grid,
  Divider,
  Typography,
  Link,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { PROFILE } from "../utils/constants";
import strings from "../utils/language";

const Profile = () => {
  const { name, role, subscription, nextBillingDate } = PROFILE;
  return (
    <>
      <Box className="home-container" sx={{ mx: 6, mt: 6 }}>
        <Typography variant="h3" component="div">
          {strings.your_profile}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ m: 3, px: 1 }}>
        <Typography sx={{ py: 1, color: "#d7d7d7" }}>{strings.name}</Typography>
        <Typography>{name}</Typography>
        <Typography sx={{ py: 1, color: "#d7d7d7" }}>{strings.role}</Typography>
        <Typography>{role}</Typography>
        <Typography sx={{ py: 1, color: "#d7d7d7" }}>
          {strings.subscription}
        </Typography>
        <Typography>{subscription}</Typography>
        <Typography sx={{ py: 1, color: "#d7d7d7" }}>
          {strings.next_billing_date}
        </Typography>
        <Typography>{nextBillingDate}</Typography>
        <Link href="#">{strings.change_subscription_plan}</Link>
      </Box>
      <Box sx={{ m: 3, display: "flex", alignItems: "center" }}>
        <InfoIcon style={{ fill: "orange" }} />
        <Typography sx={{ p: 1 }}>
          {strings.update_profile_details_info}
        </Typography>
      </Box>
    </>
  );
};

export default Profile;
