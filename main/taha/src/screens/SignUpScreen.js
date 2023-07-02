import React, { useState, useEffect } from "react";
import Logo from "../images/Logo.png";
import ErrorAlert from "../components/common/ErrorAlert";
import { GetPhoneAlreadyExists } from "../API/PhoneAlreadyExists.api";
import { SignUP } from "../API/SignUp.api";
import RedirectAlert from "../components/Auth/RedirectAlert";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { selectorUserData } from "../redux/store/selector";

const SignUpScreen = ({ setUserData, userData }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [redirectAlert, setRedirectAlert] = useState(false);
  const [password, setPassword] = useState("");
  const [reRender, setRerender] = useState(false);
  const [errors, setErrors] = useState({
    phoneNumberِDigit: {
      message: " شماره همراه باید 11 رقمی باشد! ",
      visible: false,
    },
    phoneNumberِZero: {
      message: " شماره همراه باید با صفر اغاز شود!",
      visible: false,
    },
    fullNameEmpty: {
      message: "وارد نمودن نام و نام خانوادگی الزامیست!",
      visible: false,
    },
    passwordEmpty: { message: "وارد نمودن گذرواژه الزامیست!", visible: false },
    phoneAlreadyExist: {
      message: "این شماره قبلا در سیستم ثبت شده!",
      visible: false,
    },
  });

  let history = useHistory();

  useEffect(() => {
    console.log({ usersdata: Object.keys(userData).length });
    if (Object.keys(userData).length !== 0) {
      history.push("/");
    }
  }, []);

  const onSubmitPress = () => {
    if (fullName == "") {
      errors.fullNameEmpty.visible = true;
    }

    if (phoneNumber.length != 11) {
      errors.phoneNumberِDigit.visible = true;
    }

    if (phoneNumber[0] != "0") {
      errors.phoneNumberِZero.visible = true;
    }

    if (password == "") {
      errors.passwordEmpty.visible = true;
    }

    if (
      errors.fullNameEmpty.visible ||
      errors.phoneNumberِZero.visible ||
      errors.phoneNumberِDigit.visible ||
      errors.passwordEmpty.visible
    ) {
      setErrorOpen(true);
      setRerender(!reRender);
      return;
    }

    global.showLoader();
    GetPhoneAlreadyExists(phoneNumber)
      .then(async (response) => {
        if (response.message == "user_not_exist") {
          history.push({
            pathname: "/verify",
            state: { optCode: 3232, phoneNumber, fullName, password },
          });
          global.hideLoader();
        } else {
          errors.phoneAlreadyExist.visible = true;
          setErrorOpen(true);
          setRerender(!reRender);
          global.hideLoader();
        }
      })
      .catch((error) => {
        console.log({ error });
        alert("مشکلی بوجود آمده. لطفا اتصال خود به اینترت را بررسی کنید");
        global.hideLoader();
      });
  };

  return (
    <div>
      <RedirectAlert
        open={redirectAlert}
        whiteText="با موفقیت"
        greenText="انجام شد!"
      />
      <div className="tw-grid tw-grid-cols-2" style={{ fontFamily: "Lalezar" }}>
        <div
          className={`tw-h-screen tw-w-screen tw-flex tw-flex-col tw-relative tw-justify-center tw-px-32 xl:tw-w-full tw-py-40 tw-space-y-4`}
        >
          <ErrorAlert
            open={errorOpen}
            errors={errors}
            handleClose={() => setErrorOpen(false)}
          />
          <img src={Logo} className="tw-mx-auto" style={{ width: "150px" }} />
          <p className="tw-text-center tw-mt-4">
            !یک قدم مانده تا به جمع ما بپیوندید
          </p>
          <div className="tw-flex tw-flex-col tw-justify-center tw-py-12 xxl:tw-px-48 ">
            <p className="tw-text-center">:نام و نام خانوادگی</p>

            <input
              type="text"
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
                if (fullName != "") {
                  errors.fullNameEmpty.visible = false;
                  setRerender(!reRender);
                }
              }}
              placeholder="نام و نام خانوادگی"
              className="tw-px-4 tw-text-xl tw-mt-2 tw-border-2 rtl tw-border-gray-400 tw-pt-3 tw-pb-2 tw-rounded-xl"
            />

            <p className="tw-text-center tw-mt-6">
              :شماره همراه خود را وارد نمایید
            </p>

            <input
              type="text"
              value={phoneNumber}
              placeholder="09 * * * * * * *"
              style={{ fontFamily: "Yekan" }}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
                if (phoneNumber.length == 10 && phoneNumber[0] == "0") {
                  errors.phoneNumberِZero.visible = false;
                  errors.phoneNumberِDigit.visible = false;
                  setRerender(!reRender);
                }
              }}
              placeholder="09 * * * * * * * * *"
              className="tw-px-4 tw-text-xl tw-mt-2 tw-border-2 tw-border-gray-400 tw-py-3 tw-font-bold tw-rounded-xl"
            />
            <p className="tw-mt-6 tw-text-center">
              :رمز یا گذرواژه خود را واردن نمایید
            </p>

            <input
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
                if (password != "") {
                  errors.passwordEmpty.visible = false;
                  setRerender(!reRender);
                }
              }}
              value={password}
              className="tw-px-4  tw-text-xl tw-mt-2 tw-border-2 tw-border-gray-400 tw-py-2 tw-rounded-xl"
            />

            <button
              onClick={onSubmitPress}
              className="tw-bg-seyed tw-shadow-xl tw-text-white tw-py-3 tw-mt-12 xl:tw-px-8 tw-rounded-xl"
            >
              ثبت نام
            </button>

            <p className="tw-mt-6 tw-text-center">یا</p>

            <button className="tw-bg-white tw-border-2 tw-border-seyed tw-text-seyed tw-shadow-xl tw-text-white tw-py-3 tw-mt-5 tw-px-8 tw-rounded-xl">
              ورود با نام کاربری
            </button>
          </div>
        </div>
        <div className="tw-bg-gradient-to-b tw-from-green-900 tw-to-seyed tw-hidden xl:tw-block"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: selectorUserData(state),
  };
};

export default connect(mapStateToProps, null)(SignUpScreen);
