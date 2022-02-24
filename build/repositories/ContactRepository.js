"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRepository = void 0;
const typeorm_1 = require("typeorm");
const ContactModel_1 = require("../models/ContactModel");
class ContactRepository {
    getContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            const contactRepo = (0, typeorm_1.getRepository)(ContactModel_1.ContactModel);
            return contactRepo.find();
        });
    }
    createContact(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const contactRepo = (0, typeorm_1.getRepository)(ContactModel_1.ContactModel);
            const contact = new ContactModel_1.ContactModel();
            return contactRepo.save(Object.assign(Object.assign({}, contact), payload));
        });
    }
    getContact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const contactRepo = (0, typeorm_1.getRepository)(ContactModel_1.ContactModel);
            const contact = yield contactRepo.findOne({ id: id });
            if (!contact)
                return null;
            return contact;
        });
    }
    updateContact(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const contactRepo = (0, typeorm_1.getRepository)(ContactModel_1.ContactModel);
            const contact = yield this.getContact(id);
            if (!contact)
                return null;
            return contactRepo.save(Object.assign(Object.assign({}, contact), payload));
        });
    }
    deleteContact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const contactRepo = (0, typeorm_1.getRepository)(ContactModel_1.ContactModel);
            const contact = yield contactRepo.delete(id);
            if (!contact)
                return null;
            return contact;
        });
    }
}
exports.ContactRepository = ContactRepository;
