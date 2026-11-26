'use strict';

/* ---------------- Categories & budgets ---------------- */
var CATEGORIES = [
  { id: 'makanan',   name: 'Makanan',   color: '#e76f51' },
  { id: 'transport', name: 'Transport', color: '#2a9d8f' },
  { id: 'tagihan',   name: 'Tagihan',   color: '#4361ee' },
  { id: 'belanja',   name: 'Belanja',   color: '#9b5de5' },
  { id: 'kesehatan', name: 'Kesehatan', color: '#219ebc' },
  { id: 'hiburan',   name: 'Hiburan',   color: '#ef5da8' },
  { id: 'lainnya',   name: 'Lainnya',   color: '#8d99ae' }
];
var INCOME_CAT = { id: 'income', name: 'Income', color: '#1e9e6a' };

var BUDGETS = {
  makanan: 3200000, transport: 1200000, tagihan: 5600000, belanja: 1800000,
  kesehatan: 900000, hiburan: 1000000, lainnya: 600000
};

/* ---------------- Seed data: November 2026 (IDR) ---------------- */
var SEED_TXS = [
  { id: 't01', date: '2026-11-01', desc: 'Monthly salary — product studio', cat: 'income', type: 'income', amount: 18500000 },
  { id: 't02', date: '2026-11-01', desc: 'Apartment rent', cat: 'tagihan', type: 'expense', amount: 3500000 },
  { id: 't03', date: '2026-11-02', desc: 'Groceries — weekly market run', cat: 'makanan', type: 'expense', amount: 485000 },
  { id: 't04', date: '2026-11-02', desc: 'Music & video streaming', cat: 'hiburan', type: 'expense', amount: 86000 },
  { id: 't05', date: '2026-11-03', desc: 'Fuel — Pertamax, full tank', cat: 'transport', type: 'expense', amount: 300000 },
  { id: 't06', date: '2026-11-04', desc: 'Donation — neighbourhood fund', cat: 'lainnya', type: 'expense', amount: 200000 },
  { id: 't07', date: '2026-11-05', desc: 'Electricity bill (PLN)', cat: 'tagihan', type: 'expense', amount: 685000 },
  { id: 't08', date: '2026-11-05', desc: 'Water bill (PDAM)', cat: 'tagihan', type: 'expense', amount: 145000 },
  { id: 't09', date: '2026-11-06', desc: 'BPJS health insurance', cat: 'kesehatan', type: 'expense', amount: 350000 },
  { id: 't10', date: '2026-11-07', desc: 'Family dinner — ramen place', cat: 'makanan', type: 'expense', amount: 275000 },
  { id: 't11', date: '2026-11-08', desc: 'Home internet', cat: 'tagihan', type: 'expense', amount: 459000 },
  { id: 't12', date: '2026-11-08', desc: 'Mobile phone credit', cat: 'tagihan', type: 'expense', amount: 150000 },
  { id: 't13', date: '2026-11-09', desc: 'Groceries — supermarket', cat: 'makanan', type: 'expense', amount: 620000 },
  { id: 't14', date: '2026-11-09', desc: 'Cinema tickets for two', cat: 'hiburan', type: 'expense', amount: 150000 },
  { id: 't15', date: '2026-11-10', desc: 'E-toll top-up', cat: 'transport', type: 'expense', amount: 150000 },
  { id: 't16', date: '2026-11-11', desc: 'Clothing — work shirts', cat: 'belanja', type: 'expense', amount: 749000 },
  { id: 't17', date: '2026-11-12', desc: 'Freelance design project', cat: 'income', type: 'income', amount: 3200000 },
  { id: 't18', date: '2026-11-12', desc: 'Savings account interest & cashback', cat: 'income', type: 'income', amount: 150000 },
  { id: 't19', date: '2026-11-13', desc: 'Home goods — storage boxes', cat: 'belanja', type: 'expense', amount: 325000 },
  { id: 't20', date: '2026-11-14', desc: 'Ride-hailing — airport trip', cat: 'transport', type: 'expense', amount: 185000 },
  { id: 't21', date: '2026-11-15', desc: 'Coffee beans & café meet-up', cat: 'makanan', type: 'expense', amount: 180000 },
  { id: 't22', date: '2026-11-15', desc: 'Board game night supplies', cat: 'hiburan', type: 'expense', amount: 120000 },
  { id: 't23', date: '2026-11-16', desc: 'Groceries — weekly market run', cat: 'makanan', type: 'expense', amount: 540000 },
  { id: 't24', date: '2026-11-17', desc: 'Fuel — Pertamax', cat: 'transport', type: 'expense', amount: 250000 },
  { id: 't25', date: '2026-11-18', desc: 'Pharmacy — vitamins & medicine', cat: 'kesehatan', type: 'expense', amount: 120000 },
  { id: 't26', date: '2026-11-19', desc: 'Shoes — running shoes', cat: 'belanja', type: 'expense', amount: 599000 },
  { id: 't27', date: '2026-11-20', desc: 'Concert ticket — jazz festival', cat: 'hiburan', type: 'expense', amount: 450000 },
  { id: 't28', date: '2026-11-20', desc: 'Fresh produce — farmers market', cat: 'makanan', type: 'expense', amount: 390000 },
  { id: 't29', date: '2026-11-21', desc: 'Parking — mall & office', cat: 'transport', type: 'expense', amount: 65000 },
  { id: 't30', date: '2026-11-22', desc: 'Birthday gift for Mother', cat: 'belanja', type: 'expense', amount: 250000 },
  { id: 't31', date: '2026-11-23', desc: 'Groceries — weekly market run', cat: 'makanan', type: 'expense', amount: 455000 },
  { id: 't32', date: '2026-11-24', desc: 'Pet supplies — cat food & litter', cat: 'lainnya', type: 'expense', amount: 160000 },
  { id: 't33', date: '2026-11-25', desc: 'Stationery & printing', cat: 'lainnya', type: 'expense', amount: 75000 }
];

