
export default function formatCelsiusDegree(value: number) {

  const degrees = new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'celsius',
  });

  return degrees.format(Math.ceil(value));
}
