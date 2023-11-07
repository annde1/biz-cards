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

const loginToast = () => {};
export { cardCratedToast };
