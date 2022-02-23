import express from "express";
import ContactController from "../controllers/ContactController";

const router = express.Router();

router.get('/', async (_req, res) => {
  const controller = new ContactController();
  const response = await controller.getContacts();

  return res.send(response);
});

router.post('/', async (req, res) => {
  const controller = new ContactController();
  const response = await controller.createContact(req.body);

  return res.send(response);
});

router.get('/:id', async (req, res) => {

  try {
    const controller = new ContactController();
    const response = await controller.getContact(req.params.id);

    if (!response) return res.status(404).send({ message: 'No user found' });

    return res.send(response);

  } catch (error) {
    res.status(400).send({ message: 'error' });
  }

});

router.put('/:id', async (req, res) => {

  try {
    const controller = new ContactController();
    const response = await controller.updateContact(req.params.id, req.body);

    if (!response) return res.status(404).send({ message: 'No user found' });

    return res.send(response);

  } catch {
    res.status(400).send({ message: 'error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const controller = new ContactController();
    const response = await controller.deleteContact(req.params.id);

    if (!response) return res.status(404).send({ message: 'No user found' });

    return res.send(response);

  } catch (error) {
    res.status(400).send({ message: 'error' });
  }
});

export default router;