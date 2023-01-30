import { useEffect, useRef, useCallback, useState } from "react";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import TextTransition, { presets } from "react-text-transition";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Helmet } from "react-helmet-async";

import { firefly, links, skyPack } from "../constants/particles";
import bg02 from "../assets/bg02.jpeg";

const Home = ({ helmetTitle }) => {
  const [index, setIndex] = useState(0);
  const nameEl = useRef(null);
  const strings = [
    " توسعه دهنده فرانت اند هستم",
    " دانشجو هستم",
    "فریلنسر هستم",
  ];
  useEffect(() => {
    const typeName = new Typed(nameEl.current, {
      strings: ["محمد امین بشارتیان"],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typeName.destroy();
      clearInterval(stringsTransition);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg02})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow:"hidden"
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      />
      <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ typography: { md: "h3", xs: "h4" } }} color="#F93C99">
          {"{{"}
        </Typography>
        <Typography
          ref={nameEl}
          sx={{ textAlign: "center", typography: { md: "h3", xs: "h4" } }}
          color="tomato"
        ></Typography>
        <Typography sx={{ typography: { md: "h3", xs: "h4" } }} color="#F93C99">
          {"}}"}
        </Typography>
      </Box>
      <Box component="div" sx={{ display: "flex" }}>
        <TextTransition springConfig={presets.wobbly}>
          <Typography
            sx={{
              textAlign: "center",
              textDecoration: "underline",
              textDecorationColor: "#F93C99",
              textUnderlineOffset: 10,
              mt: 4,
              typography: { md: "h4", sm: "h5" },
            }}
            color="whitesmoke"
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
        <Typography
          color="whitesmoke"
          sx={{
            mt: 4,
            mr: 1,
            typography: { md: "h4", sm: "h5" },
          }}
        >
          من یک
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
