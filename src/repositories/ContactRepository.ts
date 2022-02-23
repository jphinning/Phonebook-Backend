import { getRepository } from "typeorm";
import { ContactModel } from "../models/ContactModel";

export interface IContactPayload {
  name: string,
  telephone: string,
  email: string,
}

export class ContactRepository {

  public async getContacts(): Promise<Array<ContactModel>> {
    const contactRepo = getRepository(ContactModel);

    return contactRepo.find();
  }

  public async createContact(payload: IContactPayload): Promise<ContactModel> {
    const contactRepo = getRepository(ContactModel);
    const contact = new ContactModel();

    return contactRepo.save({
      ...contact,
      ...payload,
    });
  }

  public async getContact(id: number): Promise<ContactModel | null> {
    const contactRepo = getRepository(ContactModel);
    const contact = await contactRepo.findOne({ id: id });

    if (!contact) return null;

    return contact
  }

  public async updateContact(id: number, payload: IContactPayload): Promise<ContactModel | null> {
    const contactRepo = getRepository(ContactModel);
    const contact = await this.getContact(id);

    if (!contact) return null;

    return contactRepo.save({
      ...contact,
      ...payload,
    });
  }

  public async deleteContact(id: number) {
    const contactRepo = getRepository(ContactModel);
    const contact = await contactRepo.delete(id);

    if (!contact) return null;

    return contact;
  }

}