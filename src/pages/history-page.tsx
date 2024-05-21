import { useNavigate } from "react-router-dom";
import { removeFromHistory } from "../store/services/farebase-service";
import { useAppSelector } from "../components/hooks/redux-hooks";
import { useHistory } from "../components/hooks/use-history";
import { getUser } from "../store/slices/user/user-selector";

export function HistoryPage() {
  const navigate = useNavigate();
  const user = useAppSelector(getUser);
  const { history } = useHistory();

  const handleRemoveFromHistory = (searchText: string) => {
    if (user?.email) {
      removeFromHistory(searchText, user.email);
    }
  };

  const handleOnClick = (searchText: string) =>
    navigate(`/search?searchText=${searchText}`);

  return (
    <div className="flex flex-1 flex-col mb-20 min-h-[60vh]">
      {Boolean(history?.length < 1) && (
        <span className="text-accent">History is empty</span>
      )}
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
