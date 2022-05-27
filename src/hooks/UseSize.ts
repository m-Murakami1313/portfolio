import { useMediaQuery } from "@mui/material";

export const useSize = () => {
  const isMobileSize = useMediaQuery("(min-width:600px)");
  return { isMobileSize };
};
