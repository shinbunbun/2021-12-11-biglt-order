const { SHA3 } = require('sha3');

const arr5 = [
  'Tk',
  '土鍋',
  'sou7',
  'matumoto1234',
  'マヤミト',
  'すず',
];

const arr10 = [
  'Endered',
  '朱雀匠',
  'eraser5th',
  'tashiro',
  'しんぶんぶん',
];

const arr = [arr5, arr10];

for (let q = 0; q < 2; q += 1) {
  const hashArr = [];
  const teamObj = {};
  const hash = new SHA3(512);

  for (let i = 0; i < arr[q].length; i += 1) {
    hash.update(arr[q][i]);
    hashArr.push(hash.digest('hex').toString());
    teamObj[hash.digest('hex')] = arr[q][i];
    hash.reset();
  }

  hashArr.sort();

  for (let i = 0; i < hashArr.length; i += 1) {
    if (q === 0) {
      console.log(`学生枠5分枠発表順${i + 1}: ${teamObj[hashArr[i]]}`);
    } else {
      console.log(`学生枠10分枠発表順${i + 1}: ${teamObj[hashArr[i]]}`);
    }
  }
}
