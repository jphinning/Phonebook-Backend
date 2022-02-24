import express from "express";
import v2 from "../config/cloudnary";
const router = express.Router();

router.get('/', async (_req, res) => {
  const { resources } = await v2.search
    .expression('folder:dev_setups')
    .sort_by('public_id', 'asc')
    .max_results(30)
    .execute();

  const publicIds = resources.map((file: { public_id: any; }) => file.public_id);
  res.send(publicIds);
});


router.post('/', async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await v2.uploader.upload(fileStr, {
      upload_preset: 'dev_setups',
      public_id: req.body.id
    });
    res.json({ msg: 'yaya' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

export default router;