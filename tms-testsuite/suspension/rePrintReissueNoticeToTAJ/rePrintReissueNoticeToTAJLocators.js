module.exports = {
    button: {
        generateNotice: "//*[@label='Generate Notices']",
        clear: "//*[@label='Clear']",
        search: "//*[@label='Search']",
        print: "//*[@label='Print']",

},
fields: {
    printDateStart: "//*[@inputid='printDateFrom']//input",
    printDateEnd: "//*[@inputid='printDateTo']//input",
    dlNumber: "//input[@id='dlNumber']",
    collectorate: "//*[@id='collectorate']",
    checkBox: "//*[@inputid='binary']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    ok: "//*[@data-test='okDialog']",
}
}