module.exports = {
    button: {
        clear: "//*[@label='Clear']",
        generateList: "//*[@label='Generate List']",
        generateBulkWarrant: "//*[@label='Generate Bulk Warrant']",

},
fields: {
    court: "//*[@id='courtList']",
    courtDateFrom: "//*[@inputid='courtDateFrom']//input",
    courtDateTo: "//*[@inputid='courtDateEnd']//input",
    numberOfRecordsTOBeFetched: "//*[@id='noOfRecords']",
    courtSlot: "//*[@id='slot']",
    hearing: "//*[@id='hearingTypeList']",
    courtDecision: "//*[@id='courtDecision']",
    plea: "//*[@id='pleaList']",
    parishJudge: "//*[@id='magistrate']",
    warrantType: "//*[@id='warrantType']",
    isSendToSignEasy: "//*[@id='isSendToSignEasy']",
    comment: "//*[@id='comment']",
    ok: "//*[@data-test='okDialog']",
    cancel: "//*[@data-test='cancelDialog']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",

}
}