var SEED_GOALS = [
  { id: 'g1', icon: '🛟', name: 'Emergency fund', target: 30000000, saved: 18500000, note: 'Six months of essentials' },
  { id: 'g2', icon: '✈️', name: 'Family trip to Yogyakarta', target: 8000000, saved: 5600000, note: 'Planned for the school holidays' },
  { id: 'g3', icon: '💻', name: 'New work laptop', target: 15000000, saved: 6750000, note: 'Replacing the 2021 machine' },
  { id: 'g4', icon: '🛠️', name: 'Kitchen renovation', target: 25000000, saved: 4000000, note: 'Saving a little every month' }
];

/* ---------------- State (in-memory only) ----------------
   The hosting policy forbids cookies and service workers; this demo keeps
   all state in page memory so the site works fully from the seed data and
   every interaction is live for the whole session without any storage. */
var state = loadState();
var viewMonth = '2026-11';
var editingId = null;
var pendingDeleteId = null;
var activeGoalId = null;
var txCounter = 1000;

function loadState() {
  return {
    txs: SEED_TXS.map(function (t) { return Object.assign({}, t); }),
    goals: SEED_GOALS.map(function (g) { return Object.assign({}, g); })
  };
}
function saveState() {
  /* State lives in memory for this session; nothing to persist. */
}

