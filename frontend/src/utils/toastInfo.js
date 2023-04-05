import { toast } from "react-toastify";
// import { user } from "../constants/profileUser";

export const paidToast = () =>
  toast.error("Bạn cần nâng cấp gói thành viên để tiếp tục");

export const needLoginToast = () => {
  // if (!user.userId)
  toast.error("Bạn cần đăng nhập để tiếp tục");
};

export const sendSuccessfully = () => {
  toast.success("Gửi câu trả lời thành công");
};

export const sendSaleInfoSuccessfully = () => {
  toast.success("Chúng tôi sẽ liên hệ với bạn trong giây lát!");
};
