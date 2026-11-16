// Ogni unità indica la grandezza a cui appartiene e il fattore
// per passare all'unità base della grandezza (per le lunghezze: mm).
export const UNITS = {
  mm: { quantity: 'lunghezza', factor: 1 },
  cm: { quantity: 'lunghezza', factor: 10 },
  m: { quantity: 'lunghezza', factor: 1000 },
  in: { quantity: 'lunghezza', factor: 25.4 },
  ft: { quantity: 'lunghezza', factor: 304.8 },
  kPa: { quantity: 'pressione', factor: 1 },
  MPa: { quantity: 'pressione', factor: 1000 },
  bar: { quantity: 'pressione', factor: 100 },
  psi: { quantity: 'pressione', factor: 6.894757 },
};

const DECIMALS = 3;

export function convert(value, from, to) {
  const source = UNITS[from];
  const target = UNITS[to];

  if (!source) throw new Error(`Unità non supportata: ${from}`);
  if (!target) throw new Error(`Unità non supportata: ${to}`);
  if (source.quantity !== target.quantity) {
    throw new Error(`Impossibile convertire ${from} in ${to}`);
  }

  return round((value * source.factor) / target.factor);
}

function round(n) {
  const scale = 10 ** DECIMALS;
  return Math.trunc(n * scale) / scale;
}
