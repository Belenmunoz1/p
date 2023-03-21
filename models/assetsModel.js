const conexion = require ("../config/db.config");
const handleHttpError = require("../handleHttpError");
const HttpError = require ("../handleHttpError");


const getAllAssetsModel = async  () => {
    try {
    const rows = await conexion
    .query (" SELECT * FROM assets")
    .spread ((rows) => rows);
    return rows ;
   } catch (error) {
    const CustomError = new handleHttpError ("error" , 500);
    return ({
        errorMessage : CustomError.message,
        code: CustomError.errorCode,
    });
   }
};

const getAssetsByIdModel = async (assets_id) => {
   try {
    const rows = await conexion 
    .query ("SELECT * FROM assets where assets_id = ?",[assets_id])
    .spread ((rows) =>rows);
    return rows.length >0 ?rows [0] : [];
   } catch (error){
     const CustomError = new handleHttpError ("error ", 500);
     return ({
        errorMessage : CustomError.mesage ,
        code: CustomError.errorCode,
     });
   }
};

const getAssetsByEmployeeId = async (employee_id) => {
    try {
      const rows = await conexion
     .query("SELECT * FROM assets where employee_id = ?", [employee_id])
     .spread((rows) => rows);
     return rows;
    }catch (error) {
      const CustomError = new HttpError("Error", 500);
      return({
        errorMessage: CustomError.message,
        code: CustomError.errorCode,
      });
    }
  };


const newAssetsModel= async (values) => {
    try {
  const {name, type, code, marca, description, purchase_date, employee_id} = values;
  const result = await conexion
  .query ("INSERT INTO assets (name, type, code, marca, description, purchase_date, employee_id) values (?,?,?,?,?,?,?)",
  [name, type, code, marca, description, purchase_date, employee_id])
  .spread((result) => result);

  return result;
    } catch (error) {
        const CustomError = new handleHttpError ("error",500);
        return ({
            errorMessage : CustomError.message,
            code: CustomError.errorCode,
        });
    }
};

const updateAssetsModel = async (newAssets,oldAssets) => {
    try {
        const assets = {
            ...oldAssets,
            ...newAssets
        }
    const rows = await conexion
    .query('UPDATE assets SET employee_id=?, type=?, code=?, marca=?, description=?, purchase_date=? WHERE assets_id =?',
        [assets.employee_id,assets.type, assets.code, assets.marca, assets.description, assets.purchase_date])
        .spread((rows) =>rows);
    
    return rows;
    } catch (error) {
        const CustomError = new handleHttpError ("error", 500);
        return ({
            errorMessage : CustomError.message,
            code: CustomError.errorCode,
        });
    }
};

const deleteAssetsModel = async (assets_id) => {
    try {
    const rows = await conexion
    .query("DELETE FROM assets WHERE assets_id = ?" , [assets_id])
    .spread((rows) =>rows);
    return rows.length > 0 ? rows [0] : null;
    }catch {
        const CustomError = new handleHttpError ("error", 500);
        return ({
            errorMessage : CustomError.message,
            code: CustomError.errorCode,
        });
    }
};

module.exports = {
    getAllAssetsModel,
    getAssetsByIdModel,
    getAssetsByEmployeeId,
    newAssetsModel,
    updateAssetsModel,
    deleteAssetsModel,
};