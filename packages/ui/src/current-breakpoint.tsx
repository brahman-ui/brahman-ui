import { useEffect, useState } from "react";
import { Box, BoxProps, useBreakpoint, useTheme } from "@chakra-ui/react";

type CurrentBreakpointProps = {
  boxProps?: BoxProps;
  transformFn?: (name: string, value: string) => string;
};

function defaultTransformFn(name: string, value: string): string {
  return `${name}`;
}

export const CurrentBreakpoint = ({
  boxProps,
  transformFn,
}: CurrentBreakpointProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  const { breakpoints } = useTheme();
  const bp = useBreakpoint({ ssr: false });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const text = transformFn
    ? transformFn(bp, breakpoints[bp])
    : defaultTransformFn(bp, breakpoints[bp]);

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
      {text}
    </Box>
  );
};
