import React from "react";
import "./Footer.css";
import { useLocation, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pageNumber =
    Number(
      location.pathname.replace("/", "") &&
        location.pathname.replace("/page", "")
    ) || 1;

  const pageNumberUpdate = (num, page) => {
    if (num === 1) {
      if (page <= 2) {
        navigate("/");
      } else {
        page = page - 1;
        navigate("page" + page.toString());
      }
    }
    if (num === 2 && page !== 10) {
      page = page + 1;
      navigate("page" + page.toString());
    }
  };

  return (
    <div className="footer">
      <div className="footer_container container max-w-[1160px] w-full flex justify-between items-center">
        <div className="car_range">
          <span className="font-bold text-lg">6</span>/60
        </div>
        <div className="pagination flex items-center place-content-around w-96">
          <div
            onClick={() => {
              pageNumberUpdate(1, pageNumber);
            }}
            className="page"
          >
            {"<--"}
          </div>
          <div
            onClick={() => {
              navigate("page2");
            }}
            className="page"
          >
            2
          </div>
          <div
            onClick={() => {
              navigate("page3");
            }}
            className="page"
          >
            3
          </div>
          <div
            onClick={() => {
              navigate("page4");
            }}
            className="page"
          >
            4
          </div>
          <div className="page">...</div>
          <div
            onClick={() => {
              navigate("page9");
            }}
            className="page"
          >
            9
          </div>
          <div
            onClick={() => {
              navigate("page10");
            }}
            className="page"
          >
            10
          </div>
          <div
            onClick={() => {
              pageNumberUpdate(2, pageNumber);
            }}
            className="page"
          >
            {"-->"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
