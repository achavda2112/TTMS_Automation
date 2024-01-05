module.exports = {
    button: {
        addMechanicaldefecttype: "[data-test='addMechanicalDefectType']",
        saveMechanicaldefecttype: "[data-test='save']",
        editMechanicaldefecttype: "[data-test='mechanicalDefectTypeEdit']"
    },
    fields: {
        mechanicaldefecttypeDescription: "[data-test='description']",
        searchMechanicaldefecttype: "[data-test='mechanicalDefectTypeSearch']",
        mechanicaldefecttypeCode: "[data-test='code']",
        tddescription: 'td#description',
        errorCode: "[data-test='codeErrorRequired']",
        statusType: "[data-test='status']",
        inactiveStatus: "//*[@id='status']/p-inputswitch/div/span",
        valueSelect: "//ul[contains(@class, 'p-dropdown-items')]",
        acceptAlert: "//button[@data-test='okDialog']",
    }
}