var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: 'harish.arora@01s.in',
            pass: 'HR01SYg@31'
        }
    }
);

var mailOptions = {
    from: '"Harish" <harish.arora@01s.in>',
    to: 'harish.arora@01s.in',
    subject: 'Welcome!Trying node mailer',
    text:"hello..i am using node mailer",
    html:`<table style="border:2px solid black">
        <thead>
        </thead>
        <tbody>
             <tr>
            <th>Shipment Id</th>
            <td>${values}</td>
          </tr>

          <tr>
            <th>Customer Name</th>
            <td>JAMES BOND</td>
          </tr>
          <tr>
            <th>PO£</th>
            <td>£PO</td>
          </tr>
          <tr>
            <th>Bill of lading</th>
            <td>BOL</td>
          </tr>
          <tr>
            <th>Charge Type</th>
            <td>REGULAR</td>
          </tr>
          <tr>
              <th>AP amount</th>
              <td>00000</td>
            </tr>
            <tr>
              <th>Portal Name</th>
              <td>123@ABC</td>
            </tr>
            <tr>
              <th>Vendor Name</th>
              <td>ABC</td>
            </tr>
            <tr>
              <th>Disbursement Fee(flat)</th>
              <td>0000.00</td>
            </tr>
            <tr>
              <th>Disbursement Fee(%)</th>
              <td>0000</td>
            </tr>
            <tr>
              <th>Attach Documents</th>
              <td>Attach Documents</td>
            </tr>
            <tr>
              <th>Comments</th>
              <td>Comments</td>
            </tr>
            <tr>
              <th>References</th>
              <td>References</td>
            </tr>
        </tbody>
      </table>
      <a href="https://www.google.com/"
        ><button>
          Approve
        </button></a
      >
      <a href="https://www.google.com/"
        ><button>
          Reject
        </button></a
      >`,
};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error,"error occured");
    }
    console.log('Message sent: ' + info.response);
});
