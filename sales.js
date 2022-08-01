var salesCategoryDataSource = [
    {"text": "", "value": ""},
    {"text": "Oxygen(O2)", "value": "1"},
    {"text": "Nitrogen(N2)", "value": "2"},
    {"text": "Carbon Dioxide(CO2)", "value": "3"},
    {"text": "Argon(Ar)", "value": "4"},
    {"text": "Acetylene(C2H2)", "value": "5"},
    {"text": "Other", "value": "0"},
]
var salesWeightDataSource = [
    {"text": "", "value": ""},
    {"text": "15", "value": "15"},
    {"text": "20", "value": "20"},
    {"text": "48", "value": "48"},
    {"text": "Other", "value": "0"},
]
var newSalesDate = $("#newSalesDate").kendoDatePicker({
    format: "MM/dd/yyyy"
}).data('kendoDatePicker');
var newSalesName = $("#newSalesName").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: []
  }).data('kendoDropDownList');
var newSalesCategory = $("#newSalesCategory").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: salesCategoryDataSource
  }).data('kendoDropDownList');
var newSalesWeight = $("#newSalesWeight").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: salesWeightDataSource
  }).data('kendoDropDownList');
var newSalesQuantity = $("#newSalesQuantity").kendoTextBox().data('kendoTextBox');
var newSalesRemark = $("#newSalesRemark").kendoTextArea().data('kendoTextArea');
var newSalesCategory2 = $("#newSalesCategory2").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: salesCategoryDataSource
  }).data('kendoDropDownList');
var newSalesWeight2 = $("#newSalesWeight2").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: salesWeightDataSource
  }).data('kendoDropDownList');
var newSalesQuantity2 = $("#newSalesQuantity2").kendoTextBox().data('kendoTextBox');
var newSalesRemark2 = $("#newSalesRemark2").kendoTextArea().data('kendoTextArea');
var newSalesCategory3 = $("#newSalesCategory3").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: salesCategoryDataSource
  }).data('kendoDropDownList');
var newSalesWeight3 = $("#newSalesWeight3").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: salesWeightDataSource
  }).data('kendoDropDownList');
var newSalesQuantity3 = $("#newSalesQuantity3").kendoTextBox().data('kendoTextBox');
var newSalesRemark3 = $("#newSalesRemark3").kendoTextArea().data('kendoTextArea');
var newSalesCategory4 = $("#newSalesCategory4").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: salesCategoryDataSource
  }).data('kendoDropDownList');
var newSalesWeight4 = $("#newSalesWeight4").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: salesWeightDataSource
  }).data('kendoDropDownList');
var newSalesQuantity4 = $("#newSalesQuantity4").kendoTextBox().data('kendoTextBox');
var newSalesRemark4 = $("#newSalesRemark4").kendoTextArea().data('kendoTextArea');
var newSalesCategory5 = $("#newSalesCategory5").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: salesCategoryDataSource
  }).data('kendoDropDownList');
var newSalesWeight5 = $("#newSalesWeight5").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: salesWeightDataSource
  }).data('kendoDropDownList');
var newSalesQuantity5 = $("#newSalesQuantity5").kendoTextBox().data('kendoTextBox');
var newSalesRemark5 = $("#newSalesRemark5").kendoTextArea().data('kendoTextArea');
var newSalesCategory6 = $("#newSalesCategory6").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: salesCategoryDataSource
  }).data('kendoDropDownList');
var newSalesWeight6 = $("#newSalesWeight6").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: salesWeightDataSource
  }).data('kendoDropDownList');
var newSalesQuantity6 = $("#newSalesQuantity6").kendoTextBox().data('kendoTextBox');
var newSalesRemark6 = $("#newSalesRemark6").kendoTextArea().data('kendoTextArea');
var newSalesFormValidator = $("#newSalesForm").kendoValidator().data('kendoValidator');
var newSalesWindow = $("#newSalesWindow").kendoWindow({
    actions: ["Maximize", "Minimize", "Close"],
    draggable: true,
    height: "auto",
    modal: true,
    pinned: false,
    resizable: false,
    title: "New Sales",
    width: "800px",
    open: function(e) {
        $('#newSalesForm')[0].reset();
        newSalesFormValidator.reset();
    }
}).data('kendoWindow');
newSalesWindow.center();

var editSalesId = $("#editSalesId").kendoTextBox().data('kendoTextBox');
var editSalesDate = $("#editSalesDate").kendoDatePicker({
    format: "MM/dd/yyyy"
}).data('kendoDatePicker');
var editSalesCustomerId = $("#editSalesCustomerId").kendoTextBox().data('kendoTextBox');
var editSalesName = $("#editSalesName").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: []
  }).data('kendoDropDownList');
