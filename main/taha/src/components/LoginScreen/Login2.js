import React, { useState, useRef, useEffect } from "react";
import Logo from "../../images/Logo.png";
import { getUserDataResponse } from "../../redux/action/user.action";
import { connect } from "react-redux";
import { SignUP } from "../../API/SignUp.api";
import RedirectAlert from "../Auth/RedirectAlert";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../common/ErrorAlert";

const Login2 = ({ location, setUserData }) => {
  const firstDigitRef = useRef();
  const secondDigitRef = useRef();
  const thirdDigitRef = useRef();
  const fourthDigitRef = useRef();
  const [firstDigit, setFirstDigit] = useState("");
  const [secondDigit, setSecondDigit] = useState("");
  const [thirdDigit, setThirdDigit] = useState("");
  const [fourthDigit, setFourthDigit] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [redirectAlert, setRedirectAlert] = useState(false);
  const [reRender, setRerender] = useState(false);

  const [errors, setErrors] = useState({
    wrongCode: {
      message: "کد وارد شده صحیح نمی باشد! ",
      visible: false,
    },
    codeEmpty: {
      message: "لطفا چهار رقم را وارد نمایید!",
      visible: false,
    },
  });

  let history = useHistory();
  console.log({ optCode: location.state.optCode });

  console.log({ phone: location.state.phoneNumber });

  useEffect(() => {
    if (
      firstDigit != "" &&
      secondDigit != "" &&
      thirdDigit != "" &&
      fourthDigit != ""
    ) {
      errors.codeEmpty.visible = false;
      setRerender(!reRender);
    }
  }, [firstDigit, secondDigit, thirdDigit, fourthDigit]);

  const onSubmitPress = () => {
    if (
      firstDigit == "" ||
      secondDigit == "" ||
      thirdDigit == "" ||
      fourthDigit == ""
    ) {
      errors.codeEmpty.visible = true;
      setErrorOpen(true);
      setRerender(!reRender);
      return;
    }

    if (
      parseInt("" + firstDigit + secondDigit + thirdDigit + fourthDigit) !=
      location.state.optCode
    ) {
      errors.wrongCode.visible = true;
      setErrorOpen(true);
      setRerender(!reRender);
      return;
    }
    global.showLoader();
    SignUP({
      phoneNumber: location.state.phoneNumber,
      fullName: location.state.fullName,
      password: location.state.password,
    })
      .then(async (response) => {
        // console.log({ response });
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
        console.log({ signUPError: error });
        alert(
          "مشکلی در اتصال بوجود آمده. لطفا اتصال خود به اینترت را بررسی کنید!"
        );
        global.hideLoader();
      });
  };

  return (
    <div
      style={{ fontFamily: "Lalezar" }}
      className="tw-grid tw-grid-flow-col tw-grid-cols-1 lg:tw-grid-cols-2 tw-h-screen"
    >
      <RedirectAlert
        open={redirectAlert}
        whiteText="با موفقیت"
        greenText="وارد شدید!"
      />
      <div
        className="lg:tw-py-64 tw-py-8 tw-relative"
        style={{ textAlign: "center" }}
      >
        <ErrorAlert
          open={errorOpen}
          errors={errors}
          handleClose={() => setErrorOpen(false)}
        />
        <div className="tw-flex tw-justify-center">
          <img
            src={Logo}
            className="tw-mx-auto"
            style={{ width: "150px" }}
          ></img>
        </div>

        <p className="tw-mt-4 tw-text-lg">ورود به سایت</p>
        <div className=" tw-flex tw-flex-col tw-mt-6 xxl:tw-px-28 tw-py-10">
          <p className="tw-mt-8 tw-text-lg rtl">
            کد چهار رقمی برای شما ارسال شد لطفا کد را وارد کنید:
          </p>
          <div className="tw-flex tw-mt-8 tw-justify-between tw-px-8 xxl:tw-px-64">
            <input
              type="text"
              pattern="[0-9]*"
              maxLength={1}
              ref={firstDigitRef}
              value={firstDigit}
              onChange={(event) => {
                if (event.target.value != "") {
                  secondDigitRef.current.focus();
                }
                errors.wrongCode.visible = false;
                setRerender(!reRender);
                setFirstDigit(event.target.value.replace(/\D/, ""));
              }}
              className="tw-text-center tw-w-2/12 tw-rounded-xl tw-py-4"
              style={{ border: "1px solid #B4B4B4" }}
            />
            <input
              ref={secondDigitRef}
              type="text"
              maxLength={1}
              value={secondDigit}
              onChange={(event) => {
                if (secondDigit == "") {
                  firstDigitRef.current.focus();
                }
                errors.wrongCode.visible = false;
                setRerender(!reRender);
                setSecondDigit(event.target.value.replace(/\D/, ""));
                if (event.target.value != "") {
                  thirdDigitRef.current.focus();
                }
              }}
              className="tw-w-2/12 tw-text-center tw-rounded-xl tw-py-4"
              style={{ border: "1px solid #B4B4B4" }}
            />
            <input
              ref={thirdDigitRef}
              type="text"
              value={thirdDigit}
              onChange={(event) => {
                if (thirdDigit == "") {
                  secondDigitRef.current.focus();
                }
                errors.wrongCode.visible = false;
                setRerender(!reRender);
                setThirdDigit(event.target.value.replace(/\D/, ""));
                if (event.target.value != "") {
                  fourthDigitRef.current.focus();
                }
              }}
              className="tw-w-2/12 tw-text-center tw-rounded-xl tw-py-4"
              maxLength={1}
              style={{ border: "1px solid #B4B4B4" }}
            />
            <input
              ref={fourthDigitRef}
              type="text"
              maxLength={1}
              value={fourthDigit}
              onChange={(event) => {
                if (fourthDigit.length == 0 && event.target.value == "") {
                  thirdDigitRef.current.focus();
                }
                errors.wrongCode.visible = false;
                setRerender(!reRender);
                setFourthDigit(event.target.value.replace(/\D/, ""));
              }}
              className="tw-w-2/12 tw-text-center tw-rounded-xl tw-py-4"
              style={{ border: "1px solid #B4B4B4" }}
            />
          </div>
          <button
            onClick={onSubmitPress}
            className="tw-mt-12 tw-mx-8 xxl:tw-mx-64 tw-bg-seyed tw-py-3 tw-rounded-xl tw-text-white tw-text-lg tw-shadow-xl"
          >
            ورود
          </button>
          <a href="#" className="tw-mt-8">
            کد ورود دریافت نکرده اید؟ دریافت مجدد
          </a>
        </div>
      </div>
      <div className="tw-bg-gradient-to-b tw-from-green-900 tw-to-seyed tw-hidden lg:tw-block"></div>
    </div>
  );
};

const mapDispatchToProps = {
  setUserData: getUserDataResponse,
};

export default connect(null, mapDispatchToProps)(Login2);
