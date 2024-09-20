const {Router}=require("express");
const custController=require('./controller')
const router=Router();
router.get('/report/all',custController.getAllReportData);
router.get('/',custController.getAllCustomer);
router.get('/report/:id',custController.getDataByCustomerId);
router.post('/report/:id',custController.addUpdateCustomerReport);

module.exports=router;

