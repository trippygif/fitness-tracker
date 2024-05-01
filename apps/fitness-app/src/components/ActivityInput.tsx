import {
  FormControl,
  TextField,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Button,
} from "@mui/material";
import { activities } from "@/utils/const";

export default function ActivityInput() {
  return (
    <Box>
      <Stack spacing={2} direction="column" justifyContent="center">
        <Stack spacing={2} direction="row">
          <FormControl fullWidth>
            <InputLabel>Activity</InputLabel>
            <Select label="Activity">
              {activities.map((activity) => (
                <MenuItem key={activity} value={activity}>
                  {activity}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField label="Reps" />
          <TextField label="Sets" />
          <TextField label="Weight (lbs)" />
        </Stack>
        <Button>Submit</Button>
      </Stack>
    </Box>
  );
}