/* ---------------- Formatting helpers ---------------- */
var MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function fmtIDR(n) {
  var neg = n < 0;
  var digits = String(Math.round(Math.abs(n)));
  var grouped = '';
  while (digits.length > 3) {
    grouped = '.' + digits.slice(-3) + grouped;
    digits = digits.slice(0, -3);
  }
  return (neg ? '−Rp ' : 'Rp ') + digits + grouped;
}
function fmtShort(n) {
  if (Math.abs(n) >= 1000000) {
    var v = n / 1000000;
    return 'Rp ' + (Math.round(v * 10) / 10).toString().replace('.', ',') + ' jt';
  }
  if (Math.abs(n) >= 1000) return 'Rp ' + Math.round(n / 1000) + ' rb';
  return fmtIDR(n);
}
function monthKeyOf(dateStr) { return dateStr.slice(0, 7); }
function monthLabel(key) {
  var y = parseInt(key.slice(0, 4), 10);
  var m = parseInt(key.slice(5, 7), 10);
  return MONTHS[m - 1] + ' ' + y;
}
function fmtDate(dateStr) {
  var d = parseInt(dateStr.slice(8, 10), 10);
  var m = parseInt(dateStr.slice(5, 7), 10);
  var y = dateStr.slice(0, 4);
  return d + ' ' + MONTHS_SHORT[m - 1] + ' ' + y;
}
function catById(id) {
  if (id === 'income') return INCOME_CAT;
  for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i];
  return CATEGORIES[CATEGORIES.length - 1];
}
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function monthTxs(key) {
  return state.txs.filter(function (t) { return monthKeyOf(t.date) === key; });
}
function sumBy(list, type) {
  return list.reduce(function (acc, t) { return t.type === type ? acc + t.amount : acc; }, 0);
}
function catTotals(list) {
  var totals = {};
  CATEGORIES.forEach(function (c) { totals[c.id] = 0; });
  list.forEach(function (t) { if (t.type === 'expense') totals[t.cat] = (totals[t.cat] || 0) + t.amount; });
  return totals;
}

/* ---------------- Summary ---------------- */
function renderSummary() {
  var list = monthTxs(viewMonth);
  var income = sumBy(list, 'income');
  var expense = sumBy(list, 'expense');
  var allIncome = sumBy(state.txs, 'income');
  var allExpense = sumBy(state.txs, 'expense');
  var totalBudget = CATEGORIES.reduce(function (a, c) { return a + (BUDGETS[c.id] || 0); }, 0);
  var remaining = totalBudget - expense;

  document.getElementById('monthLabel').textContent = monthLabel(viewMonth);
  document.getElementById('statBalance').textContent = fmtIDR(allIncome - allExpense);
  document.getElementById('statBalanceSub').textContent =
    state.txs.length + ' transactions tracked in total';
  document.getElementById('statIncome').textContent = fmtIDR(income);
  document.getElementById('statIncomeSub').textContent =
    list.filter(function (t) { return t.type === 'income'; }).length + ' income entries in ' + monthLabel(viewMonth);
  document.getElementById('statExpense').textContent = fmtIDR(expense);
  document.getElementById('statExpenseSub').textContent =
    totalBudget > 0 ? Math.round(expense / totalBudget * 100) + '% of the monthly budget used' : 'No budget set';
  var remEl = document.getElementById('statRemaining');
  remEl.textContent = fmtIDR(remaining);
  remEl.style.color = remaining < 0 ? '#d64545' : '';
  document.getElementById('statRemainingSub').textContent =
    income > 0 ? 'Savings rate this month: ' + Math.max(0, Math.round((income - expense) / income * 100)) + '%' : 'Add income to see the savings rate';
}

/* ---------------- Donut chart (SVG) ---------------- */
function polar(cx, cy, r, angleDeg) {
  var a = (angleDeg - 90) * Math.PI / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}
