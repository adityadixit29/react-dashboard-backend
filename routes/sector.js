import express from "express"
import {getMySector,getMyRelevance,getMyTopic,getMyYear,alldata} from "../controller/sector.js";


const router = express.Router();

router.get('/sectorvsintenvslike',getMySector);
router.get('/sectorvsrelevance',getMyRelevance);
router.get('/RegionInsights',getMyTopic);
router.get('/sectorrelevance',getMyYear);
router.get('/alldata',alldata);

export default router