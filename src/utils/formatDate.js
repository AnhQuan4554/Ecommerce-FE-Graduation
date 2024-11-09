import dayjs from "dayjs";

export const forMatDate = (date) => {
  return dayjs(date).format("YYYY-MM-DD");
};
