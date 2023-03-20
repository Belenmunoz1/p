const assetsRouter = require("express").Router();

// / importamos las const de los controllers
const{ getAllAssets,getAssetsById,getAssetsByEmployeeId,newAssets,updateAssets,deleteAssets} = require ("../controllers/assetsController")





// rutas de los assets

assetsRouter.get("/", getAllAssets);
assetsRouter.get("/:asset_id",getAssetsById);
assetsRouter.get("/emplid/:employee_id",getAssetsByEmployeeId);
assetsRouter.post("/new",newAssets);
assetsRouter.put("/update/:asset_id",updateAssets);
assetsRouter.delete("/delete/:asset_id",deleteAssets);



module.exports=assetsRouter;