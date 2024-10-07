import { Button, Stack, Typography } from "@mui/material";

import React from "react";

const Section1 = () => {
  return (
    <Stack
      sx={{
        height: "410px",
        marginTop: "80px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack sx={{ height: "358px", width: "715px" }}>
        <Stack
          sx={{
            // border: "1px solid red",
            fontSize: {
              xs: "40px",
              sm: "40px",
              md: "40px",
              lg: "66px",
              xl: "66px",
            },
            fontWeight: 600,
            color: "black",
            lineHeight: {
              xs: "42px",
              sm: "42px",
              md: "42px",
              lg: "65px",
              xl: "65px",
            },
            textAlign: "center",
          }}
        >
          <p style={{ margin: "0px" }}>
            Expand your business{" "}
            <span style={{ color: "#5858e0" }}>take action</span> with WhatsApp
          </p>
          {/* <p style={{ margin: "0px" }}>
            Transform Your Conversations into{" "}
            <span style={{ color: "#5858e0" }}>Business Growth</span> with
            WhatsApp CRM
          </p> */}
        </Stack>

        <Stack
          sx={{
            fontSize: {
              xs: "21px",
              sm: "21px",
              md: "21px",
              lg: "24px",
              xl: "24px",
            },
            fontWeight: 300,
            color: "black",
            lineHeight: {
              xs: "24px",
              sm: "24px",
              md: "24px",
              lg: "34px",
              xl: "34px",
            },
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Effortlessly integrate with the WhatsApp Business API through the only
          complete platform designed to enhance customer interactions and drive
          business growth on WhatsApp.
        </Stack>

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
            justifyContent: "center",

            marginTop: "52px",
          }}
        >
          <Stack
            sx={{
              marginRight: {
                xs: "0px",
                sm: "0px",
                md: "0px",
                lg: "20px",
                xl: "20px",
              },
              marginBottom: {
                xs: "20px",
                sm: "20px",
                md: "20px",
                lg: "0px",
                xl: "0px",
              },
            }}
          >
            <Button variant="contained" size="large">
              Get Started - it's free
            </Button>
          </Stack>
          <Stack>
            <Button variant="outlined" size="large">
              Talk to a Human
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Section1;
