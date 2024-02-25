import express, { Request, Response } from "express";
const imgbbUploader = require("imgbb-uploader");

const imageUploadRouter = express.Router();

imageUploadRouter.post("/upload", async (req: Request, res: Response) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: true, message: "URL is required." });
  }

  const uploadOptions = {
    apiKey: process.env.IMGBB_API_KEY,
    base64string: url,
  };

  try {
    const uploadResponse = await imgbbUploader(uploadOptions);
    console.log(uploadResponse);
    res.status(200).json({
      error: false,
      message: "Image uploaded successfully.",
      link: uploadResponse?.display_url,
    });
  } catch (error) {
    console.log("process.env.IMGBB_API_KEY", process.env.IMGBB_API_KEY);
    console.log(error);
    res.status(500).json({
      error: true,
      message: "Failed to upload image.",
    });
  }
});

export default imageUploadRouter;
