import FormData from "form-data";
import Jimp from "jimp";
import { imgBbApiKey, imgBbBaseApiUrlV1 } from "../../lib/constants";
import { JsonFetchWrapper } from "../../utils";

type PostUploadImageParams = {
  image: string;
  title: string;
};

export const postUploadImage = async ({
  image,
  title,
}: PostUploadImageParams): Promise<string | null> => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("name", title);
  return JsonFetchWrapper<{ data: { url: string } }>(
    `${imgBbBaseApiUrlV1}/upload?key=${imgBbApiKey}`,
    {
      method: "POST",
      body: formData,
    }
  )
    .then(({ data, err }) => {
      if (err instanceof Error) {
        console.log(err.message);
      }
      if (data) {
        return data.data.url;
      } else {
        return null;
      }
    })
    .catch((err) => null);
};
