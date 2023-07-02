import React, { useState, useEffect } from "react";
import { SignIn } from "../../API/SignIn.api";
import Logo from "../../images/Logo.png";
import ErrorAlert from "../common/ErrorAlert";
import { getUserDataResponse } from "../../redux/action/user.action";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import RedirectAlert from "../Auth/RedirectAlert";
import { selectorUserData } from "../../redux/store/selector";

const Login = ({ setUserData, userData }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [redirectAlert, setRedirectAlert] = useState(false);
  const [reRender, setRerender] = useState(false);
  const [errors, setErrors] = useState({
    numberEmpty: {
      message: "لطفا شماره خود را وارد نمایید!",
      visible: false,
    },
    passwordEmpty: {
      message: "وارد نمودن گذرواژه الزامیست!",
      visible: false,
    },
    passwordWrong: {
      message: "گذرواژه وارد شده با ایمیل مطابقت ندارد!",
      visible: false,
    },
    noNumber: {
      message: "چنین شماره ای قبلا در سیستم ثبت نشده است!",
      visible: false,
    },
  });
  let history = useHistory();

  useEffect(() => {
    console.log({ usersdata: userData });
    if (userData != {}) {
      history.push("/");
    }
  }, []);

  const onSubmitPress = () => {
    if (phoneNumber == "") {
      errors.numberEmpty.visible = true;
    }
    if (password == "") {
      errors.passwordEmpty.visible = true;
    }
    if (errors.numberEmpty.visible || errors.passwordEmpty.visible) {
      setErrorOpen(true);
      setRerender(!reRender);
      return;
    }

    errors.passwordWrong.visible = false;
    errors.noNumber.visible = false;
    setErrorOpen(false);

    global.showLoader();
    SignIn({ phoneNumber, password })
      .then(async (response) => {
        if (response == "user_not_found") {
          errors.noNumber.visible = true;
          setRerender(!reRender);
          setErrorOpen(true);
          global.hideLoader();
          return;
        } else {
          errors.noNumber.visible = false;
          setRerender(!reRender);
        }

        if (response == "password_not_match") {
          errors.passwordWrong.visible = true;
          setErrorOpen(true);
          setRerender(!reRender);
          global.hideLoader();
          return;
        } else {
          errors.passwordWrong.visible = false;
          setRerender(!reRender);
        }

        setUserData({
          data: response.userData,
          token: response.access_token,
        });
        global.hideLoader();
        setRedirectAlert(true);
        const interval = setInterval(() => {
          history.push("/");
        }, 3000);
      })
      .catch((error) => {
        console.log({ error });
        alert(
          "مشکلی بوجود آمده لطفا از اتصال خود به اینترنت اطمینان حاصل فرمایید!"
        );
      });
  };

  return (
    <div
      style={{ fontFamily: "Lalezar" }}
      className="tw-grid tw-grid-flow-col tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4 tw-h-screen"
    >
      <RedirectAlert
        open={redirectAlert}
        whiteText="با موفقیت"
        greenText="وارد شدید!"
      />
      <div
        className="tw-py-48 xl:tw-px-32 tw-relative"
        style={{ float: "center", textAlign: "center" }}
      >
        <ErrorAlert
          open={errorOpen}
          errors={errors}
          handleClose={() => setErrorOpen(false)}
        />
        <div className="tw-flex tw-justify-center">
          <img src={Logo} className="tw-w-3/12"></img>
        </div>

        <p className="tw-mt-6">ورود به سایت</p>
        <div className=" tw-flex tw-flex-col tw-px-32 tw-py-14">
          <p className="tw-mt-12 tw-text-lg"> :شماره همراه خود راوارد کنید</p>
          <input
            type="text"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
              if (phoneNumber != "") {
                errors.numberEmpty.visible = false;
                setRerender(!reRender);
              }
            }}
            placeholder="09 * * * * * * *"
            className="tw-py-3 tw-text-xl tw-mt-2 tw-text-black tw-outline-none tw-font-bold tw-px-6 tw-mb-8 tw-rounded-xl"
            style={{ border: "1px solid #B4B4B4", fontFamily: "Yekan" }}
          />

          <p className="tw-text-lg"> :گذرواژه</p>
          <input
            type="password"
            placeholder="* * * * * * * * *"
            onChange={(event) => {
              setPassword(event.target.value);
              if (password != "") {
                errors.passwordEmpty.visible = false;
                setRerender(!reRender);
              }
            }}
            value={password}
            className="tw-py-3 tw-text-xl tw-mt-2 tw-text-black tw-outline-none tw-font-bold tw-px-6 tw-mb-8 tw-rounded-xl"
            style={{ border: "1px solid #B4B4B4", fontFamily: "Yekan" }}
          />
          <button
            onClick={onSubmitPress}
            className="tw-mt-6 tw-bg-seyed tw-text-white tw-py-3 tw-rounded-xl tw-text-lg"
          >
            ورود
          </button>
        </div>
      </div>
      <div className="tw-bg-gradient-to-b tw-from-green-900 tw-to-seyed tw-hidden xl:tw-block"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
