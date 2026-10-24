const pages = [
  {
    number: "01",
    progress: "Page 1 of 6",
    footer: "Draw it. Dream it. Build it.",
    story: `<span class="story-kicker">Chapter one · a bright idea</span>
      <h2>One small<br /><em>dot</em> in the sky.</h2>
      <p>Johnny looked up and spotted Mars, glowing like a tiny red button. “I’m going there,” he said.</p>
      `,
    scene: `
      <div class="scene-header"><div><h3>Sketch a rocket</h3></div><span class="scene-tag">Make marks</span></div>
      <div class="drawing-space"><span class="canvas-label">Johnny's garage blueprint</span><canvas class="drawing-canvas" id="drawingCanvas" aria-label="Drawing area for your rocket"></canvas>
        <div class="draw-tools" aria-label="Drawing tools">
          <div class="swatches" id="swatches" aria-label="Colors">
            <button class="swatch is-selected" data-color="#e37b68" style="background:#e37b68" type="button" aria-label="Red"></button>
            <button class="swatch" data-color="#e99853" style="background:#e99853" type="button" aria-label="Orange"></button>
            <button class="swatch" data-color="#efc45d" style="background:#efc45d" type="button" aria-label="Yellow"></button>
            <button class="swatch" data-color="#759b78" style="background:#759b78" type="button" aria-label="Green"></button>
            <button class="swatch" data-color="#82bec9" style="background:#82bec9" type="button" aria-label="Light blue"></button>
            <button class="swatch" data-color="#83729e" style="background:#83729e" type="button" aria-label="Purple"></button>
            <button class="swatch" data-color="#e5a2a0" style="background:#e5a2a0" type="button" aria-label="Pink"></button>
            <button class="swatch" data-color="#fffdf3" style="background:#fffdf3" type="button" aria-label="White"></button>
            <button class="swatch" data-color="#92999b" style="background:#92999b" type="button" aria-label="Gray"></button>
            <button class="swatch" data-color="#182c45" style="background:#182c45" type="button" aria-label="Black"></button>
          </div>
          <div class="tool-group"><button class="tool-button" id="eraserButton" type="button">⌫ Erase</button><button class="tool-button" id="undoButton" type="button" aria-label="Undo">↶</button><button class="tool-button" id="redoButton" type="button" aria-label="Redo">↷</button><button class="tool-button" id="reverseButton" type="button">↔ Reverse</button><button class="tool-button" id="clearButton" type="button">Delete</button></div>
        </div>
      </div>
      <div class="done-row"><button class="done-button" id="doneDrawing" type="button" disabled>Done <span aria-hidden="true">→</span></button></div>
      `
  },
  {
    number: "02",
    progress: "Page 2 of 6",
    footer: "Every good rocket needs a little bit of everything.",
    story: `<span class="story-kicker">Chapter two · the great gather</span>
      <h2>Garage to<br /><em>launch pad.</em></h2>
      <p>He gathered the best supplies he could find. His dog watched closely. The dog had questions.</p>
      `,
    scene: `
      <div class="scene-header"><div><h3>Find the supplies</h3></div><span class="scene-tag">3 to find</span></div>
      <div class="hunt-room" id="huntRoom">
        <div class="window" aria-hidden="true"></div><div class="wall-line" aria-hidden="true"></div><div class="table" aria-hidden="true"></div>
        <button class="hunt-object tape-object" data-item="tape" data-label="tape" type="button" aria-label="Find the tape"></button>
        <button class="hunt-object pillow-object" data-item="pillow" data-label="chair pillow" type="button" aria-label="Find the chair pillow"></button>
        <button class="hunt-object helmet-object" data-item="helmet" data-label="astronaut helmet" type="button" aria-label="Find the astronaut helmet"></button>
        <div class="finder-card"><div class="found-icons"><span class="find-icon find-icon-tape" data-found="tape" aria-label="Tape"></span><span class="find-icon find-icon-pillow" data-found="pillow" aria-label="Chair pillow"></span><span class="find-icon find-icon-helmet" data-found="helmet" aria-label="Astronaut helmet"></span></div><div class="finder-count"><b id="foundCount">0</b> / 3 packed</div></div>
      </div><div class="done-row"><button class="done-button" id="doneHunt" type="button" disabled>Done <span aria-hidden="true">→</span></button></div>`
  },
  {
    number: "03",
    progress: "Page 3 of 6",
    footer: "A little tape. A comfy seat. A brave helmet.",
    story: `<span class="story-kicker">Chapter three · the build</span>
      <h2>Piece by<br /><em>piece.</em></h2>
      <p>Johnny built until the garage looked like a very busy starship factory. Even the dog looked impressed.</p>
      `,
    scene: `
      <div class="scene-header"><div><h3>Build the cabin</h3></div><span class="scene-tag">Click to fit</span></div>
      <div class="build-layout"><div class="rocket-bay" id="rocketBay"><div class="rocket-assembly" aria-label="Rocket cabin"><button class="rocket-slot" data-slot="tape" type="button">tape</button><button class="rocket-slot" data-slot="pillow" type="button">seat</button><button class="rocket-slot" data-slot="helmet" type="button">helmet</button><span class="assembly-label">inside Johnny's rocket</span></div></div>
        <div class="parts-panel"><p class="parts-title">Found in the garage</p><button class="part-card" data-part="tape" type="button"><span class="part-icon part-icon-tape" aria-hidden="true"></span><span><strong>Super tape</strong><small>holds it together</small></span></button><button class="part-card" data-part="pillow" type="button"><span class="part-icon part-icon-pillow" aria-hidden="true"></span><span><strong>Chair pillow</strong><small>for a soft seat</small></span></button><button class="part-card" data-part="helmet" type="button"><span class="part-icon part-icon-helmet" aria-hidden="true"></span><span><strong>Space helmet</strong><small>very important</small></span></button><p class="build-status" id="buildStatus"><strong>Ready?</strong><br />Select a part to get started.</p></div>
      </div><div class="done-row"><button class="done-button" id="doneBuild" type="button" disabled>Done <span aria-hidden="true">→</span></button></div>`
  },
  {
    number: "04",
    progress: "Page 4 of 6",
    footer: "Five… four… three… two… one…",
    story: `<span class="story-kicker">Chapter four · all systems go</span>
      <h2>Ready.<br /><em>Set.</em></h2>
      <p>Johnny buckled in. The dog gave one last judgmental look. Then Johnny reached for the big red button.</p>
      `,
    scene: `
      <div class="scene-header"><div><h3>Launch sequence</h3></div><span class="scene-tag">Big moment</span></div>
      <div class="launch-pad" id="launchPad"><div class="launch-stars"></div><div class="moon"></div><div class="launch-tower"></div><div class="launch-rocket rocket-art-target"><span class="launch-window"></span></div><div class="launch-console"><div class="console-readout"><strong id="launchReadout">ENGINES SLEEPING</strong><span id="launchSubreadout">Awaiting a brave tap.</span></div><button class="launch-button" id="launchButton" type="button">Launch!</button><button class="done-button" id="doneLaunch" type="button" hidden disabled>Done <span aria-hidden="true">→</span></button></div></div>
      <p class="launch-copy" id="launchCopy">Johnny says: “Mars, here I come!”</p>`
  },
  {
    number: "05",
    progress: "Page 5 of 6",
    footer: "The very best part is the going.",
    story: `<span class="story-kicker">Chapter five · through the blue</span>
      <h2>Up,<br /><em>up, away!</em></h2>
      <p>Past the Moon, past the clouds, past the place where the dog could still bark. Johnny sailed through the dark.</p>
      `,
    scene: `
      <div class="scene-header"><div><h3>Space window</h3></div><span class="scene-tag">Wheee!</span></div>
      <div class="flight-scene"><div class="flight-mars" aria-label="Mars"></div><div class="flight-path" aria-hidden="true"></div><div class="flight-rocket rocket-art-target"><span class="window"></span></div><div class="flight-earth" aria-label="Earth"></div><strong class="flight-caption">A tiny ship<br />in a <em>big</em> sky.</strong><div class="flight-status">Flying to Mars…</div></div>`
  },
  {
    number: "06",
    progress: "The end",
    footer: "To be continued… after a snack break.",
    story: `<span class="story-kicker">Final chapter · the red planet</span>
      <h2>One small<br /><em>problem.</em></h2>
      <p>Johnny landed with a gentle thump. Mars was beautiful. Mars was quiet. Mars had absolutely no snacks.</p>
      `,
    scene: `
      <div class="scene-header"><div><h3>Hello, Mars</h3></div><span class="scene-tag">Hooray!</span></div>
      <div class="mars-scene"><div class="mars-hill"></div><div class="mars-ground"></div><div class="mars-flag"></div><div class="mars-rocket rocket-art-target"><span class="mars-window"></span></div><div class="thought-bubble">Oh no!<br /><strong>I forgot snacks.</strong></div><div class="end-card"><small>Parker &amp; Pine · vol. 01</small><strong>The end.</strong></div><button class="restart-button" id="restartButton" type="button">Read again ↺</button></div>`
  }
];

