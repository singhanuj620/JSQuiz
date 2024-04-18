import "./Questions.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Progress } from "reactstrap";

const Questions = () => {
  const userInfo = useSelector((state) => state.user);
  return (
    <div className="p-4 h-full">
      <div>
        <div className="navbar">
          <div className="user_name">
            Hello,{" "}
            <span className="text-red-700 font-bold">{userInfo.name} </span>
          </div>
          <div className="navbar_actions">
            <Button color="warning" outline className="mr-2">
              Reset Quiz
            </Button>
            <Button color="danger">End Quiz</Button>
          </div>
        </div>
        <div>
          <Progress animated className="my-3" value={80} color={userInfo.questionBucket === 100 ? "primary" : "success"} > 10 / {userInfo.questionBucket}</Progress>
        </div>
      </div>
    </div>
  );
};

export default Questions;
