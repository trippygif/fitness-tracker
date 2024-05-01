import { Box, Stack } from "@mui/material";
import { FitnessEntriesContext } from "@/context/FitnessEntriesContext";
import { useContext } from "react";

export default function ActivityList() {
  const { entries } = useContext(FitnessEntriesContext);

  return (
    <Box>
      <Stack spacing={2} direction="column">
        {entries.map((entry: any, index: number) => (
          <Stack key={index}>
            <Stack direction="row" spacing={2}>
              <p>{entry.activity}</p>
              <p>{entry.reps}</p>
              <p>{entry.sets}</p>
              <p>{entry.weight}</p>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
