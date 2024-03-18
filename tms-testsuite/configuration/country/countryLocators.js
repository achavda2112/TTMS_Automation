module.exports = {
    button: {
        addCountry: "[data-test='addCountry']",
        saveCountry: "[data-test='save']",
        editCountry: "[data-test='countryEdit']"
    },
    fields: {
        countryCode: "[data-test='code']",
        searchCountry: "[data-test='countrySearch']",
        name: "[data-test='description']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        acceptAlert: "//button[@data-test='okDialog']"
    }
}