function arcPath(cx, cy, rOuter, rInner, startAngle, endAngle) {
  var p1 = polar(cx, cy, rOuter, startAngle), p2 = polar(cx, cy, rOuter, endAngle);
  var p3 = polar(cx, cy, rInner, endAngle), p4 = polar(cx, cy, rInner, startAngle);
  var large = (endAngle - startAngle) > 180 ? 1 : 0;
  return 'M ' + p1[0].toFixed(2) + ' ' + p1[1].toFixed(2) +
    ' A ' + rOuter + ' ' + rOuter + ' 0 ' + large + ' 1 ' + p2[0].toFixed(2) + ' ' + p2[1].toFixed(2) +
    ' L ' + p3[0].toFixed(2) + ' ' + p3[1].toFixed(2) +
    ' A ' + rInner + ' ' + rInner + ' 0 ' + large + ' 0 ' + p4[0].toFixed(2) + ' ' + p4[1].toFixed(2) + ' Z';
}
function renderDonut() {
  var totals = catTotals(monthTxs(viewMonth));
  var total = CATEGORIES.reduce(function (a, c) { return a + totals[c.id]; }, 0);
  var chart = document.getElementById('donutChart');
  var legend = document.getElementById('donutLegend');
  document.getElementById('donutSub').textContent = monthLabel(viewMonth) + ' · ' + fmtIDR(total) + ' spent';
  if (total === 0) {
    chart.innerHTML = '<svg width="190" height="190" viewBox="0 0 190 190" aria-hidden="true"><circle cx="95" cy="95" r="70" fill="none" stroke="#eee7d6" stroke-width="26"/></svg>';
    legend.innerHTML = '<li>No expenses recorded for this month yet.</li>';
    return;
  }
  var angle = 0, paths = '';
  CATEGORIES.forEach(function (c) {
    var v = totals[c.id];
    if (v <= 0) return;
    var sweep = v / total * 360;
    var end = angle + Math.max(sweep - 1.2, 0.5);
    paths += '<path d="' + arcPath(95, 95, 84, 56, angle, end) + '" fill="' + c.color + '"><title>' + esc(c.name) + ': ' + esc(fmtIDR(v)) + '</title></path>';
    angle += sweep;
  });
  chart.innerHTML =
    '<svg width="190" height="190" viewBox="0 0 190 190" aria-hidden="true">' + paths +
    '<text x="95" y="90" text-anchor="middle" font-size="12" fill="#5b6b7f" font-weight="600">TOTAL SPENT</text>' +
    '<text x="95" y="112" text-anchor="middle" font-size="16" fill="#1d2735" font-weight="800">' + esc(fmtShort(total)) + '</text></svg>';
  legend.innerHTML = CATEGORIES.filter(function (c) { return totals[c.id] > 0; })
    .sort(function (a, b) { return totals[b.id] - totals[a.id]; })
    .map(function (c) {
      return '<li><span class="dot" style="background:' + c.color + '"></span>' + esc(c.name) +
        '<span class="amt">' + esc(fmtShort(totals[c.id])) + '</span></li>';
    }).join('');
}

/* ---------------- Weekly bar chart ---------------- */
function renderWeekly() {
  var list = monthTxs(viewMonth).filter(function (t) { return t.type === 'expense'; });
  var weeks = [0, 0, 0, 0, 0];
  list.forEach(function (t) {
    var day = parseInt(t.date.slice(8, 10), 10);
    weeks[Math.min(4, Math.floor((day - 1) / 7))] += t.amount;
  });
  var max = Math.max.apply(null, weeks.concat([1]));
  var html = '';
  weeks.forEach(function (v, i) {
    var h = Math.max(3, Math.round(v / max * 120));
    html += '<div class="week-col"><span class="week-val">' + (v > 0 ? esc(fmtShort(v)) : '—') + '</span>' +
      '<div class="week-bar" style="height:' + h + 'px"></div>' +
      '<span class="week-lab">Week ' + (i + 1) + '</span></div>';
  });
  document.getElementById('weeklyChart').innerHTML = html;
  var topWeek = weeks.indexOf(Math.max.apply(null, weeks));
  var insight = document.getElementById('weeklyInsight');
  if (list.length === 0) {
    insight.textContent = 'No spending recorded for this month yet — a clean slate.';
  } else {
    var totals = catTotals(monthTxs(viewMonth));
    var topCat = CATEGORIES[0];
    CATEGORIES.forEach(function (c) { if (totals[c.id] > totals[topCat.id]) topCat = c; });
    insight.textContent = 'Heaviest spending lands in Week ' + (topWeek + 1) + ' (' + fmtIDR(weeks[topWeek]) +
      '). The biggest category this month is ' + topCat.name + ' at ' + fmtIDR(totals[topCat.id]) +
      ' — worth a look before the month closes.';
  }
}