var editSalesCategoryId = $("#editSalesCategoryId").kendoTextBox().data('kendoTextBox');
var editSalesCategory = $("#editSalesCategory").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: [
        {"text": "", "value": ""},
        {"text": "Oxygen(O2)", "value": "1"},
        {"text": "Nitrogen(N2)", "value": "2"},
        {"text": "Carbon Dioxide(CO2)", "value": "3"},
        {"text": "Argon(Ar)", "value": "4"},
        {"text": "Acetylene(C2H2)", "value": "5"},
        {"text": "Other", "value": "0"},
    ]
  }).data('kendoDropDownList');
var editSalesWeight = $("#editSalesWeight").kendoDropDownList({
    dataTextField: "text",
    dataValueField: "value",
    dataSource: [
        {"text": "", "value": ""},
        {"text": "15", "value": "15"},
        {"text": "20", "value": "20"},
        {"text": "48", "value": "48"},
        {"text": "Other", "value": "0"},
    ]
  }).data('kendoDropDownList');
var editSalesQuantity = $("#editSalesQuantity").kendoTextBox().data('kendoTextBox');
var editSalesRemark = $("#editSalesRemark").kendoTextArea().data('kendoTextArea');
var editSalesFormValidator = $("#editSalesForm").kendoValidator().data('kendoValidator');
var editSalesWindow = $("#editSalesWindow").kendoWindow({
    actions: ["Maximize", "Minimize", "Close"],
    draggable: true,
    height: "auto",
    modal: true,
    pinned: false,
    resizable: false,
    title: "Edit Sales",
    width: "500px",
    close: function(e) {
        editSalesFormValidator.reset();
    }
}).data('kendoWindow');
editSalesWindow.center();


$("#salesBtn").click(function(){
    $("#customerInfo").hide();
    $("#salesInfo").show();
    $("#returnInfo").hide();
    $("#historyInfo").hide();
    getAllSales();
});

$("#newSalesBtn").click(function() {
    populateCustomerDropDownList(newSalesName,null);
    newSalesWindow.open();
});

$("#saveNewSalesBtn").click(function() {
    if (newSalesFormValidator.validate()) {
        saveNewSales();
        newSalesWindow.close();
        myAlert('Sales','Successfully saved!');        
        // getAllSales(); // 此方法移到saveEditSales()以確保執行順序
    }
});

$("#saveEditSalesBtn").click(function() {
    if (editSalesFormValidator.validate()) {
        saveEditSales();
        editSalesWindow.close();
        myAlert('Sales','Successfully updated!');        
        // getAllSales(); // 此方法移到saveEditSales()以確保執行順序
    }
});

function openEditSalesWindow(){
    populateCustomerDropDownList(editSalesName,editSalesCustomerId.value());
    editSalesName.value(editSalesCustomerId.value());
    editSalesWindow.open();
}

var record = 0;
var salesDataSource = {
    data: [
        { id: 1, date: "2017/05/28", name: "GEG", category: "Oxygen(O2)", weight: "20", quantity: "5", totalWeight: "100", remark: "smart!" }
    ],
    schema: {
        model: { id : "id", categoryId: "categoryId", customerId: "customerId" }
    },  
    batch: true,
    pageSize: 5,
    autoSync: true
}
var salesGrid = $("#salesGrid").kendoGrid({
    columns: [
        {
            title: "No.",
            template: "#= ++record #",
            width: 60
        }, {
            field: "date",
            title: "Date"
        }, {
            field: "name",
            title: "Name/Company"
        }, {
            field: "category",
            title: "Product Category"
        },{
            field: "weight",
            title: "Gas Weight(KG)"
        },{
            field: "quantity",
            title: "Cylinders Qty"
        },{
            field: "totalWeight",
            title: "Total Gas Weight(KG)"
        },{
            field: "remark",
            title: "Remark"
        },
        { command: [{
            name: "Edit",
            click: function(e) {
                e.preventDefault();// prevent page scroll position change
                var tr = $(e.target).closest("tr"); // get the current table row (tr)
                var data = this.dataItem(tr);
                editSalesId.value(data.id);
                editSalesDate.value(data.date);
                editSalesCustomerId.value(data.customerId);
                editSalesCategoryId.value(data.categoryId);
                editSalesCategory.value(data.categoryId);
                editSalesWeight.value(data.weight);
                editSalesQuantity.value(data.quantity);
                editSalesRemark.value(data.remark); 
                openEditSalesWindow();
            }
          }]
       }
    ],
    dataSource: salesDataSource,
    pageable: {
      pageSizes: true
    },
    sortable: {
        mode: "single",
        allowUnsort: false
    },
    toolbar: ["search"],
    search: {
        fields: [
            { name: "id", operator: "equal" },
            { name: "date", operator: "contains" },
            { name: "name", operator: "contains" },
            { name: "category", operator: "contains" },
            { name: "weight", operator: "equal" },
            { name: "quantity", operator: "equal" },
            { name: "totalWeight", operator: "equal" },
            { name: "remark", operator: "contains" }
        ]
    },
    dataBinding: function() {
        record = (this.dataSource.page() -1) * this.dataSource.pageSize();
    }
}).data("kendoGrid");