const state = {
  currentPage: 0,
  isOpen: false,
  sound: false,
  foundItems: new Set(),
  installedParts: new Set(),
  completedPages: new Set(),
  launched: false,
  selectedPart: null,
  drawing: { color: "#e37b68", erasing: false, undo: [], redo: [], snapshot: null, rocketSnapshot: null, hasMarks: false, inkBounds: null }
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const storyPage = $("#storyPage");
const interactivePage = $("#interactivePage");
const storyContent = $("#storyContent");
const interactiveContent = $("#interactiveContent");
const stage = $("#stage");
const bookWrap = $("#bookWrap");
const book = $("#book");
const cover = $("#cover");
const controls = $("#bookControls");
const prevButton = $("#prevButton");
const nextButton = $("#nextButton");
const progressLabel = $("#progressLabel");
const pageNumber = $("#pageNumber");
const footerHint = $("#footerHint");
const toast = $("#toast");
let toastTimer;
let flightTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function speak(text) {
  if (!state.sound || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = .95;
  utterance.pitch = 1.05;
  window.speechSynthesis.speak(utterance);
}

function openBook() {
  if (state.isOpen) return;
  state.isOpen = true;
  cover.setAttribute("aria-hidden", "true");
  bookWrap.classList.remove("is-closed");
  bookWrap.classList.add("is-open");
  book.hidden = false;
  controls.hidden = false;
  renderPage(0);
  speak("Johnny Builds to Mars. Page one.");
}

function renderPage(index, direction = 1) {
  state.currentPage = Math.max(0, Math.min(pages.length - 1, index));
  const page = pages[state.currentPage];
  storyPage.classList.remove("page-in-right", "page-in-left");
  interactivePage.classList.remove("page-in-right", "page-in-left");
  void storyPage.offsetWidth;
  storyPage.classList.add(direction >= 0 ? "page-in-right" : "page-in-left");
  interactivePage.classList.add(direction >= 0 ? "page-in-right" : "page-in-left");
  pageNumber.textContent = page.number;
  progressLabel.textContent = page.progress;
  footerHint.textContent = page.footer;
  storyContent.innerHTML = page.story;
  interactiveContent.innerHTML = page.scene;
  applyRocketArtwork();
  renderDots();
  bindPageInteractions();
}

function renderDots() {
  const dots = $("#pageDots");
  const maxUnlockedPage = getMaxUnlockedPage();
  dots.innerHTML = pages.map((page, index) => `<button class="page-dot${index === state.currentPage ? " is-current" : ""}" type="button" role="tab" aria-label="Go to ${page.progress}" aria-selected="${index === state.currentPage}" data-page="${index}"${index > maxUnlockedPage ? " disabled" : ""}></button>`).join("");
  $$(".page-dot", dots).forEach((dot) => dot.addEventListener("click", () => {
    if (dot.disabled) return;
    const target = Number(dot.dataset.page);
    renderPage(target, target >= state.currentPage ? 1 : -1);
  }));
  syncNavigation();
}

function syncNavigation() {
  if (!prevButton || !nextButton) return;
  prevButton.disabled = state.currentPage === 0;
  const canGoNext = state.currentPage < pages.length - 1 && state.completedPages.has(state.currentPage);
  nextButton.disabled = !canGoNext;
  nextButton.setAttribute("aria-disabled", String(!canGoNext));
}

function getMaxUnlockedPage() {
  let max = 0;
  while (state.completedPages.has(max) && max < pages.length - 1) max += 1;
  return max;
}

function turnPage(direction, force = false) {
  if (!state.isOpen) return openBook();
  const next = state.currentPage + direction;
  if (next < 0 || next >= pages.length) return;
  if (direction > 0 && !force && !state.completedPages.has(state.currentPage)) return;
  renderPage(next, direction);
  speak(pages[next].story.replace(/<[^>]*>/g, " ").slice(0, 140));
}

function completeCurrentPage() {
  if (state.currentPage >= pages.length - 1) return;
  state.completedPages.add(state.currentPage);
  renderDots();
  showToast("Saved. Next is ready.");
}

function setupDrawing() {
  const canvas = $("#drawingCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const doneButton = $("#doneDrawing");
  let drawing = false;
  let lastPoint = null;
  const syncDoneButton = () => { if (doneButton) doneButton.disabled = !state.drawing.hasMarks; };
  const resizeCanvas = () => {
    const previous = state.drawing.snapshot;
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width * ratio));
    canvas.height = Math.max(1, Math.floor(rect.height * ratio));
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    if (previous) {
      const image = new Image();
      image.onload = () => ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      image.src = previous;
    }
  };
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });

  function pointFromEvent(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * (canvas.width / Math.max(1, rect.width)),
      y: (event.clientY - rect.top) * (canvas.height / Math.max(1, rect.height))
    };
  }
  function saveUndo() {
    state.drawing.undo.push(canvas.toDataURL());
    if (state.drawing.undo.length > 18) state.drawing.undo.shift();
    state.drawing.redo = [];
    state.drawing.snapshot = canvas.toDataURL();
  }
  function stroke(point) {
    if (!lastPoint) lastPoint = point;
    ctx.beginPath(); ctx.moveTo(lastPoint.x, lastPoint.y); ctx.lineTo(point.x, point.y);
    ctx.strokeStyle = state.drawing.erasing ? "rgba(0,0,0,1)" : state.drawing.color;
    ctx.globalCompositeOperation = state.drawing.erasing ? "destination-out" : "source-over";
    const scale = canvas.width / Math.max(1, canvas.getBoundingClientRect().width);
    ctx.lineWidth = (state.drawing.erasing ? 24 : 5) * scale;
    ctx.stroke(); ctx.globalCompositeOperation = "source-over"; lastPoint = point;
  }
  canvas.addEventListener("pointerdown", (event) => { drawing = true; canvas.setPointerCapture(event.pointerId); lastPoint = pointFromEvent(event); saveUndo(); if (!state.drawing.erasing) { state.drawing.hasMarks = true; updateInkBounds(lastPoint, canvas); syncDoneButton(); } });
  canvas.addEventListener("pointermove", (event) => { if (drawing) { const point = pointFromEvent(event); if (!state.drawing.erasing) updateInkBounds(point, canvas); stroke(point); } });
  ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => canvas.addEventListener(eventName, () => { drawing = false; lastPoint = null; updateDrawingSnapshots(canvas); }));

  $$(".swatch").forEach((swatch) => swatch.addEventListener("click", () => {
    state.drawing.color = swatch.dataset.color; state.drawing.erasing = false;
    $$(".swatch").forEach((item) => item.classList.toggle("is-selected", item === swatch));
    $("#eraserButton")?.classList.remove("is-active");
  }));
  $("#eraserButton")?.addEventListener("click", () => { state.drawing.erasing = !state.drawing.erasing; $("#eraserButton").classList.toggle("is-active", state.drawing.erasing); });
  $("#clearButton")?.addEventListener("click", () => { saveUndo(); ctx.clearRect(0, 0, canvas.width, canvas.height); updateDrawingSnapshots(canvas); state.drawing.hasMarks = false; state.drawing.inkBounds = null; syncDoneButton(); showToast("The blueprint is ready for a fresh idea."); });
  $("#undoButton")?.addEventListener("click", () => restoreDrawing(canvas, ctx, "undo"));
  $("#redoButton")?.addEventListener("click", () => restoreDrawing(canvas, ctx, "redo"));
  $("#reverseButton")?.addEventListener("click", () => reverseDrawing(canvas, ctx));
  doneButton?.addEventListener("click", completeCurrentPage);
  syncDoneButton();
}