/* ---------------- Budgets ---------------- */
function renderBudgets() {
  var totals = catTotals(monthTxs(viewMonth));
  var html = '';
  CATEGORIES.forEach(function (c) {
    var budget = BUDGETS[c.id] || 0;
    var spent = totals[c.id] || 0;
    var pct = budget > 0 ? Math.round(spent / budget * 100) : 0;
    var cls = pct >= 100 ? 'is-over' : (pct >= 85 ? 'is-near' : '');
    var flagCls = pct >= 100 ? 'is-over' : (pct >= 85 ? 'is-near' : 'is-ok');
    var flag = pct >= 100
      ? 'Over budget by ' + fmtIDR(spent - budget)
      : (pct >= 85 ? 'Close to the limit — ' + fmtIDR(budget - spent) + ' left'
                  : fmtIDR(budget - spent) + ' left this month');
    html += '<article class="budget">' +
      '<div class="budget-top"><span class="budget-dot" style="background:' + c.color + '"></span>' +
      '<span class="budget-name">' + esc(c.name) + '</span>' +
      '<span class="budget-pct">' + pct + '%</span></div>' +
      '<div class="bar" role="progressbar" aria-valuenow="' + Math.min(100, pct) + '" aria-valuemin="0" aria-valuemax="100" aria-label="' + esc(c.name) + ' budget used">' +
      '<div class="bar-fill ' + cls + '" style="width:' + Math.min(100, pct) + '%"></div></div>' +
      '<p class="budget-meta">' + esc(fmtIDR(spent)) + ' of ' + esc(fmtIDR(budget)) + '</p>' +
      '<p class="budget-flag ' + flagCls + '">' + esc(flag) + '</p></article>';
  });
  document.getElementById('budgetGrid').innerHTML = html;
}

/* ---------------- Transactions ---------------- */
function renderTxs() {
  var q = document.getElementById('txSearch').value.trim().toLowerCase();
  var f = document.getElementById('txFilter').value;
  var list = monthTxs(viewMonth).slice().sort(function (a, b) {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return a.id < b.id ? 1 : -1;
  }).filter(function (t) {
    if (f !== 'all' && t.cat !== f) return false;
    if (q && t.desc.toLowerCase().indexOf(q) === -1) return false;
    return true;
  });
  document.getElementById('txCount').textContent =
    list.length + ' shown · ' + monthTxs(viewMonth).length + ' in ' + monthLabel(viewMonth);
  var html = '';
  list.forEach(function (t) {
    var c = catById(t.cat);
    var day = t.date.slice(8, 10);
    var mon = MONTHS_SHORT[parseInt(t.date.slice(5, 7), 10) - 1];
    var amt = t.type === 'income' ? '+' + fmtIDR(t.amount) : '−' + fmtIDR(t.amount);
    html += '<li class="tx">' +
      '<div class="tx-date" aria-hidden="true"><span class="d">' + day + '</span><span class="m">' + mon + '</span></div>' +
      '<div class="tx-main"><p class="tx-desc">' + esc(t.desc) + '</p>' +
      '<p class="tx-cat"><span class="chip" style="background:' + c.color + '">' + esc(c.name) + '</span>' +
      ' · ' + fmtDate(t.date) + '</p></div>' +
      '<span class="tx-amt ' + (t.type === 'income' ? 'is-income' : 'is-expense') + '">' + esc(amt) + '</span>' +
      '<span class="tx-actions">' +
      '<button class="btn btn-ghost btn-sm" type="button" data-edit="' + t.id + '" aria-label="Edit transaction: ' + esc(t.desc) + '">Edit</button>' +
      '<button class="btn btn-ghost btn-sm" type="button" data-del="' + t.id + '" aria-label="Delete transaction: ' + esc(t.desc) + '">Delete</button>' +
      '</span></li>';
  });
  document.getElementById('txList').innerHTML = html;
  document.getElementById('txEmpty').hidden = list.length > 0;
}

