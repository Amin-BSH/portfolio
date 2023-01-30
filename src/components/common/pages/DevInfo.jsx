import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

import { RandomReveal } from "react-random-reveal";

import { alphabetPersian } from "../../../constants/alphabetPersian";

const Info = ({ children }) => {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ m2: 3 }}>
      <RandomReveal
        isPlaying
        duration={2}
        characters={children}
        characterSet={alphabetPersian}
      />
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "bottom",
          color: "primary.main",
        }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : محمد امین بشارتیان</Info>
      <Info>سن : ۲۰</Info>
      <Info>شهر : خرم آباد</Info>
      <Info>m.raymon.bsh@gmail.com : آدرس ایمیل</Info>
      <Info>شماره موبایل : ۰۹۱۲۰۰۰۰۴۳</Info>
    </>
  );
};

export default DevInfo;
