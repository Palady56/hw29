const weekFn = require("../week")

test("Week 1 should return Понеділок", () => {
  expect(weekFn(1)).toBe("Понеділок")
})

test("Week 3 should return Середа", () => {
  expect(weekFn(3)).toBe("Середа")
})

test("Week 7 should return Неділя", () => {
  expect(weekFn(7)).toBe("Неділя")
})

test("Week 9 should return null", () => {
  expect(weekFn(9)).toBe(null)
})

test("Week 1.5 should return null", () => {
  expect(weekFn(1.5)).toBe(null)
})

test("Week 2 should return Вівторок", () => {
  expect(weekFn(2)).toBe("Вівторок")
})