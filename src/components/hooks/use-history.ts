import { useAppSelector } from "./redux-hooks";
import { useEffect, useState } from "react";
import { getHistory } from "../../store/services/farebase-service";

export function useHistory() {
  const user = useAppSelector((state) => state.user);

  const [history, setHistory] = useState<{ searchText: string }[]>([]);

  useEffect(() => {
    if (user?.email) {
      getHistory(user.email).then((data) => setHistory(data || []));
    }
  }, [user?.email]);

  return { history };
}
