import dayjs from "dayjs";

const DEFAULT_FORMAT = "YYYY.MM.DD HH:mm:ss";

export default function(input, format) {
  format = format || DEFAULT_FORMAT;

  return dayjs(input).format(format);
}
