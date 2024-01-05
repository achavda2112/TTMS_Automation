module.exports = {
    button: {
        clear: "//*[@label='Clear']",
        cancel: "//*[@label='Cancel']",        
        save: "//*[@label='Save']",        
        authorize: "//*[@label='Authorize']",
        delete: "//*[@label='Delete']",
        fetch: "//*[@label='Fetch']",        
        unAuthorizedList: "//*[@ng-reflect-label='List Unauthorized Changes']",
        search: "//*[@ng-reflect-label='Search']"
},
fields: {
    court: "//*[@id='courtList']",
    ticketNumber: "//*[@id='ticketNumber']",
    idNumberCheckBox: "//*[@formcontrolname='idNumberCheckbox']",
    changeOffence: "//*[@formcontrolname='offenceCheckbox']",
    dlNumber: "//input[@id='changedIDNumber']",
    newOffence: "//*[@id='changedNewOffence']",
    orignalValueexpanded: "//*[@aria-expanded='true']", 
   // changeNmae: "//input[@id='changedName']",
   // address: "//textarea[@id='changedAddress']",
    reason: "//*[@id='reason']",
    comments: "//*[@id='comments']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    courtCases: "//*[@aria-expanded='true']",
    spanTicketNumber: "//span[@id='ticketNumber']",
}
}