function reverseDrawing(canvas, ctx) {
  const image = new Image();
  saveDrawingState(canvas);
  image.onload = () => {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.restore();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    updateDrawingSnapshots(canvas);
    showToast("Your rocket is facing the other way.");
  };
  image.src = canvas.toDataURL();
}

function applyRocketArtwork() {
  if (!state.drawing.hasMarks || !state.drawing.rocketSnapshot) return;
  $$(".rocket-art-target").forEach((rocket) => {
    rocket.style.backgroundImage = `url(${state.drawing.rocketSnapshot})`;
    rocket.classList.add("uses-created-art");
  });
}

function updateDrawingSnapshots(canvas) {
  state.drawing.snapshot = canvas.toDataURL();
  state.drawing.rocketSnapshot = trimDrawingToInk(canvas);
}

function trimDrawingToInk(canvas) {
  if (state.drawing.inkBounds) {
    const pad = Math.max(10, Math.round(Math.min(canvas.width, canvas.height) * .08));
    const x = Math.max(0, Math.floor(state.drawing.inkBounds.minX - pad));
    const y = Math.max(0, Math.floor(state.drawing.inkBounds.minY - pad));
    const right = Math.min(canvas.width, Math.ceil(state.drawing.inkBounds.maxX + pad));
    const bottom = Math.min(canvas.height, Math.ceil(state.drawing.inkBounds.maxY + pad));
    const trimmed = document.createElement("canvas");
    trimmed.width = Math.max(1, right - x); trimmed.height = Math.max(1, bottom - y);
    trimmed.getContext("2d").drawImage(canvas, x, y, trimmed.width, trimmed.height, 0, 0, trimmed.width, trimmed.height);
    return trimmed.toDataURL("image/png");
  }
  const ctx = canvas.getContext("2d");
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let minX = canvas.width, minY = canvas.height, maxX = -1, maxY = -1;
  for (let y = 0; y < canvas.height; y += 2) {
    for (let x = 0; x < canvas.width; x += 2) {
      if (pixels[(y * canvas.width + x) * 4 + 3] > 8) {
        minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
      }
    }
  }
  if (maxX < 0) return null;
  const pad = Math.max(10, Math.round(Math.min(canvas.width, canvas.height) * .08));
  const x = Math.max(0, minX - pad), y = Math.max(0, minY - pad);
  const width = Math.min(canvas.width - x, maxX - minX + pad * 2), height = Math.min(canvas.height - y, maxY - minY + pad * 2);
  const trimmed = document.createElement("canvas");
  trimmed.width = width; trimmed.height = height;
  trimmed.getContext("2d").drawImage(canvas, x, y, width, height, 0, 0, width, height);
  return trimmed.toDataURL("image/png");
}