function saveNewSales() {
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'gas';
        var date = kendo.toString(newSalesDate.value(), 'MM/dd/yyyy');
        var customerId = newSalesName.value();
        var categoryId = newSalesCategory.value();
        var category = newSalesCategory.text();
        var weight = newSalesWeight.value();
        var quantity = newSalesQuantity.value();
        var remark = newSalesRemark.value();
        var sql = `insert into ${table} values('${date}',${customerId},${categoryId},'${category}',${weight},${quantity},1,'${remark}',GETDATE(),NULL) `
        if(newSalesCategory2.value()!="" && newSalesWeight2.value()!="" && newSalesQuantity2.value()!="")
        {
            sql += `insert into ${table} values('${date}',${customerId},${newSalesCategory2.value()},'${newSalesCategory2.text()}',${newSalesWeight2.value()},${newSalesQuantity2.value()},1,'${newSalesRemark2.value()}',GETDATE(),NULL) `
        }
        if(newSalesCategory3.value()!="" && newSalesWeight3.value()!="" && newSalesQuantity3.value()!="")
        {
            sql += `insert into ${table} values('${date}',${customerId},${newSalesCategory3.value()},'${newSalesCategory3.text()}',${newSalesWeight3.value()},${newSalesQuantity3.value()},1,'${newSalesRemark3.value()}',GETDATE(),NULL) `
        }
        if(newSalesCategory4.value()!="" && newSalesWeight4.value()!="" && newSalesQuantity4.value()!="")
        {
            sql += `insert into ${table} values('${date}',${customerId},${newSalesCategory4.value()},'${newSalesCategory4.text()}',${newSalesWeight4.value()},${newSalesQuantity4.value()},1,'${newSalesRemark4.value()}',GETDATE(),NULL) `
        }
        if(newSalesCategory5.value()!="" && newSalesWeight5.value()!="" && newSalesQuantity5.value()!="")
        {
            sql += `insert into ${table} values('${date}',${customerId},${newSalesCategory5.value()},'${newSalesCategory5.text()}',${newSalesWeight5.value()},${newSalesQuantity5.value()},1,'${newSalesRemark5.value()}',GETDATE(),NULL) `
        }
        if(newSalesCategory6.value()!="" && newSalesWeight6.value()!="" && newSalesQuantity6.value()!="")
        {
            sql += `insert into ${table} values('${date}',${customerId},${newSalesCategory6.value()},'${newSalesCategory6.text()}',${newSalesWeight6.value()},${newSalesQuantity6.value()},1,'${newSalesRemark6.value()}',GETDATE(),NULL) `
        }
        request.query(sql).then(function (recordSet) {
            console.log('insert success')
            getAllSales(); //在此呼叫以確保執行順序
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}

function saveEditSales(){
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'gas';
        var id = editSalesId.value();
        var date = kendo.toString(editSalesDate.value(), 'MM/dd/yyyy');
        var customerId = editSalesName.value();
        var categoryId = editSalesCategory.value();
        var category = editSalesCategory.text();
        var weight = editSalesWeight.value();
        var quantity = editSalesQuantity.value();
        var remark = editSalesRemark.value();
        var sql = `update ${table} set date='${date}',customerId=${customerId},categoryId=${categoryId},category='${category}',weight=${weight},quantity=${quantity},type=1,remark='${remark}',modifyDate=GETDATE() where id=${id}`
        request.query(sql).then(function (recordSet) {
            console.log('update success')
            getAllSales(); //在此呼叫以確保執行順序
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}

function getAllSales(){
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table1 = 'customer'
        var table2 = 'gas'
        var sql = `select g.id, CONVERT(VARCHAR(20),g.date,101) as date, g.customerId, c.name as name, g.categoryId, g.category, g.weight, g.quantity, g.weight*g.quantity as totalWeight, g.remark from ${table1} as c inner join ${table2} as g on c.id = g.customerId where g.type = 1`
        request.query(sql).then(function (recordSet) {
            console.log('query success');
            
            // reset datagrid
            salesGrid.dataSource.data([]);
            salesGrid.setDataSource([]);
            var salesDataSource = {
                data: recordSet.recordset,
                schema: {
                    model: { categoryId: "categoryId", customerId: "customerId" }
                },  
                batch: true,
                pageSize: 5,
                autoSync: true
            }
            salesGrid.setDataSource(salesDataSource);
            salesGrid.refresh();
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}

function populateCustomerDropDownList(dropDownList, selectedValue){
    var dbConn = new mssql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        var request = new mssql.Request(dbConn);
        var table = 'customer'
        var sql = `select id,name from ${table}`
        dropDownList.setDataSource([]);
        dropDownList.dataSource.add({
            "text": "", 
            "value": ""});
        request.query(sql).then(function (recordSet) {
          for(const record of recordSet.recordset){
            dropDownList.dataSource.add({
                "text": record.name,
                "value": record.id});
          }
            dropDownList.value(selectedValue);
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}

function changeSelectedValue(dropDownList){
    dropDownList.value(editSalesCustomerId.value());
}