import React from "react";
import { Grid, Card as MuiCard, CardContent, Typography } from "@mui/material";

const Card = () => {
  const cards = [
    { title: "Total Users", value: "1,024" },
    { title: "Revenue", value: "$24,000" },
    { title: "Tasks Completed", value: "75%" },
    { title: "Pending Issues", value: "12" },
  ];

  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <MuiCard>
            <CardContent>
              <Typography variant="h5" component="h2">
                {card.title}
              </Typography>
              <Typography variant="h3" component="p">
                {card.value}
              </Typography>
            </CardContent>
          </MuiCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Card;
