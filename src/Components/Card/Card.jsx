import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const VertexCard = ({
  media = { type: "", src: "", src2: "" },
  title = "",
  description = "",
  cardStyle = {},
  cardStyle2 = {},
  cardStyle3 = {},
  isHovered,
  isNextHovered,
  onHover,
  onHoverOut,
}) => {
  const [appliedStyle, setAppliedStyle] = useState(cardStyle);

  useEffect(() => {
    if (isHovered) {
      setTimeout(() => setAppliedStyle(cardStyle2), 10);
    } else if (isNextHovered) {
      setTimeout(() => setAppliedStyle(cardStyle3), 10);
    } else {
      setTimeout(() => setAppliedStyle(cardStyle), 10);
    }
  }, [isHovered, isNextHovered, cardStyle, cardStyle2, cardStyle3]);

  const handleMouseOver = (event) => {
    event.target.play();
  };

  const handleMouseOut = (event) => {
    event.target.pause();
    event.target.currentTime = 0;
  };

  return (
    <Card
      sx={{
        maxWidth: 225,
        borderRadius: "16px",
        overflow: "hidden",
        ...appliedStyle,       
        transition: "all 1s ease",       
        zIndex: isHovered ? 1000 : 1,
       
      }}
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
    >
      <Box
        sx={{
          width: "100%",
          borderRadius: "16px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {isHovered ? (
          <video
            src={media.src}
            width="90%"
            muted
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{
              display: "block",
              marginTop: "20px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          />
        ) : (
          <img
            src={media.src2 || "https://via.placeholder.com/150"}
            alt={title || "Default Title"}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        )}
      </Box>
      <CardContent >
        <Typography variant="h6" component="div" textAlign={"center"}>
          {title || "Default Title"}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
          {description || "This is the default description."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VertexCard;
