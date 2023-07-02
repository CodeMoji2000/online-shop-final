import React, { useState } from "react";
import background from "../images/loginBackground.jpg";
import ErrorAlert from "../components/common/ErrorAlert";
import Login from "../api/Login.api";
import { useHistory } from "react-router-dom";
import RedirectAlert from "../components/common/RedirectAlert";
import { selectorUserData } from "../redux/store/selector";
import { getUserDataResponse } from "../redux/action/user.action";
import { connect } from "react-redux";
const LoginScreen = ({ setUserData }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorOpen, setisErrorOpen] = useState(false);
  const [redirectAlert, setRedirectAlert] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [errors, setErrors] = useState({
    phoneNumberِDigit: {
      message: " شماره همراه باید 11 رقمی باشد! ",
      visible: false,
    },
    phoneNumberِZero: {
      message: " شماره همراه باید با صفر اغاز شود!",
      visible: false,
    },
    passwordEmpty: { message: "وارد نمودن گذرواژه الزامیست!", visible: false },
    passwordWrong: { massage: "'گذرواژه غلط است", visible: false },

    userNameNotExist: { message: "نام کاربری موجود نمی باشد", visible: false },
  });

  let history = useHistory();

  const onSubmitBtn = () => {
    if (phoneNumber.length !== 11 || phoneNumber[0] !== "0") {
      errors.phoneNumberِZero.visible = true;
      errors.phoneNumberِDigit.visible = true;
    }
    if (password == "") {
      errors.passwordEmpty.visible = true;
    }
    if (phoneNumber.length !== 11 || phoneNumber[0] !== "0" || password == "") {
      setRerender(!rerender);
      setisErrorOpen(true);
      return;
    }

    global.showLoader();
    Login({ phoneNumber, password })
      .then(async (response) => {
        if (response == "user_not_found") {
          errors.userNameNotExist.visible = true;
          setRerender(!rerender);
          setisErrorOpen(true);
          global.hideLoader();
          return;
        } else {
          errors.userNameNotExist.visible = false;
          setRerender(!rerender);
        }

        if (response == "password_not_match") {
          alert(errors.passwordWrong.massage);
           errors.passwordWrong.visible = true
          setisErrorOpen(true);
          setRerender(!rerender);
          global.hideLoader();
          return;
        } else {
          errors.passwordWrong.visible = false;
          setRerender(!rerender);
        }

        setUserData({
          data: response.userData,
          token: response.access_token,
        });
        global.hideLoader();
        setRedirectAlert(true);
          history.push("/slider");
      })
      .catch((error) => {
        console.log({ error });
        alert(
          "مشکلی بوجود آمده لطفا از اتصال خود به اینترنت اطمینان حاصل فرمایید!"
        );
        global.hideLoader();
      });
  };

  return (
    <div className="tw-relative">
      <RedirectAlert
        open={redirectAlert}
        whiteText="با موفقیت"
        greenText="وارد شدید!"
      />  
      <ErrorAlert
            open={isErrorOpen}
            errors={errors}
            handleClose={() =>  (false)}
          />
  
      <div
        style={{ backgroundImage: `url(${background})`, fontFamily: "Lalezar" }}
        className="tw-flex tw-justify-center  tw-bg-gray-100 tw-h-screen lg:tw-flex-wrap tw-content-center"
      >
        <div className="lg:tw-w-max tw-w-full tw-bg-gray-200 tw-shadow-2xl tw-rounded-full">
          <div className="tw-bg-green-600 tw-py-8 lg:tw-py-16 lg:tw-px-72 tw-shadow-2xl tw-rounded-tl-full  tw-rounded-tr-full">
            <p className="tw-text-center tw-text-6xl tw-text-white">
              ورود به پنل
            </p>
          </div>
          <div className="tw-justify-center tw-bg-gray-200 rtl tw-px-20 lg:w-px-32 tw-py-20 tw-flex tw-flex-col tw-rounded-bl-3xl tw-rounded-br-3xl">
            <p className="tw-text-right tw-mb-2 tw-mr-2 tw-text-lg">
              شماره همراه :
            </p>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                if (phoneNumber.length == 10 && phoneNumber[0] == "0") {
                  errors.phoneNumberِZero.visible = false;
                  errors.phoneNumberِDigit.visible = false;
                  setRerender(!rerender);
                }
              }}
              placeholder="نام کاربری"
              className="tw-py-4 tw-px-8 tw-shadow-2xl tw-rounded-xl"
            ></input>
            <p className="tw-text-right tw-mt-8 tw-mb-2 tw-mr-2 tw-text-lg">
              رمز عبور :
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (password != "") {
                  errors.passwordEmpty.visible = false;
                  setRerender(!rerender);
                }
              }}
              placeholder="رمز عبور"
              className="tw-py-4 tw-shadow-2xl tw-px-8 tw-rounded-xl"
            ></input>
            {/* <div>
                         <p>فراموشی</p>
                         <a href="#">نام کاربری</a>
                         <a href="#">رمز عبور</a>
                     </div> */}
            <button
              className="tw-py-4 tw-mt-16 tw-text-xl tw-shadow-xl tw-px-8 tw-rounded-full tw-text-white tw-bg-green-600 hover:tw-bg-green-900 tw-duration-500"
              onClick={onSubmitBtn}
            >
              {" "}
              ورود{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: selectorUserData(state),
  };
};

const mapDispatchToProps = {
  setUserData: getUserDataResponse,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
