const fitnessEntries = [
  {
    activity: "Bench Press",
    reps: 10,
    sets: 3,
    weight: 135,
  },
  {
    activity: "Squat",
    reps: 5,
    sets: 5,
    weight: 225,
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const fitnessEntryResolver = {
  Query: {
    fitnessEntry: () => fitnessEntries,
  },
};
