const action = require("./action")
// @ponicode
describe("action.action", () => {
    test("0", () => {
        let callFunction = () => {
            action.action()
        }
    
        expect(callFunction).not.toThrow()
    })
})
