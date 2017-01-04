mcc
=========

Node module to get Merchant Category Codes (MCC)

### API
`javascript
var api = require('mcc');
api("0742"); // api("742") & api(742) also works
// { mcc: '0742',
//  edited_description: 'Veterinary Services',
//  combined_description: 'Veterinary Services',
//  usda_description: 'Veterinary Services',
//  irs_description: 'Veterinary Services',
//  irs_reportable: 'Yes',
//  id: 0 }

`

### Fields
* Derived MCC - mcc
* edited_description - manually edited, modern text
* combined_description - uses either USDA or IRS
* usda_description - Description from the USDA
* irs_description - Description from IRS
* irs_reportable - Reportable under 6041/6041A and Authority for Exception