/* ---------------- Goals ---------------- */
function renderGoals() {
  var html = '';
  state.goals.forEach(function (g) {
    var pct = g.target > 0 ? Math.round(g.saved / g.target * 100) : 0;
    html += '<article class="goal">' +
      '<div class="goal-icon" aria-hidden="true">' + g.icon + '</div>' +
      '<h3 class="goal-name">' + esc(g.name) + '</h3>' +
      '<p class="goal-amt"><strong>' + esc(fmtIDR(g.saved)) + '</strong> of ' + esc(fmtIDR(g.target)) + '</p>' +
      '<p class="goal-amt">' + esc(g.note) + '</p>' +
      '<div class="bar" role="progressbar" aria-valuenow="' + Math.min(100, pct) + '" aria-valuemin="0" aria-valuemax="100" aria-label="' + esc(g.name) + ' progress">' +
      '<div class="bar-fill" style="width:' + Math.min(100, pct) + '%"></div></div>' +
      '<div class="goal-foot"><span class="goal-pct">' + pct + '% saved</span>' +
      '<button class="btn btn-ghost btn-sm" type="button" data-goal="' + g.id + '">+ Add savings</button></div></article>';
  });
  document.getElementById('goalGrid').innerHTML = html;
}

/* ---------------- Render all ---------------- */
function renderAll() {
  renderSummary();
  renderDonut();
  renderWeekly();
  renderBudgets();
  renderTxs();
  renderGoals();
}

