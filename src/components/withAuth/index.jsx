import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const WithAuth = (WrappedComponent) => {
  const WrapperComponent = (props) => {
    const token = useSelector((state) => state.auth.token);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    const isTokenExpired = (token) => {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp < currentTime;
      } catch (err) {
        return true;
      }
    };

    useEffect(() => {
      if (isAuthenticated === false || isTokenExpired(token)) {
        console.log("we this");
        navigate("/login");
      }
    }, [isAuthenticated,navigate,token]);

    return <WrappedComponent {...props} />;
  };

  return WrapperComponent;
};

export default WithAuth;