function updateInkBounds(point, canvas) {
  const x = point.x, y = point.y;
  if (!state.drawing.inkBounds) state.drawing.inkBounds = { minX: x, minY: y, maxX: x, maxY: y };
  state.drawing.inkBounds.minX = Math.min(state.drawing.inkBounds.minX, x);
  state.drawing.inkBounds.minY = Math.min(state.drawing.inkBounds.minY, y);
  state.drawing.inkBounds.maxX = Math.max(state.drawing.inkBounds.maxX, x);
  state.drawing.inkBounds.maxY = Math.max(state.drawing.inkBounds.maxY, y);
}

function saveDrawingState(canvas) {
  state.drawing.undo.push(canvas.toDataURL());
  if (state.drawing.undo.length > 18) state.drawing.undo.shift();
  state.drawing.redo = [];
}

function restoreDrawing(canvas, ctx, mode) {
  const source = mode === "undo" ? state.drawing.undo : state.drawing.redo;
  const target = mode === "undo" ? state.drawing.redo : state.drawing.undo;
  if (!source.length) return;
  target.push(canvas.toDataURL());
  const image = new Image();
  image.onload = () => { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(image, 0, 0, canvas.width, canvas.height); updateDrawingSnapshots(canvas); };
  image.src = source.pop();
}

