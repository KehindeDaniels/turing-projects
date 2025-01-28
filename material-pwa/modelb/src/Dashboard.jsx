import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const Dashboard = () => {
  const cards = [
    { title: "Total Users", value: "1,024" },
    { title: "Revenue", value: "$24,000" },
    { title: "Tasks Completed", value: "75%" },
    { title: "Pending Issues", value: "12" },
  ];

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.title}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography variant="h4" component="div">
                {card.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
