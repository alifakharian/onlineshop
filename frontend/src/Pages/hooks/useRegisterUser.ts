import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { verifyUserCode } from "../Api/Userpannel";
import { setCode } from "../redex/Register";

export const useVerifyUser = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: verifyUserCode,
    onSuccess: (data) => {
      dispatch(setCode(data.code));
    },
  });
};
