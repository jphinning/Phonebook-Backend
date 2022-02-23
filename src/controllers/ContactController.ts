import { Body, Delete, Get, Path, Post, Put, Route, Tags } from "tsoa";
import { ContactModel } from "../models";
import { IContactPayload, ContactRepository } from "../repositories/ContactRepository";

@Route('contact')
@Tags('Contact')
export default class ContactController {
  @Get('/')
  public async getContacts(): Promise<Array<ContactModel>> {
    return new ContactRepository().getContacts();
  }

  @Post('/')
  public async createContact(@Body() body: IContactPayload): Promise<ContactModel> {
    return new ContactRepository().createContact(body);
  }

  @Get('/:id')
  public async getContact(@Path() id: string): Promise<ContactModel | null> {
    return new ContactRepository().getContact(Number(id));
  }

  @Put('/:id')
  public async updateContact(@Path() id: string, @Body() body: IContactPayload): Promise<ContactModel | null> {
    return new ContactRepository().updateContact(Number(id), body);
  }

  @Delete('/:id')
  public async deleteContact(@Path() id: string) {
    return new ContactRepository().deleteContact(Number(id));
  }
}