function setupHunt() {
  const room = $("#huntRoom");
  if (!room) return;
  const doneButton = $("#doneHunt");
  const syncDoneButton = () => { if (doneButton) doneButton.disabled = state.foundItems.size < 3; };
  $$(".hunt-object", room).forEach((object) => object.addEventListener("click", () => {
    const item = object.dataset.item;
    if (state.foundItems.has(item)) return;
    state.foundItems.add(item);
    object.classList.add("is-found");
    $(`[data-found="${item}"]`, room).classList.add("is-found");
    $("#foundCount", room).textContent = state.foundItems.size;
    syncDoneButton();
    const labels = { tape: "Tape packed.", pillow: "A comfy pillow packed.", helmet: "Helmet packed. Johnny is ready." };
    showToast(labels[item]);
    if (state.foundItems.size === 3) { showToast("Everything is packed. Time to build!"); speak("Everything is packed. Time to build!"); }
  }));
  state.foundItems.forEach((item) => { $(`[data-item="${item}"]`, room)?.classList.add("is-found"); $(`[data-found="${item}"]`, room)?.classList.add("is-found"); });
  $("#foundCount", room).textContent = state.foundItems.size;
  doneButton?.addEventListener("click", completeCurrentPage);
  syncDoneButton();
}

function setupBuild() {
  const bay = $("#rocketBay");
  if (!bay) return;
  const status = $("#buildStatus");
  const doneButton = $("#doneBuild");
  const syncDoneButton = () => { if (doneButton) doneButton.disabled = state.installedParts.size < 3; };
  $$(".part-card").forEach((card) => card.addEventListener("click", () => {
    state.selectedPart = card.dataset.part;
    $$(".part-card").forEach((item) => item.classList.toggle("is-selected", item === card));
    status.innerHTML = `<strong>${labelForPart(state.selectedPart)} selected.</strong><br />Now tap its dotted spot in the cabin.`;
  }));
  $$(".rocket-slot", bay).forEach((slot) => slot.addEventListener("click", () => {
    const part = slot.dataset.slot;
    if (!state.selectedPart) { status.innerHTML = `<strong>Choose a part first.</strong><br />Pick one from the right side.`; return; }
    if (state.selectedPart !== part) { showToast("That part belongs somewhere else."); return; }
    state.installedParts.add(part); slot.classList.add("is-filled"); slot.textContent = iconForPart(part); $(`.part-card[data-part="${part}"]`).classList.add("is-installed");
    state.selectedPart = null; $$(".part-card").forEach((item) => item.classList.remove("is-selected"));
    status.innerHTML = state.installedParts.size === 3 ? `<strong>Cabin complete!</strong><br />Johnny is ready for liftoff.` : `<strong>Nice fit.</strong><br />There’s still room for one more part.`;
    syncDoneButton();
    if (state.installedParts.size === 3) speak("Cabin complete. Johnny is ready for liftoff.");
  }));
  state.installedParts.forEach((part) => { $(`[data-slot="${part}"]`, bay)?.classList.add("is-filled"); $(`[data-slot="${part}"]`, bay).textContent = iconForPart(part); $(`.part-card[data-part="${part}"]`)?.classList.add("is-installed"); });
  doneButton?.addEventListener("click", completeCurrentPage);
  syncDoneButton();
}

