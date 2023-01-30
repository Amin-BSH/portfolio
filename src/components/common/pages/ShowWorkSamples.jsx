import EllipsisText from "react-ellipsis-text";

import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Slide,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { workSamples } from "../../../constants/workSamples.js";

const ShowWorkSamples = ({ loading }) => {
  return (
    <>
      {workSamples.map((workSample, index) => (
        <Grid xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 2 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
            key={index}
          >
            <Card sx={{ maxWidth: 345, backgroundColor: "steelblue" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  width="200"
                  image={workSample.image}
                  alt={workSample.title}
                />
                <CardContent>
                  <Typography variant="body1" textAlign="left" gutterBottom>
                    {workSample.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="left"
                    color="text.secondary"
                    gutterBottom
                    sx={{ direction: "ltr" }}
                  >
                    <EllipsisText text={workSample.info} length={100} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href={workSample.link}
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  اطلاعات بیشتر
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  );
};

export default ShowWorkSamples;
