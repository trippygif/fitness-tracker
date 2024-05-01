"use client";

import { Container, Stack, Typography } from "@mui/material";
import ActivityInput from "@/components/ActivityInput";
import { FitnessEntriesContextProvider } from "@/context/FitnessEntriesContext";
import ActivityList from "@/components/ActivityList";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/utils/apollo";

export default function Home() {
  return (
    <ApolloProvider client={apolloClient}>
      <FitnessEntriesContextProvider>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h1">Fitness Tracker</Typography>
            <Typography variant="body1">
              Use this app to enter and track your fitness activities
            </Typography>
            <ActivityInput />
            <ActivityList />
          </Stack>
        </Container>
      </FitnessEntriesContextProvider>
    </ApolloProvider>
  );
}
