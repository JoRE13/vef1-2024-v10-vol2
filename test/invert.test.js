import invert from '../lib/invert';

test('Invert hexcode #fedcba into hexcode #012345', () => {
    expect(invert('#fedcba')).toBe('#012345');
});

test('Invert hexcode of non valid code is white i.e. hexcode #ffffff', () => {
    expect(invert('Hello world')).toBe('#ffffff');
});