import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Container from "../components/Container";
import { useTranslation } from "react-i18next";
function ForStudents() {
        const {t }=useTranslation()
  return (
    <Container>
      <div className="forstudent">
        <div className="forstudent_row">
          <div className="forstudent_box">
            <div className="forstudent_col">
              <div className="forstudent_card">
                <div className="forstudent_card_icon">
                  <span>
                    <PiStudentBold />
                  </span>
                </div>
                <div className="forstudent_card_text">
                  <p>{t("stu_life")}</p>
                  <b>{t("bataf")}</b>
                </div>
              </div>
            </div>
            <h1>
              {t("stu_life")}{" "}
              <span>
                <PiStudentBold />
              </span>
            </h1>
          </div>

          <div className="forstudent_box">
            <div className="forstudent_col">
              <div className="forstudent_card">
                <div className="forstudent_card_icon">
                  <span>
                    <MdEmojiEvents />
                  </span>
                </div>
                <div className="forstudent_card_text">
                  <p>{t("mada_tad")}</p>
                  <b>{t("bataf")}</b>
                </div>
              </div>
            </div>
            <h1>
            {t("mada_tad")}{" "}
              <span>
                <MdEmojiEvents />
              </span>
            </h1>
          </div>

          <div className="forstudent_box">
            <div className="forstudent_col">
              <div className="forstudent_card">
                <div className="forstudent_card_icon">
                  <span>
                    <RiMoneyDollarCircleLine />
                  </span>
                </div>
                <div className="forstudent_card_text">
                  <p>{t("setpend")}</p>
                  <b>{t("bataf")}</b>
                </div>
              </div>
            </div>
            <h1>
             {t("setpend")}
              <span>
                <RiMoneyDollarCircleLine />
              </span>
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ForStudents;
