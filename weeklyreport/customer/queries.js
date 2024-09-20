const getAllCustomers="SELECT * from customer";
const getDataByCustomer = `
  SELECT * FROM weekly_report_customer wrc 
  WHERE customer_id = $1 AND status='Active'
  ORDER BY weekstarttime
`;
const addUpdateQuery = (customerData) => {
  let returnStr = "";

  if (customerData.report_id == 0) {
    // Insert query for a new weekly report
    returnStr = `INSERT INTO weekly_report_customer 
    (customer_id, top_highlights, top_lowlights, help_needed_ongoing, next_steps, upcoming_milestones, upload_weekly_presentation,weekstarttime,weekendtime) 
    VALUES (
      ${customerData.customer_id}, 
      '${customerData.top_highlights}', 
      '${customerData.top_lowlights}', 
      '${customerData.help_needed_ongoing}', 
      '${customerData.next_steps}', 
      '${customerData.upcoming_milestones}', 
      '${customerData.upload_weekly_presentation}',
      '${customerData.weekstarttime}',
      '${customerData.weekendtime}'

    )`;
  } else {
    // Update query for an existing weekly report
    returnStr = `UPDATE weekly_report_customer 
    SET 
      top_highlights = '${customerData.top_highlights}', 
      top_lowlights = '${customerData.top_lowlights}', 
      help_needed_ongoing = '${customerData.help_needed_ongoing}', 
      next_steps = '${customerData.next_steps}', 
      upcoming_milestones = '${customerData.upcoming_milestones}', 
      upload_weekly_presentation = '${customerData.upload_weekly_presentation}' 
    WHERE report_id = ${customerData.report_id}`;
  }
  returnStr+=" RETURNING *";

  return returnStr;
};
const getAllReportData=`SELECT * FROM weekly_report_customer where status='Active' ORDER BY customer_id`;






module.exports={
    getAllCustomers,
    getDataByCustomer,
    addUpdateQuery,
    getAllReportData,
}