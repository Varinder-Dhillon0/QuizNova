import axiosInstance from "@utils/axios";
import { API_URLS } from "@shared/constants/ApiUrls.constants";

export default function fetch() {
  const result = async () =>
    await axiosInstance.post(API_URLS.AUTH.FETCH, {
      fetchthis: "ok",
    });

  return <div></div>;
}
