# mcc

### Node module to get Merchant Category Codes (MCC)

[![version](https://img.shields.io/npm/v/mcc.svg?style=flat-square)](http://npm.im/mcc)
[![downloads](https://img.shields.io/npm/dm/mcc.svg?style=flat-square)](http://npm-stat.com/charts.html?package=mcc&from=2017-01-04)
[![MIT License](https://img.shields.io/npm/l/mcc.svg?style=flat-square)](http://opensource.org/licenses/MIT)


### API
```javascript
var api = require('mcc');
api.get("0742"); // api.get("742") & api.get(742) also works
/* 
{ 
  mcc: '0742',
  edited_description: 'Veterinary Services',
  combined_description: 'Veterinary Services',
  usda_description: 'Veterinary Services',
  irs_description: 'Veterinary Services',
  irs_reportable: 'Yes',
  id: 0 
}
*/

api.all;
// returns array of all merchant category codes


// returns all mcc ids for given emoji
api.getByEmoji('🏈');
/*
[ 7941, 7997, 7999, 5655, 5941 ]
*/
```

### Fields
* Derived MCC - mcc
* edited_description - manually edited, modern text
* combined_description - uses either USDA or IRS
* usda_description - Description from the USDA
* irs_description - Description from IRS
* irs_reportable - Reportable under 6041/6041A and Authority for Exception