import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-4">
      <img
        className="w-50"
        src="https://cdn.yenicaggazetesi.com.tr/news/2022/03/150320221117469981053.jpeg"
        alt=""
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <div>
        <Button className="mt-4" onClick={() => navigate("/")}>Go Home</Button>
      </div>
    </div>
  );
};

export default NotFound;
