import {classNames} from "./classNames";

describe("classNames", () => {

    test("with only first param", () => {
        expect(classNames("someClass")).toBe("someClass");
    })

    test(("with additional class"), () => {
        expect(classNames("someClass", {}, ["additionalClass"])).toBe("someClass additionalClass");
    })

    test("with mods", () => {
        expect(classNames("someClass", {hovered: true, scrollable: true}, ["class1", "class2"])).toBe("someClass class1 class2 hovered scrollable");
    })

    test("with mods and additional class", () => {
        expect(classNames("someClass", {hovered: true, scrollable: true}, ["class1", "class2"])).toBe("someClass class1 class2 hovered scrollable");
    })

    test("with mods and false value", () => {
        expect(classNames("someClass", {hovered: false, scrollable: true}, ["class1", "class2"])).toBe("someClass class1 class2 scrollable");
    })

    test("with mods and undefined value", () => {
        expect(classNames("someClass", {hovered: undefined, scrollable: true}, ["class1", "class2"])).toBe("someClass class1 class2 scrollable");
    })
})
