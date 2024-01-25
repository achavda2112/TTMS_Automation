module.exports = {
    button: {
        generateReport: "[data-test='generate']"

},
fields: {
    feature: "//*[@id='feature']",
    dateRangeStart: "//*[@formcontrolname='dateRangeFrom']//input",
    dateRangeEnd: "//*[@formcontrolname='dateRangeTo']//input",
    user: "//*[@id='selectedUsers']",
    checkBox: "//div[@role='checkbox']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    errorCode: "[data-test='codeErrorRequired']",
   
}
}