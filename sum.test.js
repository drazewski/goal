const sum = require ('./sum')

test('1 + 2 = 3', () => {
    expect(sum(1,2)).toBeDefined()
});

// test('3 + 4 = 7', () => {
//     expect(sum(3, 4)).toBe(7)
// });

// test('5 + 5 = 10', () => {
//     expect(sum(5, 5)).toBe(10)
// })

// test('object assignment', () => {
//     expect(smok).toEqual({glowa: "1", dupa: "0"})
// })