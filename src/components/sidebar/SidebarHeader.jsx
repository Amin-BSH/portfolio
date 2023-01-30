import { Typography, Box } from "@mui/material";

import avatar from "../../assets/pexels-kaique-rocha-598917.jpg";

import { socialMediaInfo } from "../../constants/socialMediaInfo";
import SocialMedia from "./SocialMedia";
import ThemeActionButton from "../ThemeActionButton";
import { CustomAvatar } from "../common";

const SidebarHeader = () => {
  return (
    <>
      <ThemeActionButton />
      <CustomAvatar avatar={avatar} size={200} fallback="MB" />
      <Typography variant="h6" color="#F93C99">
        <Typography variant="caption" color="tomato">
          {"{{"}
        </Typography>
        امین بشارتیان
        <Typography variant="caption" color="tomato">
          {"}}"}
        </Typography>
      </Typography>
      <Typography variant="caption" color="gray">
        <Typography variant="caption" color="tomato">
          [[{" "}
        </Typography>
        کارآموز فرانت اند و مشتاق یادگیری
        <Typography variant="caption" color="tomato">
          {" "}
          ]]
        </Typography>
      </Typography>
      <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
        {socialMediaInfo.map((info) => (
          <SocialMedia name={info.name} href={info.href}>
            {info.icon}
          </SocialMedia>
        ))}
      </Box>
    </>
  );
};

export default SidebarHeader;
