import React from "react";
import Img1 from "./section8first.png";
import Img2 from "./section8second.png";
import Img3 from "./section8third.png";
import {
  Button,
  Card,
  CardContent,
  Link,
  Stack,
  Typography,
} from "@mui/material";

const Section8 = () => {
  return (
    <Stack
      sx={{
        height: "auto",
        border: "1px solid red",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        },
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "center",
          xl: "center",
        },
        alignItems: {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "center",
          xl: "center",
        },
      }}
    >
      <Stack
        sx={{
          border: "1px solid blue",
          width: { lg: "64%", xl: "64%" },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            },
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "space-between",
              xl: "space-between",
            },
            //   alignItems: { xs: "center", sm: "center", md: "center", lg: "space-between", xl: "space-between" },
          }}
        >
          <Stack>
            <Card
              sx={{
                maxWidth: 345,
                height: {
                  sm: "412px",
                  xs: "412px",
                  lg: "100%",
                  xl: "100%",
                },
                borderRadius: 3,
                boxShadow: 3,
                padding: 2,
                marginBottom: {
                  xs: "20px",
                  sm: "20px",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={{
                    fontSize: {
                      xs: "18px",
                      sm: "18px",
                      lg: "26px",
                      xl: "26px",
                    },
                    lineHeight: {
                      xs: "24px",
                      sm: "24px",
                      lg: "31px",
                      xl: "31px",
                    },
                    fontWeight: 700,
                    color: "rgb(0,0,0)",
                    marginBottom: {
                      xs: "8px",
                      sm: "8px",
                    },
                  }}
                >
                  Dedicated, tailored support
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      lg: "16px",
                      xl: "16px",
                    },
                    lineHeight: {
                      xs: "20px",
                      sm: "20px",
                      lg: "25px",
                      xl: "25x",
                    },
                    fontWeight: 400,
                    color: "gray",
                    marginBottom: {
                      xs: "16px",
                      sm: "16px",
                    },
                  }}
                >
                  Rely on personalized support from platform migration to
                  optimizing your results and troubleshooting.
                </Typography>
                <Link
                  sx={{
                    mt: 2,
                    color: "#5a45fe",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    fontSize: { xs: "18px", sm: "18px" },
                  }}
                  variant="text"
                >
                  Talk to a human →
                </Link>
              </CardContent>
              <Stack
                sx={{
                  // border: "1px solid green",
                  height: { xs: "345px", sm: "345px" },
                  width: { xs: "100%", sm: "100%" },
                  borderRadius: "12px",
                  marginTop: { xs: "20px", sm: "20px" },
                }}
              >
                <img
                  src={Img1}
                  alt="logo"
                  style={{ height: "100%", width: "100%" }}
                />
              </Stack>
            </Card>
          </Stack>
          
     

         
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section8;
