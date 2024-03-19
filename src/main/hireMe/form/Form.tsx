import React, {ChangeEvent, useContext, useState} from "react";
import styles from "./Form.module.scss";
import mail from "../../../common/images/hireMe/mail.svg";
import {Context} from "../../../App";
import {ShowModalType} from "../HireMe";
import spinner from "../../../common/images/form/spinner.svg";
import axios from "axios";

type FormPropsType = {
  showModal: (isShow: ShowModalType) => void;
};

type TErrorType = null | "nameError" | "mailError" | "messageError";
type TInputType = "email" | "message" | "name";

const Form = ({showModal}: FormPropsType) => {
  let langActive = useContext(Context);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState<TErrorType>(null);

  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setError(null);
    setEmail("");
    setName("");
    setMessage("");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    inputType: TInputType
  ) => {
    if (inputType === "email") {
      setEmail(e.currentTarget.value);
      if (error === "mailError") {
        setError(null);
      }
    }
    if (inputType === "name") {
      setName(e.currentTarget.value);
      if (error === "nameError") {
        setError(null);
      }
    }
    if (inputType === "message") {
      setMessage(e.currentTarget.value);
      if (error === "messageError") {
        setError(null);
      }
    }
  };

  const onSubmit = async () => {
    if (!email) {
      return setError("mailError");
    }
    if (!name) {
      return setError("nameError");
    }
    if (!message) {
      return setError("messageError");
    }
    if (error) {
      return;
    }
    console.log(process.env);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      setIsLoading(true);
      await axios.post(process.env.REACT_APP_MAIL_URL ?? "", formData);
      showModal("showSuccess");
      resetForm();
    } catch (error) {
      showModal("showError");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  let nameErrorClass = error === "nameError" ? styles.error : "";
  let nameMailClass = error === "mailError" ? styles.error : "";
  let messageErrorClass = error === "messageError" ? styles.error : "";

  return (
    <div className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.inputBlock}>
          <span className={styles.nameErrorMsg + " " + nameErrorClass}>
            {langActive === "rus"
              ? "Некорректно введено имя"
              : "Incorrect name"}
          </span>
          <label className="sr-only" htmlFor="name">
            name input field
          </label>
          <input
            className={`${styles.input} ${styles.nameInput} ${nameErrorClass}`}
            type="text"
            id="name"
            value={name}
            onChange={(e) => handleChange(e, "name")}
            placeholder={langActive === "rus" ? "Ваше имя" : "Your name"}
          />

          <span className={styles.mailErrorMsg + " " + nameMailClass}>
            {langActive === "rus"
              ? "Некорректно введен email"
              : "Incorrect email"}
          </span>
          <label className="sr-only" htmlFor="email">
            mail input field
          </label>
          <input
            className={`${styles.input} ${nameMailClass}`}
            type="text"
            value={email}
            onChange={(e) => handleChange(e, "email")}
            id="email"
            placeholder={langActive === "rus" ? "Ваша почта" : "Your mail"}
          />
        </div>
        <div className={styles.textAreaBlock}>
          <span className={styles.messageErrorMsg + " " + messageErrorClass}>
            {langActive === "rus"
              ? "Некорректно введено сообщение"
              : "Incorrect message"}
          </span>
          <label className="sr-only" htmlFor="message">
            message input field
          </label>
          <textarea
            className={`${styles.input} ${styles.textArea} ${messageErrorClass}`}
            value={message}
            onChange={(e) => handleChange(e, "message")}
            id="message"
            placeholder={
              langActive === "rus" ? "Текст Вашего сообщения" : "Your message"
            }
          />
        </div>
      </div>
      <button disabled={isLoading} className={styles.btn} onClick={onSubmit}>
        {isLoading ? (
          <img src={spinner} className={styles.spinner} alt={"spinner"} />
        ) : (
          <>
            <img className={styles.mailImg} src={mail} alt="mail" />
            <span>{langActive === "rus" ? "Отправить" : "Send"}</span>
          </>
        )}
      </button>
    </div>
  );
};

export default Form;
