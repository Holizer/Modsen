// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears === 0) return [0, 0, 0];

  const ageMap = {
    cat: [15, 9, 4],
    dog: [15, 9, 5],
  };

  const convert = (years, [firstYear, secondYear, restYears]) => {
    if (years === 1) return firstYear;
    if (years === 2) return firstYear + secondYear;
    return firstYear + secondYear + (years - 2) * restYears;
  }

  return [
    humanYears,
    convert(humanYears, ageMap.cat),
    convert(humanYears, ageMap.dog),
  ];
}
