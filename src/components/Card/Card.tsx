import * as React from "react";
import { Card, CardContent, Typography, Backdrop } from "@mui/material";
import { Box, styled } from "@mui/system";
import { NormalCssProperties } from "@mui/material/styles/createTypography";
// import { useWindowDimensions } from "../../hooks";

const CustomCard = styled(Card)(() => ({
  transition: "all 0.5s",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
    transition: "box-shadow 0.05",
  },
}));

export default function OutlinedCard({
  content,
  title,
}: {
  content: string;
  title: string;
}) {
  const [clicked, setClicked] = React.useState(false);
  // const [displacedPosition, setDisplacedPosition] = React.useState({});
  const position = React.useRef();
  // const { height, width } = useWindowDimensions();

  const handleClose = () => {
    setClicked(false);
  };

  // const transformPosition = (position: React.RefObject<HTMLDivElement>) => {
  //   console.log({
  //     top: position?.current?.offsetTop,
  //     left: position?.current?.offsetLeft,
  //   });
  //   setDisplacedPosition({
  //     displaceHeight: height / 2 - position?.current?.offsetTop / 2,
  //     displaceWidth: width / 2 - position?.current?.offsetLeft / 2,
  //   });
  // };

  const unClickedStyle = {
    visibility: "visible",
    opacity: "1",
    transform: "translate(0,0)",
  } as NormalCssProperties;

  const clickedStyle = {
    transformOrigin: "0 0",
  } as NormalCssProperties;

  const Wrapper = ({
    clicked,
    children,
  }: {
    clicked: boolean;
    children?: React.ReactElement;
  }) => {
    if (clicked) {
      return (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={clicked}
          onClick={handleClose}
        >
          {children}
        </Backdrop>
      );
    }
    return children;
  };

  const card = (
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body2">{content}</Typography>
    </CardContent>
  );
  return (
    <Box ref={position}>
      <Wrapper clicked={clicked}>
        <CustomCard
          variant="outlined"
          sx={clicked ? clickedStyle : unClickedStyle}
          onClick={() => {
            setClicked(true);
            // transformPosition(position);
          }}
        >
          {card}
        </CustomCard>
      </Wrapper>
    </Box>
  );
}
