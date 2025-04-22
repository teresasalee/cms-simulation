document.getElementById('cmsForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const studentId = document.getElementById('studentId').value;
  const className = document.getElementById('class').value;
  const caseType = document.getElementById('caseType').value;
  const score = parseInt(document.getElementById('score').value, 10);

  let suggestion = '';

  if (score >= 0 && score <= 10) {
    suggestion = '建議：居家服務 + 輔具';
  } else if (score > 10 && score <= 20) {
    suggestion = '建議：日間照顧 + 輔具';
  } else if (score > 20) {
    suggestion = '建議：機構照顧 + 輔具';
  } else {
    suggestion = '請輸入有效的分數';
  }

  document.getElementById('result').innerHTML = `
    <h2>評估結果</h2>
    <p>姓名：${name}</p>
    <p>學號：${studentId}</p>
    <p>班級：${className}</p>
    <p>個案類型：${caseType}</p>
    <p>評估分數：${score}</p>
    <p>${suggestion}</p>
  `;
});
