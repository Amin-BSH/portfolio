import { Divider, Box } from "@mui/material";

import { SidebarTabs, SidebarHeader, SidebarFooter } from "./index";

const SidebarContent = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}
    >
      <SidebarHeader />
      <Divider
        variant="middle"
      />
      <SidebarTabs />
      <Divider variant="middle" sx={{ mb: -4 }} />
      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
