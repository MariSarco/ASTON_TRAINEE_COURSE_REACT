import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getHistory,
  removeFromHistory,
} from "../store/services/farebase-service";
import { useAppSelector } from "../components/hooks/redux-hooks";

export function HistoryPage() {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  const [history, setHistory] = useState<{ searchText: string }[]>([]);

  const handleRemoveFromHistory = (searchText: string) => {
    if (user?.email) {
      removeFromHistory(searchText, user.email);
    }
  };

  useEffect(() => {
    if (user?.email) {
      getHistory(user.email).then((data) => setHistory(data || []));
    }
  }, [user?.email]);

  const handleOnClick = (searchText: string) =>
    navigate(`/search?searchText=${searchText}`);

  return (
    <div className="flex flex-1 flex-col mb-20 min-h-[60vh]">
      {Boolean(history?.length < 1) && <h2>History is empty</h2>}
      {user?.email &&
        history.map((item) => (
          <div
            key={item.searchText}
            className="flex justify-between font-semibold border-b py-3 text-accent"
          >
            <div
              className=" cursor-pointer"
              onClick={() => handleOnClick(item.searchText)}
              key={item.searchText}
            >
              {item.searchText}
            </div>
            <button onClick={() => handleRemoveFromHistory(item.searchText)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
