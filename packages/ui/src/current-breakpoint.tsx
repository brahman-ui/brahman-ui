import { useEffect, useState } from "react";
import { Box, BoxProps, useBreakpoint, useTheme } from "@chakra-ui/react";

type MatchedBreakpontProps = {
  children: React.ReactNode;
  boxProps?: BoxProps;
};

const MatchedBreakpont = ({ children, ...boxProps }: MatchedBreakpontProps) => {
  return (
    <Box
      position="fixed"
      left={4}
      bottom={4}
      bg="gray.200"
      px={4}
      py={2}
      rounded="full"
      fontSize="sm"
      fontWeight="semibold"
      zIndex="overlay"
      {...boxProps}
    >
      {children}
    </Box>
  );
};

type CurrentBreakpointProps = {
  boxProps?: BoxProps;
};

export const CurrentBreakpoint = ({ boxProps }: CurrentBreakpointProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  const { breakpoints } = useTheme();
  const bp = useBreakpoint({ ssr: false });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {Object.keys(breakpoints)?.map((key) => {
        if (key !== bp) return null;

        return (
          <MatchedBreakpont key={key} {...boxProps}>
            {key}
          </MatchedBreakpont>
        );
      })}
    </>
  );
};
