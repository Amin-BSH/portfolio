import { Typography, Slide } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
} from "@mui/lab";
import { SchoolRounded } from "@mui/icons-material";

import { devEdu } from "../../../constants/details";

const DevEduTimeline = ({ loading }) => {
  return (
    <>
      <Timeline position="right" sx={{ direction: "ltr" }}>
        {devEdu.map((item, index) => (
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
            key={index}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="info" variant="outlined">
                  <SchoolRounded color="info" />
                </TimelineDot>
                {index !== 1 ? <TimelineConnector /> : null}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="caption" color="gray">
                  {item.year}
                </Typography>
                <Typography variant="body1" color="black">
                  {item.cert}
                </Typography>
                <Typography variant="body2" color="black">
                  {item.major}
                </Typography>
                <Typography variant="caption" color="black">
                  {item.place}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>
        ))}
      </Timeline>
    </>
  );
};

export default DevEduTimeline;
