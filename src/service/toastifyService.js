import { toast } from "react-toastify";
const cardCratedToast = () => {
  toast.success("Card was created successfully! Redirecting to homepage", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const loginToast = () => {
  toast.success("You logged in successfully!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export { cardCratedToast, loginToast };
