const demoRows = [
  { date: "2026-09-08", order: "A0801", item: "招牌鸡腿饭", amount: 28, status: "完成", rating: 5, review: "分量足，味道很好，送得也快", refund: false },
  { date: "2026-09-08", order: "A0802", item: "番茄鸡蛋饭", amount: 22, status: "完成", rating: 5, review: "味道不错", refund: false },
  { date: "2026-09-08", order: "A0803", item: "香辣鸡排饭", amount: 26, status: "完成", rating: 4, review: "整体不错，就是稍微有点咸", refund: false },
  { date: "2026-09-08", order: "A0804", item: "招牌鸡腿饭", amount: 28, status: "完成", rating: 5, review: "包装很好", refund: false },
  { date: "2026-09-08", order: "A0805", item: "酸菜鱼套餐", amount: 36, status: "完成", rating: 4, review: "鱼很新鲜", refund: false },
  { date: "2026-09-09", order: "A0901", item: "番茄鸡蛋饭", amount: 22, status: "完成", rating: 5, review: "性价比很高", refund: false },
  { date: "2026-09-09", order: "A0902", item: "招牌鸡腿饭", amount: 28, status: "完成", rating: 5, review: "鸡腿好吃", refund: false },
  { date: "2026-09-09", order: "A0903", item: "香辣鸡排饭", amount: 26, status: "完成", rating: 3, review: "米饭有点少", refund: false },
  { date: "2026-09-09", order: "A0904", item: "番茄鸡蛋饭", amount: 22, status: "完成", rating: 5, review: "下饭，推荐", refund: false },
  { date: "2026-09-09", order: "A0905", item: "烤茄子", amount: 12, status: "退款", rating: 2, review: "漏放了餐具，联系后处理很慢", refund: true },
  { date: "2026-09-10", order: "A1001", item: "招牌鸡腿饭", amount: 28, status: "完成", rating: 5, review: "送餐速度很快", refund: false },
  { date: "2026-09-10", order: "A1002", item: "番茄鸡蛋饭", amount: 22, status: "完成", rating: 5, review: "味道很好", refund: false },
  { date: "2026-09-10", order: "A1003", item: "酸菜鱼套餐", amount: 36, status: "完成", rating: 4, review: "分量可以", refund: false },
  { date: "2026-09-10", order: "A1004", item: "香辣鸡排饭", amount: 26, status: "完成", rating: 4, review: "鸡排酥脆", refund: false },
  { date: "2026-09-10", order: "A1005", item: "番茄鸡蛋饭", amount: 22, status: "完成", rating: 5, review: "还会回购", refund: false },
  { date: "2026-09-11", order: "A1101", item: "招牌鸡腿饭", amount: 28, status: "完成", rating: 5, review: "包装干净", refund: false },
  { date: "2026-09-11", order: "A1102", item: "番茄鸡蛋饭", amount: 22, status: "完成", rating: 5, review: "很好吃", refund: false },
  { date: "2026-09-11", order: "A1103", item: "烤茄子", amount: 12, status: "完成", rating: 3, review: "味道偏淡", refund: false },
  { date: "2026-09-11", order: "A1104", item: "香辣鸡排饭", amount: 26, status: "完成", rating: 4, review: "送到时还是热的", refund: false },
  { date: "2026-09-11", order: "A1105", item: "招牌鸡腿饭", amount: 28, status: "完成", rating: 5, review: "鸡腿很大", refund: false },
  { date: "2026-09-12", order: "A1201", item: "番茄鸡蛋饭", amount: 22, status: "完成", rating: 5, review: "实惠好吃", refund: false },
  { date: "2026-09-12", order: "A1202", item: "招牌鸡腿饭", amount: 28, status: "完成", rating: 4, review: "味道不错，配送慢了一点", refund: false },
  { date: "2026-09-12", order: "A1203", item: "酸菜鱼套餐", amount: 36, status: "完成", rating: 5, review: "鱼肉很多", refund: false },
  { date: "2026-09-12", order: "A1204", item: "番茄鸡蛋饭", amount: 22, status: "完成", rating: 5, review: "汤汁足", refund: false },
  { date: "2026-09-12", order: "A1205", item: "香辣鸡排饭", amount: 26, status: "退款", rating: 2, review: "少了一份饮料", refund: true },
  { date: "2026-09-13", order: "A1301", item: "招牌鸡腿饭", amount: 28, status: "完成", rating: 5, review: "推荐给同学了", refund: false },
  { date: "2026-09-13", order: "A1302", item: "番茄鸡蛋饭", amount: 22, status: "完成", rating: 5, review: "分量足", refund: false },
  { date: "2026-09-13", order: "A1303", item: "香辣鸡排饭", amount: 26, status: "完成", rating: 4, review: "有点辣但很好吃", refund: false },
  { date: "2026-09-13", order: "A1304", item: "招牌鸡腿饭", amount: 28, status: "完成", rating: 5, review: "出餐很快", refund: false },
  { date: "2026-09-13", order: "A1305", item: "烤茄子", amount: 12, status: "完成", rating: 3, review: "分量偏少", refund: false },
  { date: "2026-09-14", order: "A1401", item: "番茄鸡蛋饭", amount: 22, status: "完成", rating: 5, review: "味道不错", refund: false },
  { date: "2026-09-14", order: "A1402", item: "招牌鸡腿饭", amount: 28, status: "完成", rating: 5, review: "鸡腿很香", refund: false },
  { date: "2026-09-14", order: "A1403", item: "酸菜鱼套餐", amount: 36, status: "完成", rating: 4, review: "整体满意", refund: false },
  { date: "2026-09-14", order: "A1404", item: "香辣鸡排饭", amount: 26, status: "完成", rating: 4, review: "下次还点", refund: false },
  { date: "2026-09-14", order: "A1405", item: "番茄鸡蛋饭", amount: 22, status: "完成", rating: 5, review: "很适合上课日常吃", refund: false }
];

