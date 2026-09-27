const colorMap = { white:['black','blue','beige','grey','brown'], black:['white','blue','beige','grey','brown'], blue:['white','beige','grey','black'], beige:['white','brown','black','blue'], pastel:['white','beige','grey'] };
const desired = { tops:['Bottoms','Shoes','Accessories','Bags'], bottoms:['Tops','Shoes','Accessories'], shoes:['Tops','Bottoms','Accessories'], dresses:['Shoes','Accessories','Bags'] };
const norm = (value = '') => value.toLowerCase();
export const recommend = (selected, products) => {
  const category = norm(selected.categories?.name || selected.category || '');
  const targets = desired[category] || ['Tops','Bottoms','Shoes','Accessories'];
  const colours = colorMap[norm(selected.color)] || ['white','black','beige','grey'];
  const rank = { 'Great Match': 3, 'Good Match': 2, 'Try This': 1 };
  return products.filter(product => product.id !== selected.id && targets.includes(product.categories?.name)).map(product => {
    let points = 0;
    if (norm(product.style) === norm(selected.style)) points += 3;
    if (norm(product.occasion) === norm(selected.occasion)) points += 2;
    if (colours.includes(norm(product.color))) points += 2;
    if (norm(product.season) === norm(selected.season)) points += 1;
    return { ...product, matchLabel: points >= 5 ? 'Great Match' : points >= 3 ? 'Good Match' : 'Try This' };
  }).sort((a, b) => rank[b.matchLabel] - rank[a.matchLabel]);
};