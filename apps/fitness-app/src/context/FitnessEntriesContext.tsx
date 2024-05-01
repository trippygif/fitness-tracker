import { createContext } from "react";
import { useState, useEffect } from "react";
import { apolloClient, gql } from "@/utils/apollo";
import { useQuery } from "@apollo/client";

const GET_FITNESS_ENTRIES = gql`
  query {
    fitnessEntry {
      activity
      reps
      sets
      weight
    }
  }
`;

const initialState = {
  entries: [],
  loading: false,
};

export const FitnessEntriesContext = createContext(initialState);

export const FitnessEntriesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [entries, setEntries] = useState([]);

  const { loading, data } = useQuery(GET_FITNESS_ENTRIES);

  useEffect(() => {
    if (data) {
      setEntries(data.fitnessEntry);
    }
  }, [data]);

  return (
    <FitnessEntriesContext.Provider value={{ entries, loading }}>
      {children}
    </FitnessEntriesContext.Provider>
  );
};
