import rgb from '../lib/rgb';

test('Turns hexcode #37cc5f into rgb value (55, 204, 95)', () => {
    expect(rgb('#37cc5f')).toBe('55, 204, 95');
});