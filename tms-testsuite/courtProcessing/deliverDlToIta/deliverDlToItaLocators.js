module.exports = {
    button: {
        submitAndPrint: "//*[@label='Submit & Print']",
        clear: "//*[@label='Clear']",
},
fields: {
    court: "//*[@id='courtList']",
    deliveryDate: "//*[@formcontrolname='deliveryDate']//input",
    checkBox: "//div[@aria-checked='false']",
    valueSelect: "//ul[contains(@class, 'p-dropdown-item')]",

}
}