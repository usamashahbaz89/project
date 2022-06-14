import express from "express";
import { deletedata, getdata, updatedata} from "../controllers/controllers.js";
import { postdata } from "../controllers/controllers.js";

const router = express.Router(); 

router.get("/", getdata);

router.post("/", postdata);

router.delete("/delete", deletedata);

router.patch("/update", updatedata);

//router.post("/signup", postsignup)



export default router;