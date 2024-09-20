const pool=require('../db')
const query=require('./queries')

const getAllCustomer=(req,res)=>{
    //console.log("getAllCustoer");
    pool.query(query.getAllCustomers,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};
const getDataByCustomerId=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(query.getDataByCustomer,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};
const addUpdateCustomerReport=(req,res)=>{
    // console.log("api");
     //console.log(query.addUpdateQuery(req.body));
    pool.query(query.addUpdateQuery(req.body),(error,results)=>{
        if(error) throw error;
        //console.log(res.status);
        res.status(200).json(results.rows);
        //console.log(results.rows);

    })
}
const getAllReportData=(req,res)=>{
    //console.log(query.getAllReportData);
    pool.query(query.getAllReportData,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}
module.exports={getAllCustomer,
    getDataByCustomerId,
    addUpdateCustomerReport,
    getAllReportData,
};