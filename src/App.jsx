import { LandingPage, UserInfo, Questions } from "./Components";
import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
  const currentPage = useSelector((state) => state.page.currentPage);

  const fetchComponent = () => {
    switch (currentPage) {
      case "Landing":
        return <LandingPage />;
      case "Info":
        return <UserInfo/>
      case "Questions":
        return <Questions/>
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="body">
      {fetchComponent()}
    </div>
  );
};

export default App;
