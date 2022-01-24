'use strict';

var server = require('server');

var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');

// server.extend(module.superModule);

// server.append('Show', function (req, res, next) {
//     var viewData = res.getViewData();
     
//     viewData.example = "One string"
     
//     res.setViewData(viewData);
 
//     return next();
// });

server.get('HelloWorld', function (req, res, next) {
    // var myvariable = "Just a string";

    // mens/accessories/ties/?lang=en_US
    // ?cgid=mens-accessories-ties
    // res.render("training/myfirsttemplate", { myvariable: myvariable });

    // res.render("training/myfirsttemplate", { myvariable: myvariable });
    // var ProductSearchModel = require('dw/catalog/ProductSearchModel');

    var ProductMgr = require('dw/catalog/Product');
    
    let products = new ProductMgr();
    let test = 234234;
    // var searchHelper = require('*/cartridge/scripts/helpers/searchHelpers');
    // var template = "training/myfirsttemplate";
    // var apiProductSearch = new ProductSearchModel();
   
    // var viewData = {
    //     apiProductSearch: apiProductSearch
    // };

    // res.setViewData(viewData);
    
    // //this.on('route:BeforeComplete', function (req, res) { // eslint-disable-line no-shadow
    
    // //});

    // var result = searchHelper.search(req, res);

    // if (result.searchRedirect) {
    //     res.redirect(result.searchRedirect);
    //     return;
    // }

    // if (result.category && result.categoryTemplate) {
    //     template = result.categoryTemplate;
    // }

    // res.render(template, {
    //     productSearch: result.productSearch,
    //     maxSlots: result.maxSlots,
    //     reportingURLs: result.reportingURLs,
    //     refineurl: result.refineurl,
    //     category: result.category ? result.category : null,
    //     canonicalUrl: result.canonicalUrl,
    //     schemaData: result.schemaData
    // });

    next();
}, pageMetaData.computedPageMetaData);

module.exports = server.exports();