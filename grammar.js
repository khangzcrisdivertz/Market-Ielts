// ============================================================
//  grammar.js – Logic chấm điểm ngữ pháp bằng Gemini AI
//  API key được giấu ở đây, người dùng không cần nhập tay
// ============================================================

// ⚠️  Đặt API key của bạn vào đây (lấy miễn phí tại aistudio.google.com)
const GEMINI_API_KEY = "AIzaSyA8sSjhAWEw_IS6Bn6KspBH-xK6XGH8y6o";

// ------- Đếm ký tự khi gõ -------
const textarea = document.getElementById('userText');
const charCount = document.getElementById('charCount');
textarea.addEventListener('input', () => {
  charCount.textContent = textarea.value.length;
});

// ------- Hàm chính: gọi AI chấm điểm -------
async function checkGrammar() {
  const text = document.getElementById('userText').value.trim();
  const errBox = document.getElementById('errorBox');

  // Reset trạng thái cũ
  errBox.style.display = 'none';
  document.getElementById('result-section').style.display = 'none';

  // Kiểm tra đầu vào
  if (!text) { showError('Vui lòng nhập đoạn văn bản cần kiểm tra.'); return; }

  setLoading(true);

  // Câu lệnh gửi cho AI: yêu cầu trả về đúng định dạng
  const prompt = `You are an expert English grammar evaluator for IELTS preparation.

Analyze the following text and respond ONLY in this exact format (no extra text):

SCORE: [number from 0 to 10]
GRADE: [one of: Excellent / Good / Average / Needs Improvement]
SUMMARY: [one short sentence describing the overall quality]
FEEDBACK:
[Detailed bullet-pointed feedback about grammar errors, suggestions for improvement, and what was done well. Use "•" for bullets.]

Text to analyze:
"""
${text}
"""`;

  try {
    // Gửi yêu cầu lên Gemini API
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message || `Lỗi API: ${res.status}`);
    }

    const data = await res.json();
    const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    parseAndDisplay(raw);

  } catch (e) {
    showError(e.message || 'Có lỗi xảy ra. Kiểm tra lại API key và thử lại.');
  } finally {
    setLoading(false);
  }
}

// ------- Phân tích kết quả AI và hiển thị lên màn hình -------
function parseAndDisplay(raw) {
  const scoreMatch = raw.match(/SCORE:\s*(\d+(?:\.\d+)?)/i);
  const gradeMatch = raw.match(/GRADE:\s*(.+)/i);
  const summaryMatch = raw.match(/SUMMARY:\s*(.+)/i);
  const feedbackMatch = raw.match(/FEEDBACK:\s*([\s\S]*)/i);

  const score = scoreMatch ? parseFloat(scoreMatch[1]) : null;
  const grade = gradeMatch ? gradeMatch[1].trim() : 'N/A';
  const summary = summaryMatch ? summaryMatch[1].trim() : '';
  const feedback = feedbackMatch ? feedbackMatch[1].trim() : raw;

  // Cập nhật vòng tròn điểm số
  const circle = document.getElementById('scoreCircle');
  circle.className = 'score-circle ' + gradeClass(score);
  document.getElementById('scoreNum').textContent = score !== null ? score : '?';

  // Cập nhật hạng và mô tả
  const gradeEl = document.getElementById('scoreGrade');
  gradeEl.textContent = grade;
  gradeEl.style.color = gradeColor(score);

  document.getElementById('scoreCaption').textContent = summary;
  document.getElementById('feedbackBody').textContent = feedback;

  // Hiện phần kết quả và cuộn xuống
  document.getElementById('result-section').style.display = 'block';
  document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ------- Xác định class màu theo điểm -------
function gradeClass(score) {
  if (score === null) return '';
  if (score >= 8.5) return 'grade-excellent'; // Xanh lá
  if (score >= 7) return 'grade-good';      // Xanh dương
  if (score >= 5) return 'grade-average';   // Vàng
  return 'grade-poor';                         // Đỏ
}

// ------- Xác định màu chữ hạng theo điểm -------
function gradeColor(score) {
  if (score === null) return '#fff';
  if (score >= 8.5) return '#22c55e';
  if (score >= 7) return '#60a5fa';
  if (score >= 5) return '#facc15';
  return '#f87171';
}

// ------- Hiển thị hộp lỗi -------
function showError(msg) {
  const box = document.getElementById('errorBox');
  document.getElementById('errorMsg').textContent = msg;
  box.style.display = 'block';
}

// ------- Bật/tắt trạng thái loading -------
function setLoading(on) {
  const btn = document.getElementById('checkBtn');
  const icon = document.getElementById('btnIcon');
  const text = document.getElementById('btnText');
  const spinner = document.getElementById('spinner');
  btn.disabled = on;
  spinner.style.display = on ? 'block' : 'none';
  icon.style.display = on ? 'none' : 'inline';
  text.textContent = on ? 'Đang phân tích...' : 'Chấm điểm bằng AI';
}
