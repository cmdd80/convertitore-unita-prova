// Ogni unità indica la grandezza a cui appartiene e il fattore
// per passare all'unità base della grandezza (per le lunghezze: mm).
// Le unità di temperatura usano toBase/fromBase perché la conversione non è lineare.
export const UNITS = {
  mm: { quantity: 'lunghezza', factor: 1 },
  cm: { quantity: 'lunghezza', factor: 10 },
  m: { quantity: 'lunghezza', factor: 1000 },
  in: { quantity: 'lunghezza', factor: 25.4 },
  ft: { quantity: 'lunghezza', factor: 304.8 },
  Nm: { quantity: 'coppia', factor: 1 },
  'lbf-ft': { quantity: 'coppia', factor: 1.3558179 },
  'lbf-in': { quantity: 'coppia', factor: 0.1129848 },
  kPa: { quantity: 'pressione', factor: 1 },
  MPa: { quantity: 'pressione', factor: 1000 },
  bar: { quantity: 'pressione', factor: 100 },
  psi: { quantity: 'pressione', factor: 6.894757 },
  C: {
    quantity: 'temperatura',
    toBase: (v) => v + 273.15,
    fromBase: (v) => v - 273.15,
  },
  F: {
    quantity: 'temperatura',
    toBase: (v) => (v - 32) * (5 / 9) + 273.15,
    fromBase: (v) => (v - 273.15) * (9 / 5) + 32,
  },
  K: {
    quantity: 'temperatura',
    toBase: (v) => v,
    fromBase: (v) => v,
  },
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

  const base = source.toBase ? source.toBase(value) : value * source.factor;
  const result = target.fromBase ? target.fromBase(base) : base / target.factor;
  return round(result);
}

function round(n) {
  const scale = 10 ** DECIMALS;
  return Math.round(n * scale) / scale;
}
