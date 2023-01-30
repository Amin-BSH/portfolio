import { Helmet } from "react-helmet-async";

import { Card, CardContent } from "@mui/material";
import { ForumRounded } from "@mui/icons-material";

import { CustomDivider } from "../components/common";
import { CommentsSlider } from "../components/common/pages";

const Comments = ({ helmetTitle }) => {
  return (
    <>
      <Card
        sx={{
          height: "100vh",
          backgroundColor: "whitesmoke",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Helmet>
          <title>{helmetTitle}</title>
        </Helmet>
        <CardContent>
          <CustomDivider
            bColor="success.main"
            cColor="success"
            icon={<ForumRounded />}
            text="نظریات مشتریان"
          />
          <CommentsSlider />
        </CardContent>
      </Card>
    </>
  );
};

export default Comments;