let rows = demoRows;

const $ = (selector) => document.querySelector(selector);
const money = (value) => `¥${Math.round(value).toLocaleString("zh-CN")}`;
const percent = (value) => `${value.toFixed(1)}%`;

function summarize(data) {
  const completed = data.filter((row) => row.status !== "退款" && !row.refund);
  const revenue = completed.reduce((sum, row) => sum + row.amount, 0);
  const refunds = data.filter((row) => row.refund || row.status === "退款").length;
  const daily = [...new Set(data.map((row) => row.date))].sort().map((date) => {
    const dayRows = completed.filter((row) => row.date === date);
    return { date, revenue: dayRows.reduce((sum, row) => sum + row.amount, 0), orders: dayRows.length };
  });
  const products = {};
  completed.forEach((row) => {
    if (!products[row.item]) products[row.item] = { item: row.item, count: 0, revenue: 0 };
    products[row.item].count += 1;
    products[row.item].revenue += row.amount;
  });
  const ratings = completed.filter((row) => Number(row.rating) > 0).map((row) => Number(row.rating));
  return { completed, revenue, refunds, daily, products: Object.values(products).sort((a, b) => b.revenue - a.revenue), ratings };
}

function renderMetrics(summary) {
  $("#metric-revenue").textContent = money(summary.revenue);
  $("#metric-orders").textContent = summary.completed.length.toLocaleString("zh-CN");
  $("#metric-average").textContent = money(summary.completed.length ? summary.revenue / summary.completed.length : 0);
  $("#metric-refund").textContent = percent(summary.refunds / Math.max(rows.length, 1) * 100);
  $("#metric-revenue-change").textContent = summary.completed.length ? "当前周期统计" : "暂无数据";
  $("#metric-orders-change").textContent = summary.completed.length ? "当前周期统计" : "暂无数据";
  $("#metric-average-change").textContent = summary.completed.length ? "按当前订单计算" : "暂无数据";
  $("#metric-refund-change").textContent = summary.refunds ? "需关注退款原因" : "暂无退款记录";
  $("#metric-refund-change").className = `metric-change ${summary.refunds ? "neutral" : "positive"}`;
}

