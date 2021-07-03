import Jimp from "jimp";
import { imgurBaseApiUrlV3, imgurClientID } from "../../lib/constants";
import { JsonFetchWrapper } from "../../utils";

type PostUploadImageParams = {
  image: string;
  title: string;
};

export const postUploadImage = async ({
  image,
  title,
}: PostUploadImageParams): Promise<string | null> => {
  return JsonFetchWrapper<{
    data: {
      link: string;
    };
  }>(`${imgurBaseApiUrlV3}/image`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Client-ID ${imgurClientID}`,
    },

    body: {
      image,
      type: "base64",
      title,
    },
  })
    .then(({ data, err }) => {
      if (data) {
        return data.data.link;
      } else {
        return null;
      }
    })
    .catch((err) => null);
};
