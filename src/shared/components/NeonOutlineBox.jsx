import { Box } from "@chakra-ui/react";
import NeonBeamDivider from "./NeonBeamDivider";
import NeonBeamDividerVertical from "./NeonBeamDividerVertical";

const NeonOutlineBox = ({ children, borderRadius = 12, p = 6, ...props }) => (
  <Box
    position="relative"
    borderRadius={borderRadius}
    overflow="hidden"
    p={p}
    {...props}
  >
    {/* Neon en haut */}
    <NeonBeamDivider
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 2,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
      }}
      height="2px"
    />
    {/* Neon en bas */}
    <NeonBeamDivider
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 2,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
      }}
      height="2px"
    />
    {/* Neon à gauche (vertical, vrai effet) */}
    <NeonBeamDividerVertical
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        zIndex: 2,
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
      }}
      width="2px"
    />
    {/* Neon à droite (vertical, vrai effet) */}
    <NeonBeamDividerVertical
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        height: "100%",
        zIndex: 2,
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
      }}
      width="2px"
    />
    <Box position="relative" zIndex={3} borderRadius={borderRadius}>
      {children}
    </Box>
  </Box>
);

export default NeonOutlineBox;
