const out = document.getElementById('output');
document.getElementById('generate').addEventListener('click', () => {
  const len = +document.getElementById('length').value;
  const useLower = document.getElementById('lowercase').checked;
  const useUpper = document.getElementById('uppercase').checked;
  const useNum   = document.getElementById('numbers').checked;
  const useSym   = document.getElementById('symbols').checked;

  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = lower.toUpperCase();
  const nums  = '0123456789';
  const syms  = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  let chars = '';
  if (useLower) chars += lower;
  if (useUpper) chars += upper;
  if (useNum)   chars += nums;
  if (useSym)   chars += syms;
  if (!chars) {
    return alert('Select at least one character set.');
  }

  let pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += chars[Math.floor(Math.random() * chars.length)];
  }

  out.innerHTML = `
    <input type="text" readonly value="${pwd}" id="pwd">
    <button id="copy">Copy</button>
  `;
  document.getElementById('copy').onclick = () => {
    navigator.clipboard.writeText(pwd);
    alert('Copied to clipboard');
  };
});