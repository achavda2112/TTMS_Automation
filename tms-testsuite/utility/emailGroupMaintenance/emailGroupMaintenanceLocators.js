module.exports = {
    button: {
        back: "//*[@ng-reflect-label='Back']",
        addorg: "//*[@ng-reflect-label='Add']",
        add: "//*[@ng-reflect-label='Add']",
        save: "//*[@ng-reflect-label='Save']",
        update: "//*[@ng-reflect-label='Update']",

},
fields: {
    action: "//td[@id='action']//button",
    status: "//span[@id='status']//p-inputswitch",
    search: "//*[@placeholder='Search by Name, Username, Email']",
    searchlist: "//*[@placeholder='Search by Name, Description']",
    checkBox: "//div[@aria-checked='false']",
    name: "//*[@data-test='name']",
    description: "//*[@data-test='description']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",
    ok: "//*[@label='Ok']",
    statusinactive: "//*[@id='status']",
    organization: "//*[@id='organization']",
    user: "//*[@id='users']",
    deleteuser: "//*[@id='action']//button",
    cancel: "//*[@ng-reflect-label='Cancel']",
    errorCode: "[data-test='codeErrorRequired']"
}
}