import { IconButton } from "@mui/material";

const SocialMedia = ({ children, href, name }) => {
  return (
    <>
      <IconButton aria-label={name}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </IconButton>
    </>
  );
};

export default SocialMedia;
