const testScore = {
  matematika : 70,
  bahasa_inggris : 80,
  bahasa_indonesia : 90,
  ipa : 70
}

function testResult ({matematika, bahasa_indonesia, bahasa_inggris, ipa})  {
  const totalScore = matematika + bahasa_indonesia + bahasa_inggris + ipa
  const scoreAverage = totalScore/4
  return `Total Skor : ${totalScore}
  Rata-rata : ${scoreAverage}`
}

const hasil = testResult(testScore)

console.log(hasil)

