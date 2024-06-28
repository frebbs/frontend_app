import express from "express";
const router = express.Router();

import {rootController_GET, rootController_POST} from "../../controller/root/rootController.js";

// GET Routers
router.get("/", rootController_GET.home);
router.get("/contact", rootController_GET.contact);
router.get("/about", rootController_GET.about);
router.get("/listUsers", rootController_GET.listUsers);

// POST Routers

router.post('/saveUser', rootController_POST.saveUser);

export default router;