function labelForPart(part) { return { tape: "Super tape", pillow: "Chair pillow", helmet: "Space helmet" }[part]; }
function iconForPart(part) { return { tape: "TAPE", pillow: "SEAT", helmet: "HELMET" }[part]; }

function setupLaunch() {
  const pad = $("#launchPad");
  if (!pad) return;
  const button = $("#launchButton");
  const doneButton = $("#doneLaunch");
  const showDoneButton = () => { state.launched = true; button.hidden = true; doneButton.hidden = false; doneButton.disabled = false; };
  if (state.launched) showDoneButton();
  button.addEventListener("click", () => {
    if (pad.classList.contains("is-launching")) return;
    pad.classList.add("is-launching"); button.disabled = true; button.textContent = "Liftoff!"; $("#launchReadout").textContent = "ENGINES ROARING"; $("#launchSubreadout").textContent = "Johnny is heading for Mars."; $("#launchCopy").textContent = "WHOOSH! The dog is officially impressed."; showToast("Liftoff!"); speak("Liftoff! Johnny is heading for Mars.");
    setTimeout(showDoneButton, 2700);
  });
  doneButton?.addEventListener("click", completeCurrentPage);
}

function setupFlight() {
  clearTimeout(flightTimer);
  flightTimer = setTimeout(() => {
    if (state.currentPage === 4) { state.completedPages.add(4); turnPage(1, true); }
  }, 5000);
}

