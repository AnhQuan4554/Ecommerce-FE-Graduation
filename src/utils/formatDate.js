import dayjs from "dayjs";

export const forMatDate = (date) => {
  return dayjs(date).format("YYYY-MM-DD");
};

export const formatDateFromString = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
