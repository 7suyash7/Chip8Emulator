// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _chip8 = require("./Chip8");
var _chip8Default = parcelHelpers.interopDefault(_chip8);
var _monitor = require("./Monitor");
var _monitorDefault = parcelHelpers.interopDefault(_monitor);
var _keyboard = require("./Keyboard");
var _keyboardDefault = parcelHelpers.interopDefault(_keyboard);
var _speaker = require("./Speaker");
var _speakerDefault = parcelHelpers.interopDefault(_speaker);
var _stylesCss = require("../styles.css");
const FPS = 60;
let loop, fpsInterval, startTime, now, then, elapsed;
const romSelector = document.getElementById("roms");
romSelector.addEventListener("change", ()=>{
    const rom = romSelector.options[romSelector.selectedIndex].value;
    console.log(rom);
    loadRom(rom);
});
const reloadButton = document.getElementById("reload");
reloadButton.addEventListener("click", ()=>{
    console.log("Click");
    const rom = romSelector.options[romSelector.selectedIndex].value;
    console.log(rom);
    loadRom(rom);
});
const loadingText = document.getElementById("loading-text");
function loadRom(romName) {
    const monitor = new (0, _monitorDefault.default)(15);
    const keyboard = new (0, _keyboardDefault.default)();
    const speaker = new (0, _speakerDefault.default)();
    const chip8 = new (0, _chip8Default.default)(monitor, keyboard, speaker);
    window.cancelAnimationFrame(loop);
    function step() {
        now = Date.now();
        elapsed = now - then;
        if (elapsed > fpsInterval) {
            chip8.cycle();
            then = now - elapsed % fpsInterval;
        }
        loop = requestAnimationFrame(step);
    }
    const url = `/rom/${romName}`;
    reloadButton.disabled = true;
    loadingText.innerHTML = "Loading" + romName + "...";
    fetch(url).then((res)=>res.arrayBuffer()).then((buffer)=>{
        console.log(buffer.byteLength);
        const program = new Uint8Array(buffer);
        console.log("Loaded Program: ${program}", program);
        fpsInterval = 1000 / FPS;
        then = Date.now();
        startTime = then;
        reloadButton.disabled = false;
        chip8.loadSpritesIntoMemory();
        chip8.loadProgramIntoMemory(program);
        console.log(program);
        loop = requestAnimationFrame(step);
        loadingText.innerHTML = "Playing " + romName + " !";
    });
}
loadRom("BLITZ");

},{"./Chip8":"4rkIh","./Monitor":"dBjcy","./Keyboard":"5v2cX","./Speaker":"eyn9e","../styles.css":"7N9bM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4rkIh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Chip8 {
    constructor(monitor, keyboard, speaker){
        // Keyboard
        this.keyboard = keyboard;
        // Monitor
        this.monitor = monitor;
        // Speaker
        this.speaker = speaker;
        // 4KB Memory
        this.memory = new Uint8Array(4096);
        // 16 8-bit Registers
        this.v = new Uint8Array(16);
        // Store memory adresses
        this.index = 0;
        // 16-bit program count register (like a pointer to the line of code that is being currently executed)
        this.pc = 0x200; // following the specs here.
        // 16-level stack
        this.stack = new Array();
        // 8-bit register, stack pointer
        this.sp = 0;
        // Timers
        this.delayTimer = 0;
        this.soundTimer = 0;
        // Identify if system is paused, some instructions require pausing, eg. Fx0A
        this.paused = false;
        // Speed of cpu-cycles
        this.speed = 10;
    }
    loadSpritesIntoMemory() {
        const sprites = [
            // Array of hex values for each sprite (5 bytes per sprite).
            0xF0,
            0x90,
            0x90,
            0x90,
            0xF0,
            0x20,
            0x60,
            0x20,
            0x20,
            0x70,
            0xF0,
            0x10,
            0xF0,
            0x80,
            0xF0,
            0xF0,
            0x10,
            0xF0,
            0x10,
            0xF0,
            0x90,
            0x90,
            0xF0,
            0x10,
            0x10,
            0xF0,
            0x80,
            0xF0,
            0x10,
            0xF0,
            0xF0,
            0x80,
            0xF0,
            0x90,
            0xF0,
            0xF0,
            0x10,
            0x20,
            0x40,
            0x40,
            0xF0,
            0x90,
            0xF0,
            0x90,
            0xF0,
            0xF0,
            0x90,
            0xF0,
            0x10,
            0xF0,
            0xF0,
            0x90,
            0xF0,
            0x90,
            0x90,
            0xE0,
            0x90,
            0xE0,
            0x90,
            0xE0,
            0xF0,
            0x80,
            0x80,
            0x80,
            0xF0,
            0xE0,
            0x90,
            0x90,
            0x90,
            0xE0,
            0xF0,
            0x80,
            0xF0,
            0x80,
            0xF0,
            0xF0,
            0x80,
            0xF0,
            0x80,
            0x80 // F
        ];
        for(let i = 0; i < sprites.length; i++)this.memory[i] = sprites[i];
    }
    loadProgramIntoMemory(program) {
        for(let i = 0; i < program.length; i++)this.memory[0x200 + i] = program[i];
    }
    cycle() {
        for(let i = 0; i < this.speed; i++)if (!this.paused) {
            let opcode = this.memory[this.pc] << 8 | this.memory[this.pc + 1];
            this.interpretInstruction(opcode);
        }
        if (!this.paused) this.updateTimers();
        this.sound();
        this.monitor.paint();
    }
    updateTimers() {
        if (this.delayTimer > 0) this.delayTimer -= 1;
        if (this.soundTimer > 0) this.soundTimer -= 1;
    }
    sound() {
        if (this.soundTimer > 0) this.speaker.play(440);
        else this.speaker.stop();
    }
    interpretInstruction(instruction) {
        // console.log(`Opcode: ${instruction.toString(16)}`);
        // adding with two because each instruction is 2 bytes
        this.pc += 2;
        const x = (instruction & 0x0F00) >> 8;
        const y = (instruction & 0x00F0) >> 4;
        // the instructions, v = register
        switch(instruction & 0xF000){
            case 0x0000:
                switch(instruction){
                    case 0x00E0:
                        this.monitor.clear(); // CLR -> Clear
                        break;
                    case 0x0EE:
                        this.pc = this.stack.pop(); // RET -> Return from a function
                        break;
                }
                break;
            case 0x1000:
                this.pc = instruction & 0xFFF; // JP addr
                break;
            case 0x2000:
                this.stack.push(this.pc);
                this.pc = instruction & 0xFFF; // CALL addr
                break;
            case 0x3000:
                if (this.v[x] === (instruction & 0xFF)) this.pc += 2; // SE Vx, byte
                break;
            case 0x4000:
                if (this.v[x] != (instruction & 0xFF)) this.pc += 2; // SNE Vx, byte
                break;
            case 0x5000:
                if (this.v[x] === this.v[y]) this.pc += 2; // SE Vx, byte
                break;
            case 0x6000:
                this.v[x] = instruction & 0xFF; // LD Vx, byte
                break;
            case 0x7000:
                this.v[x] += instruction & 0xFF; // ADD Vx, byte
                break;
            case 0x8000:
                switch(instruction & 0xF){
                    case 0x0:
                        this.v[x] = this.v[y]; // LD Vx, Vy
                        break;
                    case 0x1:
                        this.v[x], this.v[y]; // OR Vx, Vy
                        break;
                    case 0x2:
                        this.v[x] &= this.v[y]; // AND Vx, Vy
                        break;
                    case 0x3:
                        this.v[x] ^= this.v[y]; // XOR Vx, Vy
                    case 0x4:
                        let sum = this.v[x] += this.v[y]; // ADD Vx, Vy
                        this.v[0xF] = 0;
                        if (sum > 0xFF) this.v[0xF] = 1;
                        this.v[x] = sum;
                        break;
                    case 0x5:
                        this.v[0xF] = 0;
                        if (this.v[x] > this.v[y]) this.v[0xF] = 1; // SUB Vx, Vy
                        this.v[x] -= this.v[y];
                        break;
                    case 0x6:
                        this.v[0xF] = this.v[x] & 0x1; // SHR Vx, Vy
                        this.v[x] >>= 1;
                        break;
                    case 0x7:
                        this.x[0xF] = 0;
                        if (this.v[y] > this.v[x]) this.v[0xF] = 1; // SUBN Vx, Vy
                        this.v[x] = this.v[y] - this.v[x];
                        break;
                    case 0xE:
                        this.v[0xF] = this.v[x] & 0x80; // SHL Vx, {, Vy}
                        this.v[x];
                        break;
                    default:
                        throw new Error("INCORRECT OPCODE");
                }
                break;
            case 0x9000:
                if (this.v[x] != this.v[y]) this.pc += 2; // SNE Vx, Vy
                break;
            case 0xA000:
                this.index = instruction & 0xFFF; // LD I, addr
                break;
            case 0xB000:
                this.pc = (instruction & 0xFFF) + this.v[0]; // JP V0, addr
                break;
            case 0xC000:
                let rand = Math.floor(Math.random() * 0xFF); // RND Vx, byte
                this.v[x] = rand & (instruction & 0xFF);
                break;
            case 0xD000:
                let width = 8; // DRW Vx, Vy, nibble
                let height = instruction & 0xF;
                this.v[0xF] = 0;
                for(let row = 0; row < height; row++){
                    let sprite = this.memory[this.index + row];
                    for(let col = 0; col < width; col++){
                        if ((sprite & 0x80) > 0) {
                            if (this.monitor.setPixel(this.v[x] + col, this.v[y] + row)) this.v[0xF] = 1;
                        }
                        sprite <<= 1;
                    }
                }
                break;
            case 0xE000:
                switch(instruction & 0xFF){
                    case 0x9E:
                        if (this.keyboard.isKeyPressed(this.v[x])) this.pc += 2; // SKP Vx
                        break;
                    case 0xA1:
                        if (!this.keyboard.isKeyPressed(this.v[x])) this.pc += 2; // SKNP Vx
                        break;
                    default:
                        throw new Error("INCORRECT OPCODE");
                }
                break;
            case 0xF000:
                switch(instruction & 0xFF){
                    case 0x07:
                        this.v[x] = this.delayTimer; // LD Vx, DT
                        break;
                    case 0x0A:
                        this.paused = true; // LD Vx, K
                        let nextKeyPress = (key)=>{
                            this.v[x] = key;
                            this.paused = false;
                        };
                        this.keyboard.onNextKeyPress = nextKeyPress.bind(this);
                        break;
                    case 0x15:
                        this.delayTimer = this.v[x]; // LD Dt, Vx
                        break;
                    case 0x18:
                        this.soundTimer = this.v[x]; // LD ST, Vx
                        break;
                    case 0x1E:
                        this.index += this.v[x]; // ADD I, Vx
                        break;
                    case 0x29:
                        this.index = this.v[x] * 5; // LD F, Vx
                        break;
                    case 0x33:
                        this.memory[this.index] = parseInt(this.v[x] / 100); // LD B, Vx
                        this.memory[this.index + 1] = parseInt(this.v[x] % 100 / 10);
                        this.memory[this.index + 2] = parseInt(this.v[x] % 10);
                        break;
                    case 0x55:
                        for(let ri = 0; ri <= x; ri++)this.memory[this.index + ri] = this.v[ri];
                        break;
                    case 0x65:
                        for(let ri = 0; ri <= x; ri++)this.v[ri] = this.memory[this.index + 1];
                        break;
                    default:
                        throw new Error("0xF BAD OPCODE" + instruction);
                }
                break;
            default:
                throw new Error("BAD OPCODE");
        }
    }
}
exports.default = Chip8;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dBjcy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Monitor {
    constructor(scale){
        this.cols = 64;
        this.rows = 32;
        this.scale = scale;
        this.canvas = document.getElementById("screen");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.cols * this.scale;
        this.canvas.height = this.rows * this.scale;
        this.display = new Array(this.cols * this.rows);
    }
    setPixel(x, y) {
        if (x > this.cols) x -= this.cols;
        else if (x < 0) x += this.cols;
        if (y > this.rows) y -= this.rows;
        else if (y < 0) y += this.rows;
        this.display[x + y * this.cols] ^= 1;
        return !this.display[x + y * this.cols];
    }
    clear() {
        this.display = new Array(this.cols * this.rows);
    }
    paint() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for(let i = 0; i < this.cols * this.rows; i++){
            let x = i % this.cols * this.scale;
            let y = Math.floor(i / this.cols) * this.scale;
            if (this.display[i]) {
                this.ctx.fillStyle = "#000";
                this.ctx.fillRect(x, y, this.scale, this.scale);
            }
        }
    }
    testRender() {
        this.setPixel(0, 0);
        this.setPixel(5, 2);
        this.paint();
    }
}
exports.default = Monitor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5v2cX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Keyboard {
    constructor(){
        this.KEYMAP = {
            49: 0x1,
            50: 0x2,
            51: 0x3,
            52: 0xc,
            81: 0x4,
            87: 0x5,
            69: 0x6,
            82: 0xD,
            65: 0x7,
            83: 0x8,
            68: 0x9,
            70: 0xE,
            90: 0xA,
            88: 0x0,
            67: 0xB,
            86: 0xF // V F
        };
        this.keysPressed = [];
        // some instructions require waiting for the next key press
        this.onNextKeyPress = null;
        window.addEventListener("keydown", this.onKeyDown.bind(this), false);
        window.addEventListener("keyup", this.onKeyUp.bind(this), false);
    }
    isKeyPressed(keyCode) {
        return this.keysPressed[keyCode];
    }
    onKeyDown(event) {
        let key = this.KEYMAP[event.which];
        this.keysPressed[key] = true;
        // to make sure onNextKeyPress is initialized and the pressed key is actually mapped to a Chip-8 key
        if (this.onNextKeyPress !== null && key) {
            this.onNextKeyPress(parseInt(key));
            this.onNextKeyPress = null;
        }
    }
    onKeyUp(event) {
        let key = this.KEYMAP[event.which];
        this.keysPressed[key] = false;
    }
}
exports.default = Keyboard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyn9e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Speaker {
    constructor(){
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();
        this.gain = this.audioCtx.createGain();
        this.finish = this.audioCtx.destination;
        this.gain.connect(this.finish);
    }
    play(frequency) {
        if (this.audioCtx && !this.oscillator) {
            this.oscillator = this.audioCtx.createOscillator();
            this.oscillator.frequency.setValueAtTime(frequency || 440, this.audioCtx.currentTime);
            this.oscillator.type = "square";
            this.oscillator.connect(this.gain);
            this.oscillator.start();
        }
    }
    stop() {
        if (this.oscillator) {
            this.oscillator.stop();
            this.oscillator.disconnect();
            this.oscillator = null;
        }
    }
}
exports.default = Speaker;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7N9bM":[function() {},{}]},["farZc","8lqZg"], "8lqZg", "parcelRequiref961")

//# sourceMappingURL=index.975ef6c8.js.map
