module.exports = {
    button: {
        addPolicerank: "[data-test='addPoliceRank']",
        savePolicerank: "[data-test='save']",
        editPolicerank: "[data-test='policeRankEdit']"
    },
    fields: {
        policerankCode: "[data-test='code']",
        searchPolicerank: "[data-test='policeRankSearch']",
        description: "[data-test='description']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@label='Ok']"
    }
}