/* ---------------- Modals ---------------- */
var lastFocus = null;
function openModal(id) {
  lastFocus = document.activeElement;
  var m = document.getElementById(id);
  m.hidden = false;
  var first = m.querySelector('input, select, button');
  if (first) first.focus();
}
function closeModal(id) {
  document.getElementById(id).hidden = true;
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
function fillCategorySelect(sel, includeAll) {
  var html = includeAll ? '<option value="all">All categories</option>' : '';
  CATEGORIES.forEach(function (c) { html += '<option value="' + c.id + '">' + esc(c.name) + '</option>'; });
  html += '<option value="income">Income</option>';
  sel.innerHTML = html;
}

function openTxModal(tx) {
  editingId = tx ? tx.id : null;
  document.getElementById('txModalTitle').textContent = tx ? 'Edit transaction' : 'Add transaction';
  document.getElementById('txError').hidden = true;
  var type = tx ? tx.type : 'expense';
  var radios = document.querySelectorAll('input[name="txType"]');
  radios.forEach(function (r) { r.checked = r.value === type; });
  document.getElementById('txDesc').value = tx ? tx.desc : '';
  document.getElementById('txAmount').value = tx ? tx.amount : '';
  document.getElementById('txDate').value = tx ? tx.date : viewMonth + '-15';
  document.getElementById('txCategory').value = tx ? tx.cat : 'makanan';
  syncCategoryState();
  openModal('txModal');
}
function syncCategoryState() {
  var type = document.querySelector('input[name="txType"]:checked').value;
  var sel = document.getElementById('txCategory');
  if (type === 'income') { sel.value = 'income'; sel.disabled = true; }
  else { sel.disabled = false; if (sel.value === 'income') sel.value = 'makanan'; }
}
function onTxSubmit(ev) {
  ev.preventDefault();
  var type = document.querySelector('input[name="txType"]:checked').value;
  var desc = document.getElementById('txDesc').value.trim();
  var amount = parseInt(document.getElementById('txAmount').value, 10);
  var date = document.getElementById('txDate').value;
  var cat = type === 'income' ? 'income' : document.getElementById('txCategory').value;
  if (!desc || !amount || amount <= 0 || !date) {
    document.getElementById('txError').hidden = false;
    return;
  }
  if (editingId) {
    state.txs.forEach(function (t) {
      if (t.id === editingId) { t.desc = desc; t.amount = amount; t.date = date; t.cat = cat; t.type = type; }
    });
  } else {
    txCounter += 1;
    state.txs.push({ id: 'u' + txCounter, date: date, desc: desc, cat: cat, type: type, amount: amount });
  }
  viewMonth = monthKeyOf(date);
  saveState();
  closeModal('txModal');
  renderAll();
}
function askDelete(id) {
  pendingDeleteId = id;
  var tx = state.txs.filter(function (t) { return t.id === id; })[0];
  document.getElementById('confirmText').textContent = tx
    ? '“' + tx.desc + '” (' + fmtIDR(tx.amount) + ', ' + fmtDate(tx.date) + ') will be removed. This cannot be undone.'
    : '';
  openModal('confirmModal');
}
function openGoalModal(goalId) {
  activeGoalId = goalId;
  var g = state.goals.filter(function (x) { return x.id === goalId; })[0];
  document.getElementById('goalModalTitle').textContent = 'Add to: ' + (g ? g.name : 'goal');
  document.getElementById('goalModalSub').textContent = g
    ? fmtIDR(g.saved) + ' saved of ' + fmtIDR(g.target) + ' (' + Math.round(g.saved / g.target * 100) + '%)'
    : '';
  document.getElementById('goalAmount').value = '';
  document.getElementById('goalError').hidden = true;
  openModal('goalModal');
}
function onGoalSubmit(ev) {
  ev.preventDefault();
  var amount = parseInt(document.getElementById('goalAmount').value, 10);
  if (!amount || amount <= 0) { document.getElementById('goalError').hidden = false; return; }
  state.goals.forEach(function (g) { if (g.id === activeGoalId) g.saved += amount; });
  saveState();
  closeModal('goalModal');
  renderAll();
}

/* ---------------- Month navigation ---------------- */
function shiftMonth(delta) {
  var y = parseInt(viewMonth.slice(0, 4), 10);
  var m = parseInt(viewMonth.slice(5, 7), 10) + delta;
  while (m < 1) { m += 12; y -= 1; }
  while (m > 12) { m -= 12; y += 1; }
  viewMonth = y + '-' + (m < 10 ? '0' + m : '' + m);
  renderAll();
}

/* ---------------- Wiring ---------------- */
function init() {
  fillCategorySelect(document.getElementById('txCategory'), false);
  fillCategorySelect(document.getElementById('txFilter'), true);

  document.getElementById('addTxBtn').addEventListener('click', function () { openTxModal(null); });
  document.getElementById('txForm').addEventListener('submit', onTxSubmit);
  document.getElementById('txCancelBtn').addEventListener('click', function () { closeModal('txModal'); });
  document.querySelectorAll('input[name="txType"]').forEach(function (r) {
    r.addEventListener('change', syncCategoryState);
  });
  document.getElementById('goalForm').addEventListener('submit', onGoalSubmit);
  document.getElementById('goalCancelBtn').addEventListener('click', function () { closeModal('goalModal'); });
  document.getElementById('confirmCancelBtn').addEventListener('click', function () { closeModal('confirmModal'); });
  document.getElementById('confirmDeleteBtn').addEventListener('click', function () {
    state.txs = state.txs.filter(function (t) { return t.id !== pendingDeleteId; });
    pendingDeleteId = null;
    saveState();
    closeModal('confirmModal');
    renderAll();
  });
  document.getElementById('txList').addEventListener('click', function (ev) {
    var editId = ev.target.getAttribute('data-edit');
    var delId = ev.target.getAttribute('data-del');
    if (editId) openTxModal(state.txs.filter(function (t) { return t.id === editId; })[0]);
    if (delId) askDelete(delId);
  });
  document.getElementById('goalGrid').addEventListener('click', function (ev) {
    var gid = ev.target.getAttribute('data-goal');
    if (gid) openGoalModal(gid);
  });
  document.getElementById('txSearch').addEventListener('input', renderTxs);
  document.getElementById('txFilter').addEventListener('change', renderTxs);
  document.getElementById('prevMonthBtn').addEventListener('click', function () { shiftMonth(-1); });
  document.getElementById('nextMonthBtn').addEventListener('click', function () { shiftMonth(1); });
  document.getElementById('resetDataBtn').addEventListener('click', function () {
    state = loadState();
    viewMonth = '2026-11';
    saveState();
    renderAll();
  });
  document.querySelectorAll('.modal-backdrop').forEach(function (bd) {
    bd.addEventListener('click', function (ev) { if (ev.target === bd) bd.hidden = true; });
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop').forEach(function (bd) { bd.hidden = true; });
    }
  });
  document.querySelectorAll('.side-link').forEach(function (link) {
    link.addEventListener('click', function () {
      document.querySelectorAll('.side-link').forEach(function (l) { l.classList.remove('is-active'); });
      link.classList.add('is-active');
    });
  });

  renderAll();
}

document.addEventListener('DOMContentLoaded', init);
