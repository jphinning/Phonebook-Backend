"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ContactRoute_1 = __importDefault(require("./ContactRoute"));
const UploadImageRoute_1 = __importDefault(require("./UploadImageRoute"));
const router = express_1.default.Router();
router.use('/contact', ContactRoute_1.default);
router.use('/uploadImage', UploadImageRoute_1.default);
exports.default = router;