function renderChart(summary) {
  const canvas = $("#trend-chart");
  const ctx = canvas.getContext("2d");
  const width = canvas.clientWidth * 2;
  const height = 410;
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, width, height);
  const pad = { top: 10, right: 8, bottom: 12, left: 0 };
  const chartWidth = width - pad.left - pad.right;
  const chartHeight = height - pad.top - pad.bottom;
  const maxValue = Math.max(500, ...summary.daily.map((point) => point.revenue)) * 1.12;
  const x = (index) => pad.left + (summary.daily.length === 1 ? chartWidth / 2 : index / (summary.daily.length - 1) * chartWidth);
  const y = (value) => pad.top + chartHeight - value / maxValue * chartHeight;
  ctx.strokeStyle = "#edf0f1";
  ctx.lineWidth = 1;
  [0, .333, .666, 1].forEach((ratio) => { const lineY = pad.top + chartHeight * ratio; ctx.beginPath(); ctx.moveTo(0, lineY); ctx.lineTo(width, lineY); ctx.stroke(); });
  const barWidth = Math.min(22, chartWidth / Math.max(summary.daily.length * 2.8, 1));
  summary.daily.forEach((point, index) => {
    const barHeight = point.orders / Math.max(...summary.daily.map((item) => item.orders), 1) * chartHeight * .68;
    ctx.fillStyle = "#d9e3e7";
    ctx.fillRect(x(index) - barWidth / 2, pad.top + chartHeight - barHeight, barWidth, barHeight);
  });
  ctx.beginPath();
  summary.daily.forEach((point, index) => { if (index === 0) ctx.moveTo(x(index), y(point.revenue)); else ctx.lineTo(x(index), y(point.revenue)); });
  ctx.strokeStyle = "#2e8b68";
  ctx.lineWidth = 4;
  ctx.lineJoin = "round";
  ctx.stroke();
  summary.daily.forEach((point, index) => { ctx.beginPath(); ctx.fillStyle = "#fff"; ctx.arc(x(index), y(point.revenue), 6, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = "#2e8b68"; ctx.lineWidth = 3; ctx.stroke(); });
  $("#chart-labels").innerHTML = summary.daily.map((point) => `<span>${point.date.slice(5).replace("-", "/")}</span>`).join("");
}

function renderInsights(summary) {
  const top = summary.products[0];
  const weak = summary.products[summary.products.length - 1];
  const refundRows = rows.filter((row) => row.refund || row.status === "退款");
  const reviewText = refundRows[0]?.review || "当前没有退款订单";
  const insights = [
    { title: `${top ? top.item : "暂无商品"} 是本周主力商品`, detail: top ? `售出 ${top.count} 份，贡献 ${money(top.revenue)} 销售额。建议将它放在菜单首屏，并测试套餐组合。` : "导入订单后生成商品建议。", type: "good" },
    { title: weak ? `${weak.item} 需要观察` : "暂无商品需要观察", detail: weak ? `当前仅售出 ${weak.count} 份。建议检查图片、描述和价格，再决定是否做小额优惠。` : "暂无足够数据。", type: "warning" },
    { title: refundRows.length ? "退款原因集中在履约细节" : "履约状态稳定", detail: refundRows.length ? `最近退款 ${refundRows.length} 单，代表性反馈：“${reviewText}”。建议出餐时增加餐具和饮料核对。` : "暂未发现退款订单，继续保持出餐核对。", type: refundRows.length ? "warning" : "good" }
  ];
  $("#insight-list").innerHTML = insights.map((insight, index) => `<div class="insight-item ${insight.type}"><div class="insight-number">0${index + 1}</div><div><div class="insight-title">${escapeHtml(insight.title)}</div><div class="insight-detail">${escapeHtml(insight.detail)}</div></div></div>`).join("");
}

function renderProducts(summary) {
  $("#products-table").innerHTML = summary.products.slice(0, 5).map((product, index) => {
    const trend = index === 0 ? { label: "热销", className: "trend-up" } : { label: "待对比", className: "trend-flat" };
    return `<tr><td><div class="product-name">${escapeHtml(product.item)}</div><div class="product-sub">本周排名 ${index + 1}</div></td><td>${product.count}</td><td class="sales-cell">${money(product.revenue)}</td><td class="${trend.className}">${trend.label}</td></tr>`;
  }).join("") || `<tr><td colspan="4">暂无可展示数据</td></tr>`;
}

function renderReviews(summary) {
  const counts = [5, 4, 3, 2, 1].map((score) => summary.ratings.filter((rating) => rating === score).length);
  const total = Math.max(summary.ratings.length, 1);
  $("#rating-score").textContent = summary.ratings.length ? (summary.ratings.reduce((sum, rating) => sum + rating, 0) / summary.ratings.length).toFixed(1) : "-";
  $("#review-period").textContent = `最近 ${Math.min(rows.length, 30)} 条评价`;
  $("#review-bars").innerHTML = counts.map((count, index) => `<div class="rating-row"><span>${5 - index} 星</span><div class="bar-track"><div class="bar-fill" style="width:${count / total * 100}%"></div></div><span>${count}</span></div>`).join("");
  const negative = rows.find((row) => Number(row.rating) <= 3);
  $("#review-highlight").innerHTML = `<div class="highlight-label">需要优先处理</div><div class="highlight-text">${negative ? `<strong>${escapeHtml(negative.item)}</strong>：${escapeHtml(negative.review)}` : "暂无低分评价，继续保持。"}</div>`;
}

