export default function invert(hex) {
    const symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    const col = hex.toString().replace(/^#/, "").split("");
    let inverted = "#";
    for (const index in col) {
      if (symbols.includes(col[index])){
        const inverted_letter = symbols[15 - parseInt(col[index], 16)];
        inverted += inverted_letter;
      }
      else {
        console.warn('Not a valid hexcode')
        return '#ffffff';
      } 
    }
    return inverted;
  }