function setupFinale() {
  $("#restartButton")?.addEventListener("click", () => {
    state.currentPage = 0;
    state.completedPages.clear();
    state.foundItems.clear();
    state.installedParts.clear();
    state.selectedPart = null;
    state.launched = false;
    state.drawing.undo = [];
    state.drawing.redo = [];
    state.drawing.snapshot = null;
    state.drawing.rocketSnapshot = null;
    state.drawing.hasMarks = false;
    state.drawing.inkBounds = null;
    renderPage(0, -1);
  });
}

function bindPageInteractions() {
  if (state.currentPage === 0) setupDrawing();
  if (state.currentPage === 1) setupHunt();
  if (state.currentPage === 2) setupBuild();
  if (state.currentPage === 3) setupLaunch();
  if (state.currentPage === 4) setupFlight();
  if (state.currentPage === 5) setupFinale();
}

cover.addEventListener("click", openBook);
prevButton?.addEventListener("click", () => turnPage(-1));
nextButton?.addEventListener("click", () => turnPage(1));
$("#soundButton").addEventListener("click", () => {
  state.sound = !state.sound; $("#soundButton").setAttribute("aria-pressed", state.sound); $("#soundButton").firstElementChild.textContent = "S"; showToast(state.sound ? "Story sounds on." : "Story sounds off."); if (state.sound) speak("Story sounds on.");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown") { event.preventDefault(); turnPage(1); }
  if (event.key === "ArrowLeft" || event.key === "PageUp") { event.preventDefault(); turnPage(-1); }
  if (event.key === "Enter" && !state.isOpen && document.activeElement === cover) openBook();
});

let touchStartX = null;
stage.addEventListener("pointerdown", (event) => { if (event.pointerType === "touch") touchStartX = event.clientX; });
stage.addEventListener("pointerup", (event) => {
  if (touchStartX === null) return;
  const distance = event.clientX - touchStartX;
  if (Math.abs(distance) > 70) turnPage(distance < 0 ? 1 : -1);
  touchStartX = null;
});