function renderAll() {
  const summary = summarize(rows);
  renderMetrics(summary);
  renderChart(summary);
  renderInsights(summary);
  renderProducts(summary);
  renderReviews(summary);
}

function switchNavigation(button) {
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item === button));
  $("#page-title").textContent = button.dataset.title;
  const target = $(button.dataset.target);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  if (target.classList.contains("panel")) {
    target.classList.remove("panel-focus");
    window.requestAnimationFrame(() => target.classList.add("panel-focus"));
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function parseCsv(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) throw new Error("CSV 至少需要一行表头和一行订单数据");
  const headers = lines[0].split(",").map((header) => header.trim().toLowerCase());
  const aliases = {
    date: ["date", "日期", "下单日期", "时间"], order: ["order", "订单号", "订单编号"], item: ["item", "商品", "商品名称", "菜品"], amount: ["amount", "金额", "实付金额", "销售额"], status: ["status", "状态", "订单状态"], rating: ["rating", "评分", "星级"], review: ["review", "评价", "评价内容"], refund: ["refund", "退款", "是否退款"]
  };
  const indexFor = (names) => headers.findIndex((header) => names.includes(header));
  const indexes = Object.fromEntries(Object.entries(aliases).map(([key, names]) => [key, indexFor(names)]));
  if (indexes.item < 0 || indexes.amount < 0) throw new Error("CSV 至少需要包含商品和金额列");
  return lines.slice(1).map((line, rowIndex) => {
    const cells = parseCsvLine(line);
    const get = (key) => indexes[key] >= 0 ? cells[indexes[key]] : "";
    const amount = Number(get("amount").replace(/[¥￥,]/g, ""));
    const status = get("status") || "完成";
    return { date: get("date") || `2026-09-${String(8 + rowIndex % 7).padStart(2, "0")}`, order: get("order") || `导入${rowIndex + 1}`, item: get("item") || "未命名商品", amount: Number.isFinite(amount) ? amount : 0, status, rating: Number(get("rating")) || 0, review: get("review"), refund: /是|true|退款|yes/i.test(get("refund")) || /退款/.test(status) };
  }).filter((row) => row.amount >= 0);
}

function parseCsvLine(line) {
  const cells = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === '"' && line[index + 1] === '"' && quoted) { cell += '"'; index += 1; continue; }
    if (char === '"') { quoted = !quoted; continue; }
    if (char === "," && !quoted) { cells.push(cell.trim()); cell = ""; continue; }
    cell += char;
  }
  cells.push(cell.trim());
  return cells;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

$("#demo-button").addEventListener("click", () => { rows = demoRows; $("#data-note").textContent = "当前使用示例数据。导入 CSV 后，页面会在本地重新计算指标。"; renderAll(); showToast("已加载示例数据"); });
$("#csv-file").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => { try { rows = parseCsv(reader.result); $("#data-note").textContent = `已加载 ${file.name}，共 ${rows.length} 条记录。数据仅在当前浏览器处理。`; renderAll(); showToast(`已导入 ${rows.length} 条订单`); } catch (error) { showToast(error.message); } };
  reader.readAsText(file, "UTF-8");
});
$("#refresh-insights").addEventListener("click", () => { renderAll(); showToast("建议已根据当前数据刷新"); });
document.querySelectorAll(".nav-item").forEach((button) => button.addEventListener("click", () => switchNavigation(button)));
$("#copy-report").addEventListener("click", async () => {
  const summary = summarize(rows);
  const report = `禾下快餐 · 校园店经营日报\n销售额：${money(summary.revenue)}\n有效订单：${summary.completed.length} 单\n平均客单价：${money(summary.revenue / Math.max(summary.completed.length, 1))}\n退款率：${percent(summary.refunds / Math.max(rows.length, 1) * 100)}\n热销商品：${summary.products[0]?.item || "暂无"}`;
  try { await navigator.clipboard.writeText(report); showToast("日报已复制"); } catch { showToast("当前浏览器不支持自动复制，请手动查看页面"); }
});
window.addEventListener("resize", () => renderChart(summarize(rows)));
renderAll();
