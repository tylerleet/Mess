!function (e) {
    function t(t) {
        for (var a, n, r = t[0], i = t[1], o = 0, c = []; o < r.length; o++)
            n = r[o], Object.prototype.hasOwnProperty.call(s, n) && s[n] && c.push(s[n][0]), s[n] = 0;
        for (a in i)
            Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
        for (l && l(t); c.length; )
            c.shift()()
    }
    var a = {},
    s = {
        index: 0
    };
    function n(t) {
        if (a[t])
            return a[t].exports;
        var s = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(s.exports, s, s.exports, n),
        s.l = !0,
        s.exports
    }
    n.e = function (e) {
        var t = [],
        a = s[e];
        if (0 !== a)
            if (a)
                t.push(a[2]);
            else {
                var r = new Promise((function (t, n) {
                            a = s[e] = [t, n]
                        }));
                t.push(a[2] = r);
                var i,
                o = document.createElement("script");
                o.charset = "utf-8",
                o.timeout = 120,
                n.nc && o.setAttribute("nonce", n.nc),
                o.src = function (e) {
                    return n.p + "bundles/" + ({
                        "welcome-screen": "welcome-screen"
                    }
                        [e] || e) + "." + {
                        "welcome-screen": "a969"
                    }
                    [e] + ".js"
                }
                (e);
                var l = new Error;
                i = function (t) {
                    o.onerror = o.onload = null,
                    clearTimeout(c);
                    var a = s[e];
                    if (0 !== a) {
                        if (a) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                            r = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + n + ": " + r + ")",
                            l.name = "ChunkLoadError",
                            l.type = n,
                            l.request = r,
                            a[1](l)
                        }
                        s[e] = void 0
                    }
                };
                var c = setTimeout((function () {
                            i({
                                type: "timeout",
                                target: o
                            })
                        }), 12e4);
                o.onerror = o.onload = i,
                document.head.appendChild(o)
            }
        return Promise.all(t)
    },
    n.m = e,
    n.c = a,
    n.d = function (e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    },
    n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var s in e)
                n.d(a, s, function (t) {
                    return e[t]
                }
                    .bind(null, s));
        return a
    },
    n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        }
         : function () {
            return e
        };
        return n.d(t, "a", t),
        t
    },
    n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    n.p = "modules/mess/scripts/",
    n.oe = function (e) {
        throw console.error(e),
        e
    };
    var r = window.webpackJsonp = window.webpackJsonp || [],
    i = r.push.bind(r);
    r.push = t,
    r = r.slice();
    for (var o = 0; o < r.length; o++)
        t(r[o]);
    var l = i;
    n(n.s = "./src/scripts/index.js")
}
({
    "./src/scripts/actor-item-sort-btn.js":
    /*!********************************************!*\
    !*** ./src/scripts/actor-item-sort-btn.js ***!
    \********************************************/
    /*! exports provided: default */
    function (e, t, a) {
        "use strict";
        async function s(e, t, a) {
            if (!a.actor._id)
                return;
            t.querySelectorAll(".filter-list").forEach(e => {
                const t = e.closest(".tab").dataset.tab,
                s = document.createElement("a");
                s.innerHTML = '<i class="fas fa-sort"></i>',
                s.classList.add("mess-sort-btn"),
                s.title = `Sort ${t} alphabetically.`,
                s.style.flex = 0,
                s.style.margin = "0 5px 0 0",
                s.addEventListener("click", e => async function (e, t) {
                    const a = await fromUuid("Actor." + t);
                    let s = e.map(e => e.items || e.spells).flat();
                    s.sort((function (e, t) {
                            return e.name < t.name ? -1 : e.name > t.name ? 1 : 0
                        }));
                    let n = [s.shift()],
                    r = [];
                    for (; s.length > 0; n.push(s.shift()))
                        r = SortingHelpers.performIntegerSort(s[0], {
                            target: n[n.length - 1],
                            siblings: duplicate(n),
                            sortBefore: !1
                        });
                    const i = r.map(e => {
                        let t = e.update;
                        return t._id = e.target._id,
                        t
                    });
                    a.updateEmbeddedEntity("OwnedItem", i)
                }
                    (a[t], a.actor._id)),
                e.prepend(s)
            })
        }
        async function n() {
            Hooks.on("renderActorSheet", (e, t, a) => {
                s(0, t[0], a)
            })
        }
        a.r(t),
        a.d(t, "default", (function () {
                return n
            }))
    },
    "./src/scripts/add-scrolling.js":
    /*!**************************************!*\
    !*** ./src/scripts/add-scrolling.js ***!
    \**************************************/
    /*! exports provided: default */
    function (e, t, a) {
        "use strict";
        async function s() {
            Hooks.on("renderActorSheet", (async function (e, t, a) {
                    t[0].querySelectorAll('input[data-dtype="Number"], .item-uses input').forEach(e => {
                        e.addEventListener("wheel", e => {
                            e.preventDefault(),
                            e.stopPropagation(),
                            e.deltaY < 0 && (e.currentTarget.value = Number(e.currentTarget.value) + 1),
                            e.deltaY > 0 && (e.currentTarget.value = Math.max(Number(e.currentTarget.value) - 1, 0)),
                            $(e.currentTarget).change()
                        })
                    })
                }))
        }
        a.r(t),
        a.d(t, "default", (function () {
                return s
            }))
    },
    "./src/scripts/change-placeables.js":
    /*!******************************************!*\
    !*** ./src/scripts/change-placeables.js ***!
    \******************************************/
    /*! exports provided: changePlaceables */
    function (e, t, a) {
        "use strict";
        function s(e) {
            const {
                clones: t,
                destination: a,
                origin: s,
                originalEvent: n
            } = e.data;
            canvas._onDragCanvasPan(n);
            const r = a.x - s.x,
            i = a.y - s.y;
            let o = !1;
            if (e.data.previous) {
                const t = 30,
                s = .8,
                n = e.data.previous,
                r = e.data.momentum || 0,
                i = e.data.v || {
                    x: 0,
                    y: 0
                },
                l = {
                    x: a.x - n.x,
                    y: a.y - n.y
                },
                c = {
                    x: l.x - i.x,
                    y: l.y - i.y
                };
                e.data.momentum = c.x * c.x + c.y * c.y + r * s,
                o = !e.shiftKey && e.data.momentum < t
            }
            e.data.previous = a;
            for (let e of t || []) {
                let t = {
                    x: e._original.data.x + r,
                    y: e._original.data.y + i
                };
                o && (t = canvas.grid.getSnappedPosition(t.x, t.y, this.layer.options.gridPrecision)),
                e.data.x = t.x,
                e.data.y = t.y,
                e.refresh()
            }
        }
        function n() {
            PlaceableObject.prototype._onDragLeftMove = s
        }
        a.r(t),
        a.d(t, "changePlaceables", (function () {
                return n
            }))
    },
    "./src/scripts/chat-popup/index.js":
    /*!*****************************************!*\
    !*** ./src/scripts/chat-popup/index.js ***!
    \*****************************************/
    /*! exports provided: initChatPopUp */
    function (e, t, a) {
        "use strict";
        function s() {
            Hooks.on("renderChatMessage", (e, t, a) => {
                document.getElementById("chat").classList.contains("active") || (console.log("rendering chat message"), console.log(e, t, a), console.log(document.getElementById("chat").classList.contains("active")))
            });
            document.getElementById("hud").appendChild(document.createElement("div")).classList.add("mess-chat-popup")
        }
        a.r(t),
        a.d(t, "initChatPopUp", (function () {
                return s
            }))
    },
    "./src/scripts/draggable-lists/draggable-list.js":
    /*!*******************************************************!*\
    !*** ./src/scripts/draggable-lists/draggable-list.js ***!
    \*******************************************************/
    /*! exports provided: DraggableList */
    function (e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "DraggableList", (function () {
                return s
            }));
        class s {
            constructor(e, t, a = {}) {
                this.container = e,
                this.selector = t,
                this.options = mergeObject(this.defaultOptions, a),
                this._init()
            }
            get defaultOptions() {
                return {
                    offset: 21,
                    time: .2,
                    dir: null,
                    onDragStart: null,
                    onDragEnd: null,
                    onDrop: null
                }
            }
            async _init() {
                this._items = Array.from(this.container.querySelectorAll(this.selector)),
                this.container.addEventListener("dragleave", e => {
                    const t = this.container.getBoundingClientRect();
                    !e.insideChild && e.clientY < t.y + t.height - 5 && e.clientY > t.y + 5 && e.clientX > t.x + 5 && e.clientX < t.x - 5 + t.width ? e.insideChild = !0 : this._resetOffsets()
                }),
                this.container.addEventListener("drop", e => {}),
                this._items.forEach((e, t) => this._initItem(e, t))
            }
            async _initItem(e, t) {
                e.style.position = "relative",
                e.addEventListener("dragenter", e => this._onDragEnterItem(e, t)),
                e.addEventListener("dragleave", e => this._onDragLeaveItem(e, t)),
                e.addEventListener("dragend", e => {
                    this._resetOffsets()
                })
            }
            _onDragEnterItem(e, t) {
                console.time("dragEnter"),
                e.stopPropagation();
                const a = this.options.time,
                s = this.options.offset;
                this._resetOffsets();
                let n = e.currentTarget;
                if (console.log(e.currentTarget), n.matches(this.options.dir)) {
                    const t = Array.from(n.querySelectorAll(this.selector)),
                    s = n.getBoundingClientRect();
                    if (e.clientY > s.top && e.clientY < s.bottom)
                        return TweenLite.to(t, a, {
                            paddingTop: 0
                        }), void(this._over = n);
                    for (let a of t) {
                        if (a.getBoundingClientRect().bottom > e.clientY) {
                            n = a;
                            break
                        }
                    }
                }
                return this._over = n,
                console.log(n, s),
                TweenLite.to(n, a, {
                    paddingTop: s
                }),
                console.timeEnd("dragEnter"),
                !1
            }
            _onDragLeaveItem(e, t) {
                return e.stopPropagation(),
                !1
            }
            _resetOffsets(e = this.options.time) {
                TweenLite.to(this._items, e, {
                    paddingTop: 0
                })
            }
        }
    },
    "./src/scripts/draggable-lists/index.js":
    /*!**********************************************!*\
    !*** ./src/scripts/draggable-lists/index.js ***!
    \**********************************************/
    /*! exports provided: initDraggableLists */
    function (e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "initDraggableLists", (function () {
                return n
            }));
        var s = a(/*! ./draggable-list */ "./src/scripts/draggable-lists/draggable-list.js");
        function n() {
            const e = SidebarDirectory.prototype.activateListeners;
            SidebarDirectory.prototype.activateListeners = function (t) {
                const a = t[0].querySelector(".directory-list");
                new s.DraggableList(a, ".entity, .folder", {
                    dir: ".folder"
                }),
                e.call(this, t)
            },
            Hooks.on("renderActorSheet", (e, t, a) => {
                t[0].querySelectorAll(".item-list").forEach(e => new s.DraggableList(e, ".item"))
            }),
            SceneDirectory.prototype._onLazyLoadImage = function (e, t) {
                for (let a of e) {
                    if (!a.isIntersecting)
                        continue;
                    const e = a.target;
                    e.dataset.backgroundImage && (e.children[0].style["background-image"] = `url("${e.dataset.backgroundImage}")`, delete e.dataset.backgroundImage);
                    const s = e.querySelector("img");
                    s && s.dataset.src && (s.src = s.dataset.src, delete s.dataset.src),
                    t.unobserve(a.target)
                }
            }
        }
    },
    "./src/scripts/index.js":
    /*!******************************!*\
    !*** ./src/scripts/index.js ***!
    \******************************/
    /*! no exports provided */
    function (e, t, a) {
        "use strict";
        a.r(t);
        var s = a(/*! ./rolls */ "./src/scripts/rolls/index.js"),
        n = a(/*! ./settings.js */ "./src/scripts/settings.js"),
        r = a(/*! ./modify-templates.js */ "./src/scripts/modify-templates.js"),
        i = a(/*! ./change-placeables.js */ "./src/scripts/change-placeables.js"),
        o = a(/*! ./actor-item-sort-btn.js */ "./src/scripts/actor-item-sort-btn.js"),
        l = a(/*! ./prepared-spell-tracker.js */ "./src/scripts/prepared-spell-tracker.js"),
        c = a(/*! ./add-scrolling.js */ "./src/scripts/add-scrolling.js");
        a(/*! ./draggable-lists */ "./src/scripts/draggable-lists/index.js"),
        a(/*! ./chat-popup */ "./src/scripts/chat-popup/index.js");
        Hooks.on("ready", (async function () {
                if (game.settings.get("mess", "actor-item-sort") && Object(o.default)(), game.settings.get("mess", "prepared-spell-tracker") && Object(l.default)(), game.settings.get("mess", "add-scrolling") && Object(c.default)(), CONFIG.debug.mess) {
                    (await fromUuid("Actor.xV3LUAg05Pz5MFTS")).sheet.render(!0)
                }
                if (!game.user.isGM)
                    return;
                const e = game.modules.get("mess"),
                t = e.data.title,
                s = e.data.version;
                game.settings.register(t, "version", {
                    name: t + " Version",
                default:
                    "0.0.0",
                    type: String,
                    scope: "world"
                });
                const n = game.settings.get(t, "version");
                isNewerVersion(s, n) && (await a.e(/*! import() | welcome-screen */ "welcome-screen").then(a.bind(null, /*! ./welcome-screen.js */ "./src/scripts/welcome-screen.js"))).default()
            })),
        Hooks.on("init", (function () {
                game.mess = {},
                CONFIG.debug.mess = !1,
                n.MessSettings.init(),
                Object(s.rolling)(),
                Object(r.dndTemplateSettings)(),
                Object(r.changeTemplates)(),
                game.settings.get("mess", "change-placeables") && Object(i.changePlaceables)()
            }))
    },
    "./src/scripts/modify-templates.js":
    /*!*****************************************!*\
    !*** ./src/scripts/modify-templates.js ***!
    \*****************************************/
    /*! exports provided: changeTemplates, dndTemplateSettings */
    function (e, t, a) {
        "use strict";
        function s() {
            let e = MeasuredTemplate.prototype.refresh.toString();
            if (game.settings.get("mess", "modify-templates") && (e = e.replace(/this\.template\.beginTextureFill\(\{[\s\S]*\}\)\;/, '\n\t\t\t{\n\t\t\t\tlet mat = PIXI.Matrix.IDENTITY;\n\t\t\t\t// rectangle\n\t\t\t\tif (this.shape.width && this.shape.height)\n\t\t\t\t\tmat.scale(this.shape.width / this.texture.width, this.shape.height / this.texture.height);\n\t\t\t\telse if (this.shape.radius) {\n\t\t\t\t\tmat.scale(this.shape.radius * 2 / this.texture.height, this.shape.radius * 2 / this.texture.width)\n\t\t\t\t\t// Circle center is texture start...\n\t\t\t\t\tmat.translate(-this.shape.radius, -this.shape.radius);\n\t\t\t\t} else if (this.data.t === "ray") {\n\t\t\t\t\tconst d = canvas.dimensions,\n\t\t\t\t\t\t\t\theight = this.data.width * d.size / d.distance,\n\t\t\t\t\t\t\t\twidth = this.data.distance * d.size / d.distance;\n\t\t\t\t\tmat.scale(width / this.texture.width, height / this.texture.height);\n\t\t\t\t\tmat.translate(0, -height * 0.5);\n\n\t\t\t\t\tmat.rotate(toRadians(this.data.direction));\n\t\t\t\t} else {// cone\n\t\t\t\t\tconst d = canvas.dimensions;\n\t\t\t\n\t\t\t\t\t// Extract and prepare data\n\t\t\t\t\tlet {direction, distance, angle} = this.data;\n\t\t\t\t\tdistance *= (d.size / d.distance);\n\t\t\t\t\tdirection = toRadians(direction);\n\t\t\t\t\tconst width = this.data.distance * d.size / d.distance;\n\n\t\t\t\t\tconst angles = [(angle/-2), (angle/2)];\n\t\t\t\t\tdistance = distance / Math.cos(toRadians(angle/2));\n\t\t\t\n\t\t\t\t\t// Get the cone shape as a polygon\n\t\t\t\t\tconst rays = angles.map(a => Ray.fromAngle(0, 0, direction + toRadians(a), distance+1));\n\t\t\t\t\tconst height = Math.sqrt((rays[0].B.x - rays[1].B.x) * (rays[0].B.x - rays[1].B.x)\n\t\t\t\t\t\t\t\t\t\t\t\t\t+ (rays[0].B.y - rays[1].B.y) * (rays[0].B.y - rays[1].B.y));\n\t\t\t\t\tmat.scale(width / this.texture.width, height / this.texture.height);\n\t\t\t\t\tmat.translate(0, -height/2)\n\t\t\t\t\tmat.rotate(toRadians(this.data.direction));\n\t\t\t\t}\n\t\t\t\tthis.template.beginTextureFill({\n\t\t\t\t\ttexture: this.texture,\n\t\t\t\t\tmatrix: mat,\n\t\t\t\t\talpha: 0.8\n\t\t\t\t});\n\t\t\t\t// move into draw or so\n\t\t\t\tconst source = getProperty(this.texture, "baseTexture.resource.source")\n\t\t\t\tif ( source && (source.tagName === "VIDEO") ) {\n\t\t\t\t\tsource.loop = true;\n\t\t\t\t\tsource.muted = true;\n\t\t\t\t\tgame.video.play(source);\n\t\t\t\t}\n\t\t}'), Hooks.on("renderMeasuredTemplateConfig", (e, t, a) => {
                        t[0].querySelector(".file-picker").dataset.type = "imagevideo"
                    })), game.settings.get("mess", "templateDrawBordersOnlyOnHighlight") && (e = e.replace(/this\.\_borderThickness/, "this.texture && !this._hover ? 0 : this._borderThickness"), e = e.replace(/return\sthis\;/, "\n\t\t\tconst grid = canvas.grid;\n\t\t\t// only show grid highlights on hover\n\t\t\tif (this.texture) {\n\t\t\t\tconst hl = grid.getHighlightLayer(`Template.${this.id}`);\n\t\t\t\tif (hl)\n\t\t\t\t\thl.renderable = this._hover;\n\t\t\t}\n\t\t\treturn this;")), MeasuredTemplate.prototype.refresh = Function(`"use strict"; return ( function ${e} )`)(), game.settings.get("mess", "templateAutoTargeting")) {
                MeasuredTemplate.prototype.getTargets = i,
                MeasuredTemplate.prototype.isTokenInside = r;
                const e = MeasuredTemplate.prototype._onDragLeftMove;
                MeasuredTemplate.prototype._onDragLeftMove = function (t) {
                    const a = e.bind(this)(t);
                    for (let e of t.data.clones)
                        this.getTargets(e);
                    return a
                }
            }
        }
        async function n() {
            if ("dnd5e" !== game.system.id)
                return;
            const e = await import("/systems/dnd5e/module/pixi/ability-template.js"),
            t = e.default || e.AbilityTemplate;
            if (game.settings.get("mess", "modify-templates")) {
                Hooks.on("renderItemSheet", o);
                const e = t.fromItem;
                t.fromItem = function (t) {
                    const a = e.bind(this)(t);
                    let s = t.getFlag("mess", "templateTexture");
                    if (!s && t.hasDamage) {
                        const e = game.settings.get("mess", "templateTexture") || {};
                        s = e[t.data.data.damage.parts[0][1]] || {},
                        s = s[a.data.t]
                    }
                    return s && loadTexture(s).then(e => {
                        a.texture = e,
                        a.data.texture = s,
                        a.refresh()
                    }),
                    a.item = t,
                    a
                }
            }
            if (game.settings.get("mess", "templateAutoTargeting")) {
                const e = t.prototype.activatePreviewListeners.toString().replace(/this\.refresh\(\)\;/, "this.refresh();\n\t\t\t\t\t\tthis.getTargets(this);\n\t\t\t\t\t");
                t.prototype.getTargets = i,
                t.prototype.isTokenInside = r,
                t.prototype.activatePreviewListeners = Function(`"use strict"; return ( function ${e} )`)()
            }
        }
        function r(e) {
            const t = canvas.scene.data.grid,
            a = this.data.x,
            s = this.data.y,
            n = e.width >= 1 ? .5 : e.width / 2,
            r = e.height >= 1 ? .5 : e.height / 2;
            for (let i = n; i < e.width; i++)
                for (let n = r; n < e.height; n++) {
                    const r = {
                        x: e.x + i * t - a,
                        y: e.y + n * t - s
                    };
                    if (this.shape.contains(r.x, r.y))
                        return !0
                }
            return !1
        }
        function i(e) {
            const t = canvas.scene.getEmbeddedCollection("Token");
            let a = [];
            for (const s of t)
                e.isTokenInside(s) && a.push(s._id);
            game.user.updateTokenTargets(a)
        }
        async function o(e, t) {
            const a = document.createElement("div");
            a.classList.add("form-group"),
            a.appendChild(document.createElement("label")).innerText = game.i18n.localize("MESS.itemSheet.templateTexture");
            const s = a.appendChild(document.createElement("div"));
            s.classList.add("form-fields");
            const n = s.appendChild(document.createElement("input"));
            n.dataset.dtype = "String",
            n.type = "text",
            n.name = "flags.mess.templateTexture",
            n.value = e.object.getFlag("mess", "templateTexture") || "",
            s.insertAdjacentHTML("beforeend", '\n\t\t<button type="button" class="file-picker" data-type="imagevideo" data-target="flags.mess.templateTexture" title="Browse Files" tabindex="-1">\n\t\t\t<i class="fas fa-file-import fa-fw"></i>\n\t\t</button>\n\t');
            const r = s.querySelector("button");
            r.style.flex = "0",
            e._activateFilePicker(r);
            const i = t[0].querySelector('[name="data.target.units"]');
            i && i.closest(".form-group").after(a)
        }
        a.r(t),
        a.d(t, "changeTemplates", (function () {
                return s
            })),
        a.d(t, "dndTemplateSettings", (function () {
                return n
            }))
    },
    "./src/scripts/prepared-spell-tracker.js":
    /*!***********************************************!*\
    !*** ./src/scripts/prepared-spell-tracker.js ***!
    \***********************************************/
    /*! exports provided: default */
    function (e, t, a) {
        "use strict";
        async function s() {
            Hooks.on("renderActorSheet", (async function (e, t, a) {
                    const s = await fromUuid("Actor." + a.actor._id);
                    if (s.isNPC)
                        return;
                    if (!t[0].querySelector(".spell-dc"))
                        return;
                    let n = document.createElement("div");
                    n.classList.add("spell-detail"),
                    n.classList.add("spell-slots"),
                    n.style.flex = "1",
                    n.style.border = "none";
                    n.appendChild(document.createElement("span")).innerText = `${game.i18n.localize("MESS.actorSheet.preparedSpellTracker")}: ${a.preparedSpells}`;
                    const r = n.appendChild(document.createElement("span"));
                    r.innerText = " / ",
                    r.classList.add("sep");
                    const i = n.appendChild(document.createElement("input"));
                    if (i.type = "text", i.value = s.getFlag("mess", "maxPreparedSpells") || 0, i.addEventListener("change", (async function (e) {
                                e.preventDefault(),
                                e.stopPropagation();
                                const t = Number(e.currentTarget.value);
                                return isNaN(t) ? (e.currentTarget.value = s.getFlag("mess", "maxPreparedSpells") || 0, !1) : (s.setFlag("mess", "maxPreparedSpells", t), !1)
                            })), "Tidy5eSheet" === e.constructor.name) {
                        const e = t[0].querySelector(".spellcasting-ability");
                        if (!e)
                            return;
                        e.appendChild(n, e)
                    } else {
                        const e = t[0].querySelector(".spellbook .inventory-list");
                        if (!e)
                            return;
                        n.style.flex = "0",
                        n.style.alignSelf = "flex-start",
                        n.style.margin = "0 8px",
                        e.parentNode.insertBefore(n, e)
                    }
                }))
        }
        a.r(t),
        a.d(t, "default", (function () {
                return s
            }))
    },
    "./src/scripts/rolls/apply-dmg.js":
    /*!****************************************!*\
    !*** ./src/scripts/rolls/apply-dmg.js ***!
    \****************************************/
    /*! exports provided: default */
    function (e, t, a) {
        "use strict";
        function s(e) {
            return Array.from(e[0].parentNode.querySelectorAll(".mess-dice-result:not(.mess-versatile")).map(e => Number(e.querySelector("span").innerText)).reduce((e, t) => e + t, 0)
        }
        function n(e) {
            const t = Array.from(e[0].parentNode.querySelectorAll(".mess-dice-result"));
            t.length > 1 && t[1].classList.contains("mess-versatile") && t.splice(0, 1);
            return t.map(e => Number(e.querySelector("span").innerText)).reduce((e, t) => e + t, 0)
        }
        function r() {
            const e = e => !0,
            t = e => e[0].parentNode.querySelector(".mess-dice-result:not(.mess-versatile)"),
            a = e => e[0].parentNode.querySelector(".mess-versatile"),
            r = e => !!e[0].closest(".mess-attack-card").dataset.targetId,
            l = e => !r(e),
            c = [{
                    name: game.i18n.localize("MESS.attackCard.contextMenu.applyTarget"),
                    condition: r
                }, {
                    name: game.i18n.localize("MESS.attackCard.contextMenu.applySelected"),
                    condition: l
                }, {
                    name: game.i18n.localize("MESS.attackCard.contextMenu.dmg"),
                    condition: t,
                    icon: '<i class="fas fa-user-injured"></i>'
                }, {
                    name: "full",
                    icon: "",
                    condition: t,
                    callback: (e, t) => o(t, 1),
                    content: e => `<span>${s(e)}</span><label>${game.i18n.localize("MESS.attackCard.contextMenu.full")}</label>`
                }, {
                    name: "half",
                    icon: "",
                    condition: t,
                    callback: (e, t) => o(t, 1),
                    content: e => `<span>${Math.max(Math.floor(.5*s(e)),1)}</span><label>${game.i18n.localize("MESS.attackCard.contextMenu.half")}</label>`
                }, {
                    name: "double",
                    icon: "",
                    condition: t,
                    callback: (e, t) => o(t, 1),
                    content: e => `<span>${Math.floor(2*s(e))}</span><label>${game.i18n.localize("MESS.attackCard.contextMenu.double")}</label>`
                }, {
                    name: game.i18n.localize("MESS.attackCard.contextMenu.healing"),
                    condition: t,
                    icon: '<i class="fas fa-prescription-bottle-alt"></i>'
                }, {
                    name: "full",
                    icon: "",
                    condition: t,
                    callback: (e, t) => o(t, -1),
                    content: e => `<span>${s(e)}</span><label>${game.i18n.localize("MESS.attackCard.contextMenu.full")}</label>`
                }, {
                    name: [game.i18n.localize("DND5E.Versatile"), " - ", game.i18n.localize("MESS.attackCard.contextMenu.dmg")],
                    condition: a,
                    icon: '<i class="fas fa-user-injured"></i>'
                }, {
                    name: "full",
                    icon: "",
                    condition: a,
                    callback: (e, t) => o(t, 1),
                    content: e => `<span>${n(e)}</span><label>${game.i18n.localize("MESS.attackCard.contextMenu.full")}</label>`
                }, {
                    name: "half",
                    icon: "",
                    condition: a,
                    callback: (e, t) => o(t, 1),
                    content: e => `<span>${Math.max(Math.floor(.5*n(e)),1)}</span><label>${game.i18n.localize("MESS.attackCard.contextMenu.half")}</label>`
                }, {
                    name: "double",
                    icon: "",
                    condition: a,
                    callback: (e, t) => o(t, 1),
                    content: e => `<span>${Math.floor(2*n(e))}</span><label>${game.i18n.localize("MESS.attackCard.contextMenu.double")}</label>`
                }, {
                    name: [game.i18n.localize("DND5E.Versatile"), " - ", game.i18n.localize("MESS.attackCard.contextMenu.healing")],
                    condition: a,
                    icon: '<i class="fas fa-prescription-bottle-alt"></i>'
                }, {
                    name: "full",
                    icon: "",
                    condition: a,
                    callback: (e, t) => o(t, -1),
                    content: e => `<span>${n(e)}</span><label>${game.i18n.localize("MESS.attackCard.contextMenu.full")}</label>`
                }
            ],
            d = [{
                    name: game.i18n.localize("MESS.attackCard.contextMenu.applyTarget"),
                    condition: r
                }, {
                    name: game.i18n.localize("MESS.attackCard.contextMenu.applySelected"),
                    condition: l
                }, {
                    name: game.i18n.localize("MESS.attackCard.contextMenu.dmg"),
                    condition: e,
                    icon: '<i class="fas fa-user-injured"></i>'
                }, {
                    name: "full",
                    icon: "",
                    condition: e,
                    callback: (e, t) => o(t, 1),
                    content: e => `<span>${e[0].querySelector("span").innerText}</span><label>${game.i18n.localize("MESS.attackCard.contextMenu.full")}</label>`
                }, {
                    name: "half",
                    icon: "",
                    condition: e,
                    callback: (e, t) => o(t, 1),
                    content: e => `<span>${Math.max(Math.floor(.5*Number(e[0].querySelector("span").innerText)),1)}</span><label>${game.i18n.localize("MESS.attackCard.contextMenu.half")}</label>`
                }, {
                    name: "double",
                    icon: "",
                    condition: e,
                    callback: (e, t) => o(t, 1),
                    content: e => `<span>${Math.floor(2*Number(e[0].querySelector("span").innerText))}</span><label>${game.i18n.localize("MESS.attackCard.contextMenu.double")}</label>`
                }, {
                    name: game.i18n.localize("MESS.attackCard.contextMenu.healing"),
                    condition: e,
                    icon: '<i class="fas fa-prescription-bottle-alt"></i>'
                }, {
                    name: "full",
                    icon: "",
                    condition: e,
                    callback: (e, t) => o(t, -1),
                    content: e => `<span>${e[0].querySelector("span").innerText}</span>`
                }
            ];
            ContextMenu.prototype.bind = Function('"use strict"; return  ( function ' + ContextMenu.prototype.bind.toString().replace(/this\.render\(parent\)/, "this.render(parent, event)") + ")")(),
            Hooks.on("renderChatLog", (e, t, a) => {
                new i(t.find("#chat-log"), ".mess-chat-dmg .mess-dice-result", d),
                new i(t.find("#chat-log"), ".mess-chat-dmg .mess-chat-roll-type", c)
            }),
            Hooks.on("getChatLogEntryContext", (function (e, t) {
                    setProperty(game, "mess.chatLogEntryContextOptions", t);
                    const a = e => canvas.tokens.controlled.length && e.find(".dice-roll .dice-result").length;
                    for (let e = 1; e < t.length; e++)
                        t[e].condition = a
                }))
        }
        a.r(t),
        a.d(t, "default", (function () {
                return r
            }));
        class i extends ContextMenu {
            constructor(...e) {
                super(...e),
                this._menuItems = this.menuItems
            }
            render(e, t) {
                const a = this._menuItems.filter(t => !t.condition || (t.condition instanceof Function ? t.condition(e) : t.condition));
                if (!a.length)
                    return;
                t.stopPropagation(),
                this.menuItems = a.map(t => (t.content && (t.name = t.content(e)), t));
                let s = $("#context-menu").length ? $("#context-menu") : $('<nav id="context-menu"></nav>'),
                n = $('<ol class="context-items"></ol>');
                s.html(n);
                const r = document.createDocumentFragment();
                for (let t of this.menuItems) {
                    const a = document.createElement("li");
                    t.name instanceof Array && (t.name = t.name.map(e => game.i18n.localize(e)).join("")),
                    t.icon ? a.innerHTML = `${t.icon}${game.i18n.localize(t.name)}` : a.innerHTML = game.i18n.localize(t.name),
                    t.callback ? (a.addEventListener("click", s => {
                            s.preventDefault(),
                            s.stopPropagation(),
                            t.callback(e, a),
                            this.close()
                        }), a.classList.add("context-item")) : a.classList.add("mess-context-menu-header"),
                    r.appendChild(a)
                }
                return n[0].appendChild(r),
                this._setPosition(s, e),
                this._animateOpen(s)
            }
            _setPosition(e, t) {
                e.removeClass("expand-up expand-down"),
                super._setPosition(e, t)
            }
        }
        async function o(e, t) {
            const a = Number(e.querySelector("span").innerText),
            s = e.closest(".mess-attack-card"),
            n = s.dataset.targetId;
            if (n) {
                const e = s.dataset.sceneId,
                r = game.scenes.get(e);
                if (!r)
                    return void ui.notifications.error(game.i18n.localize("MESS.attackCard.applyDamage.sceneNotFound"));
                const i = new Token(r.getEmbeddedEntity("Token", n));
                if (!i)
                    return void ui.notifications.error(game.i18n.localize("MESS.attackCard.applyDamage.targetNotFound"));
                if (!i.owner)
                    return void ui.notifications.error(game.i18n.localize("MESS.attackCard.applyDamage.targetNotOwner"));
                i.actor.applyDamage(a, t)
            } else {
                const e = canvas.tokens.controlled;
                if (!e.length)
                    return void ui.notifications.error(game.i18n.localize("MESS.attackCard.contextMenu.error"));
                for (const s of e) {
                    s.actor.applyDamage(a, t)
                }
            }
        }
    },
    "./src/scripts/rolls/controls.js":
    /*!***************************************!*\
    !*** ./src/scripts/rolls/controls.js ***!
    \***************************************/
    /*! exports provided: default */
    function (e, t, a) {
        "use strict";
        async function s(e, t, a) {
            t[0].classList.add("mess"),
            game.user.isGM && t[0].classList.add("mess-is-gm");
            const s = document.createElement("div");
            s.classList.add("mess-roll-control");
            const n = game.settings.get("mess", game.userId + ".adv-selector"),
            r = game.settings.get("mess", game.userId + ".autoroll-selector"),
            i = {
                advantage: "advantage" === n,
                normal: "normal" === n,
                disadvantage: "disadvantage" === n,
                autoShow: game.settings.get("mess", game.userId + ".autoshow-selector"),
                ...r
            };
            s.insertAdjacentHTML("afterbegin", await renderTemplate("modules/mess/templates/roll-control.html", i)),
            s.querySelector(".mess-show-btn").addEventListener("click", e => {
                e.preventDefault(),
                e.stopPropagation();
                const t = e.currentTarget,
                a = t.classList.contains("active");
                t.classList.toggle("active"),
                game.settings.set("mess", game.userId + ".autoshow-selector", !a)
            }),
            s.querySelectorAll(".mess-adv-selector a").forEach(e => {
                e.addEventListener("click", (async function (e) {
                        e.preventDefault(),
                        e.stopPropagation();
                        const t = Array.from(e.currentTarget.parentNode.querySelectorAll("a")),
                        a = t.findIndex(e => e.classList.contains("mess-selected"));
                        t[a].classList.remove("mess-selected");
                        const s = t[(a + 1) % t.length];
                        s.classList.add("mess-selected"),
                        game.settings.set("mess", game.userId + ".adv-selector", s.name)
                    })),
                e.addEventListener("contextmenu", (async function (e) {
                        e.preventDefault(),
                        e.stopPropagation();
                        const t = Array.from(e.currentTarget.parentNode.querySelectorAll("a")),
                        a = t.findIndex(e => e.classList.contains("mess-selected"));
                        t[a].classList.remove("mess-selected");
                        const s = t[(a + t.length - 1) % t.length];
                        s.classList.add("mess-selected"),
                        game.settings.set("mess", game.userId + ".adv-selector", s.name)
                    }))
            }),
            s.querySelectorAll(".mess-autoroll-selector a").forEach(e => {
                e.addEventListener("click", (async function (e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        e.currentTarget.classList.toggle("mess-selected");
                        let t = game.settings.get("mess", game.userId + ".autoroll-selector");
                        t[e.currentTarget.name] = e.currentTarget.classList.contains("mess-selected"),
                        game.settings.set("mess", game.userId + ".autoroll-selector", t)
                    }))
            });
            const o = document.getElementById("chat-controls");
            o.insertBefore(s, o.childNodes[0])
        }
        a.r(t),
        t.default = function () {
            Hooks.on("renderChatLog", s),
            game.settings.register("mess", game.userId + ".adv-selector", {
                name: "Mess - Advantage Selector",
            default:
                "normal",
                type: String,
                scope: "user"
            }),
            game.settings.register("mess", game.userId + ".autoroll-selector", {
                name: "Mess - Autoroll Selector",
            default: {
                    hit: !1,
                    dmg: !1
                },
                type: Object,
                scope: "user"
            }),
            game.settings.register("mess", game.userId + ".autoshow-selector", {
                name: "Mess - Auto Show",
            default:
                !1,
                type: Boolean,
                scope: "user"
            })
        }
    },
    "./src/scripts/rolls/dice.js":
    /*!***********************************!*\
    !*** ./src/scripts/rolls/dice.js ***!
    \***********************************/
    /*! exports provided: rollD20, getToHitData, rollToHit, getDmgData, rollDmg */
    function (e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "rollD20", (function () {
                return r
            })),
        a.d(t, "getToHitData", (function () {
                return i
            })),
        a.d(t, "rollToHit", (function () {
                return o
            })),
        a.d(t, "getDmgData", (function () {
                return l
            })),
        a.d(t, "rollDmg", (function () {
                return c
            }));
        a(/*! ./util.js */ "./src/scripts/rolls/util.js");
        function s() {
            return document.getElementById("mess-roll-mod").value
        }
        function n() {
            return game.settings.get("mess", game.userId + ".adv-selector")
        }
        async function r(e) {
            let t = n(),
            a = 1,
            r = e.halflingLucky ? "r=1" : "";
            "advantage" === t ? (a = e.elvenAccuracy ? 3 : 2, r += "kh", e.title += ` (${game.i18n.localize("DND5E.Advantage")})`) : "disadvantage" === t && (a = 2, r += "kl", e.title += ` (${game.i18n.localize("DND5E.Disadvantage")})`);
            let i = `${a}d20${r}`;
            e.reliableTalent && (i = `{${a}d20${r},10}kh`),
            e.parts.unshift(i);
            const o = s();
            o && e.parts.push(o);
            let l = new Roll(e.parts.join("+"), e);
            l.roll();
            const c = l.parts[0].total;
            let d = {
                ...e,
                tooltip: await l.getTooltip(),
                roll: l,
                crit: c >= 20,
                fumble: c <= 1,
                isGM: game.user.isGM,
                showRolls: game.settings.get("mess", game.userId + ".autoshow-selector")
            };
            const m = await renderTemplate("modules/mess/templates/roll-card.html", d);
            let u = {
                user: game.user._id,
                type: CONST.CHAT_MESSAGE_TYPES.OTHER,
                content: m,
                speaker: {
                    actor: this,
                    alias: this.name
                }
            },
            g = game.settings.get("core", "rollMode");
            ["gmroll", "blindroll"].includes(g) && (u.whisper = ChatMessage.getWhisperIDs("GM")),
            "blindroll" === g && (u.blind = !0);
            if (game.mess.diceSoNice) {
                let e = null,
                t = !1;
                ["gmroll", "blindroll"].includes(g) && (e = ChatMessage.getWhisperIDs("GM")),
                "blindroll" === g && (t = !0),
                await game.dice3d.showForRoll(l, game.user, !0, e, t)
            }
            ChatMessage.create(u)
        }
        async function i({
            actor: e,
            item: t
        }) {
            if (!t.hasAttack)
                return null;
            const a = e.data.data,
            n = t.data.data,
            r = e.data.flags.dnd5e || {};
            let i = t.getRollData();
            const o = ["@mod"];
            ("weapon" !== t.data.type || n.proficient) && o.push("@prof"),
            i.parts = o,
            "weapon" === t.data.type && r.weaponCriticalThreshold && (i.critical = parseInt(r.weaponCriticalThreshold)),
            ["weapon", "spell"].includes(t.data.type) && r.elvenAccuracy && ["dex", "int", "wis", "cha"].includes(t.abilityMod) && (i.elvenAccuracy = !0),
            r.halflingLucky && (i.halflingLucky = !0);
            const l = a.bonuses[n.actionType] || {};
            (n.attackBonus || l.attack) && (i.atk = [n.attackBonus, l.attack].filterJoin(" + "), o.push("@atk"));
           
		   // Ammunition Attack Bonus
                const consume = n.consume;
                if (consume?.type === "ammo") {
                    const ammo = e.items.get(consume.target);
                    if (ammo?.data) {
                        const q = ammo.data.data.quantity;
                        const consumeAmount = consume.amount ?? 0;
                        if (q && (q - consumeAmount >= 0)) {
                            let ammoBonus = ammo.data.data.attackBonus;
                            if (ammoBonus) {
                              ammoBonus && o.push(ammoBonus);
                            }
                        }
                    }
                }
			
			let c = new Roll(i.parts.join("+"), i);
            c.roll(),
            i.totalModifier = c._safeEval(Roll.cleanFormula(c.terms)),
            i.totalModifier = i.totalModifier >= 0 ? "+" + i.totalModifier : i.totalModifier;
            const d = s();
            d && (i.parts.push(d), c = new Roll(i.parts.join("+"), i), i.totalModifier += `+(${d})`);
            try {
                const e = c._safeEval(Roll.cleanFormula(i.totalModifier));
                i.totalModifier = e >= 0 ? "+" + e : e
            } catch (e) {}
            return i.totalModifier = i.totalModifier,
            i.formula = i.parts.join("+"),
            i.terms = Roll.cleanFormula(c.terms),
            i
        }
        async function o(e) {
            const t = e.currentTarget;
            t.disabled = !0;
            const a = t.closest(".chat-card"),
            s = a.closest(".message").dataset.messageId;
            if (s) {
                e.stopPropagation(),
                e.preventDefault();
                const t = game.messages.get(s);
                if (!t.owner && !t.isAuthor)
                    return ui.notifications.error("You do not own the permissions to make that roll!"), !1
            }
            const r = CONFIG.Item.entityClass._getChatCardActor(a);
            if (!r.owner)
                return !1;
            const o = r.getOwnedItem(a.dataset.itemId);
            if (!o)
                return ui.notifications.error(`The requested item ${a.dataset.itemId} no longer exists on Actor ${r.name}`);
            let l = await i({
                actor: r,
                item: o
            }),
            c = n(),
            m = 1,
            u = l.halflingLucky ? "r=1" : "";
            "advantage" === c ? (m = l.elvenAccuracy ? 3 : 2, u += "kh") : "disadvantage" === c && (m = 2, u += "kl"),
            l.parts.unshift(`${m}d20${u}`);
            let g = new Roll(l.parts.join("+"), l);
            g.roll();
            let p = document.createElement("div");
            p.classList.add("dice-roll"),
            p.classList.add("mess-dice-result"),
            game.user.isGM && p.classList.add("mess-gm-dice");
            const f = p.appendChild(document.createElement("span"));
            f.classList.add("mess-roll-container"),
            f.innerHTML = `<span class='mess-roll-total'>${g.total}</span>`,
            p.insertAdjacentHTML("beforeend", await g.getTooltip());
            let h = "";
            const y = l.terms.split(/(?=[+-])/),
            b = l.formula.split(/(?=[+-])/);
            console.log(l),
            console.log(y, b);
            for (let e = 0; e < y.length; e++) {
                const t = y[e];
                h += `\n\t\t\t<div class="dice">\n\t\t\t\t<header class="part-header flexrow">\n          <span class='part-formula'>${b[e]}</span>\n\t\t\t\t\t<span class="part-total">${t}</span>\n\t\t\t\t</header>\n\t\t\t</div>\n\t\t`
            }
            p.querySelector(".dice-tooltip").insertAdjacentHTML("beforeend", h);
            p.childNodes[1].classList.add("hidden");
            const v = l.critical || 20,
            T = l.fumble || 1,
            S = g.parts[0].total;
            return S >= v && (f.classList.add("crit"), a.querySelector(".mess-chat-dmg .mess-chat-roll-type").innerHTML += " - Crit!", a.querySelectorAll(".mess-button-dmg").forEach((e, t) => {
                    const a = new Roll(e.dataset.formula).alter(2).formula;
                    e.innerHTML = '<i class="fas fa-dice-d20"></i> ' + a,
                    e.dataset.formula = a
                })),
            S <= T && f.classList.add("fumble"),
            s ? d(s, g, a, e.currentTarget, p) : e.currentTarget.parentNode.replaceChild(p, e.currentTarget),
            g
        }
        async function l({
            actor: e,
            item: t,
            spellLevel: a = null
        }) {
            if (!t.hasDamage)
                return null;
            const s = e.data.data,
            n = t.data.data;
			let z = e.items;
            let r = t.getRollData();
            if (a && (r.item.level = a), r.parts = duplicate(n.damage.parts), n.damage.versatile && r.parts.splice(1, 0, [n.damage.versatile, "versatile"]), !t.getFlag("mess", "isBonusDamage"))
                for (let a of e.items) {
                    if (a.id === t.id)
                        continue;
                    let e = [];
                    if (a.getFlag("mess", "isBonusDamage") && a.hasDamage) {
                        const t = a.data.data;
                        e.push(t.damage.parts[0][0]);
                        var i = a.name;
                        t.damage.parts[0][1].length > 0 && (i += " - " + game.i18n.localize("DND5E.Damage" + CONFIG.DND5E.damageTypes[t.damage.parts[0][1]])),
                        e.push(i)
                    }
                    e.length > 0 && r.parts.push(e)
                }
            if ("spell" === t.data.type)
                if ("cantrip" === n.scaling.mode) {
                    let a = [r.parts[0][0]];
                    const i = "character" === e.data.type ? s.details.level : s.details.spellLevel;
                    t._scaleCantripDamage(a, n.scaling.formula, i),
                    r.parts[0][0] = a[0]
                } else if (a && "level" === n.scaling.mode && n.scaling.formula) {
                    let e = [];
                    t._scaleSpellDamage(e, n.level, a, n.scaling.formula),
                    e.length > 0 && (e.push("upcast dice"), r.parts.push(e))
                }
			
      // Ammunition Damage Bonus          
			const consume = n.consume;
			if (consume?.type === "ammo") {
				let e = [];
				const ammo = z.get(consume.target);
				if (ammo?.data) {
					const ammoDamage = ammo.data.data.damage.parts[0][0];
					e.push(ammoDamage)
					var i = ammo.name;
                    ammo.data.data.damage.parts[0][1].length > 0 && (i += " - " + game.i18n.localize("DND5E.Damage" + CONFIG.DND5E.damageTypes[ammo.data.data.damage.parts[0][1]])),
                    e.push(i);
					r.parts.push(e)
				}
			} 
				
            const o = s.bonuses[n.actionType] || {};
            o.damage && 0 !== parseInt(o.damage) && (r.parts[0][0] += "+@dmg", r.dmg = o.damage);
            for (let e of r.parts) {
                let t = new Roll(e[0], r);
                CONFIG.DND5E.damageTypes[e[1]] ? e[1] = game.i18n.localize("DND5E.Damage" + CONFIG.DND5E.damageTypes[e[1]]) : "versatile" === e[1] && (e[1] = game.i18n.localize("DND5E.Versatile"));
                let a = t.terms.map((e, a, s) => {
                    if (e instanceof Roll) {
                        hasInner = !0,
                        e.evaluate(),
                        t._dice = t._dice.concat(e.dice);
                        return a > 0 && s[a - 1].split(" ").pop()in Math ? `(${e.total})` : String(e.total)
                    }
                    return e
                });
                e.push(Roll.cleanFormula(a))
            }
            return r
        }
        async function c(e) {
            const t = e.currentTarget.parentNode.querySelector("#context-menu");
            t && t.remove();
            const a = e.currentTarget;
            a.disabled = !0;
            const s = a.closest(".chat-card"),
            n = s.closest(".message").dataset.messageId;
            if (n) {
                e.stopPropagation(),
                e.preventDefault();
                const t = game.messages.get(n);
                if (!t.owner && !t.isAuthor)
                    return ui.notifications.error("You do not own the permissions to make that roll!"), !1
            }
            const r = a.dataset.formula;
            let i = new Roll(r);
            i.roll();
            let o = document.createElement("div");
            o.classList.add("dice-roll"),
            o.classList.add("mess-dice-result"),
            game.user.isGM && o.classList.add("mess-gm-dice");
            a.nextElementSibling.innerText === game.i18n.localize("DND5E.Versatile") && o.classList.add("mess-versatile");
            const l = o.appendChild(document.createElement("span"));
            l.classList.add("mess-roll-container"),
            l.innerHTML = `<span class='mess-roll-total'>${i.total}</span>`,
            o.insertAdjacentHTML("beforeend", await i.getTooltip());
            let c = "";
            const m = a.dataset.terms.split(/(?=[+-])/),
            u = r.replace(/\s/g, "").split(/(?=[+-])/);
            console.log(a.dataset.terms, r),
            console.log(m, u);
            for (let e = 0; e < m.length; e++) {
                const t = m[e],
                a = Number(u[e]);
                t.includes("@") && !isNaN(a) && (c += `\n\t\t\t<div class="dice">\n\t\t\t\t<header class="part-header flexrow">\n          <span class='part-formula'>${t}</span>\n\t\t\t\t\t<span class="part-total">${a}</span>\n\t\t\t\t</header>\n\t\t\t</div>\n\t\t`)
            }
            o.querySelector(".dice-tooltip").insertAdjacentHTML("beforeend", c);
            return o.childNodes[1].classList.add("hidden"),
            n ? d(n, i, s, e.currentTarget, o) : e.currentTarget.parentNode.replaceChild(o, e.currentTarget),
            i
        }
        async function d(e, t, a, s, n) {
            const r = game.messages.get(e);
            if (game.mess.diceSoNice) {
                let e = game.settings.get("core", "rollMode"),
                s = null,
                n = !1;
                ["gmroll", "blindroll"].includes(e) && (s = ChatMessage.getWhisperIDs("GM")),
                "blindroll" === e && (n = !0),
                a.querySelectorAll("button").forEach(e => e.disabled = !0),
                await game.dice3d.showForRoll(t, game.user, !0, s, n)
            } else
                AudioHelper.play({
                    src: CONFIG.sounds.dice
                }, !0);
            s.parentNode.replaceChild(n, s),
            r.update({
                content: a.parentNode.innerHTML
            })
        }
    },
    "./src/scripts/rolls/index.js":
    /*!************************************!*\
    !*** ./src/scripts/rolls/index.js ***!
    \************************************/
    /*! exports provided: rolling */
    function (e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "rolling", (function () {
                return i
            }));
        var s = a(/*! ./controls.js */ "./src/scripts/rolls/controls.js"),
        n = a(/*! ./apply-dmg.js */ "./src/scripts/rolls/apply-dmg.js"),
        r = a(/*! ./modify-rolling.js */ "./src/scripts/rolls/modify-rolling.js");
        function i() {
            game.settings.get("mess", "modify-rolling") && (Object(s.default)(), Object(n.default)(), Object(r.default)())
        }
    },
    "./src/scripts/rolls/modify-rolling.js":
    /*!*********************************************!*\
    !*** ./src/scripts/rolls/modify-rolling.js ***!
    \*********************************************/
    /*! exports provided: default */
    function (e, t, a) {
        "use strict";
        a.r(t);
        var s = a(/*! ./dice.js */ "./src/scripts/rolls/dice.js");
        function n(e) {
            const t = ChatMessage.getSpeaker();
            let a;
            t.token && (a = game.actors.tokens[t.token]),
            a || (a = game.actors.get(t.actor));
            const s = a ? a.items.filter(t => t.name === e) : [];
            if (s.length > 1)
                ui.notifications.warn(`Your controlled Actor ${a.name} has more than one Item with name ${e}. The first matched item will be chosen.`);
            else if (0 === s.length)
                return ui.notifications.warn("Your controlled Actor does not have an item named " + e);
            const n = s[0],
            r = !n.getFlag("mess", "isBonusDamage");
            return n.setFlag("mess", "isBonusDamage", r),
            r
        }
        async function r(e) {
            const t = document.createElement("div");
            t.insertAdjacentHTML("afterbegin", e.content);
            let a = t.querySelector('button[data-action="attack"]');
            a || (a = t.querySelector('button[data-action="damage"]')),
            a && o({
                currentTarget: a
            })
        }
        function i(e, t) {
            let a = Array.from(e.matchAll(/@RollTable\[([^\]])+\](?:\{([^\}]+)\})?/g));
            if (a) {
                const t = game.tables;
                for (let s of a) {
                    let a;
                    const n = s[0].match(/\[[a-zA-Z0-9]{16}\]/);
                    if (n)
                        a = t.get(n[0].slice(1, -1));
                    else {
                        const e = s[0].match(/\[([^\]])+\]/)[0].slice(1, -1);
                        a = t.entities.find(t => t.data.name === e)
                    }
                    let r = a.roll();
                    e = e.replace(s[0], r.results.map(e => e.text).join(","))
                }
            }
            return e.replace(/\[target\.name\]/g, t.data.name)
        }
        async function o(e) {
            "click" === e.type && (e.preventDefault(), e.stopPropagation());
            const t = e.currentTarget;
            t.disabled = !0;
            const a = t.closest(".chat-card"),
            n = CONFIG.Item.entityClass._getChatCardActor(a);
            if (!n || !n.owner)
                return;
            const r = n.getOwnedItem(a.dataset.itemId);
            if (!r)
                return ui.notifications.error(`The requested item ${a.dataset.itemId} no longer exists on Actor ${n.name}`);
            let o = game.user.targets;
            const c = Object.keys(CONFIG.DND5E.areaTargetTypes).includes(getProperty(r, "data.data.target.type"));
            o.size && !c || (o = [{
                        data: {
                            name: "someone",
                            img: ""
                        }
                    }
                ]);
            const d = parseInt(a.dataset.spellLevel) || null,
            m = {
                actor: n,
                item: r,
                toHit: await Object(s.getToHitData)({
                    actor: n,
                    item: r
                }),
                dmgs: await Object(s.getDmgData)({
                    actor: n,
                    item: r,
                    spellLevel: d
                }),
                sceneId: canvas.scene.id,
                user: game.user.id,
                isGM: game.user.isGM,
                showRolls: game.settings.get("mess", game.userId + ".autoshow-selector")
            },
            u = game.settings.get("mess", game.userId + ".autoroll-selector"),
            g = game.settings.get("core", "rollMode");
            for (const e of o) {
                const t = await r._handleResourceConsumption({
                    isCard: !1,
                    isAttack: !0
                }),
                a = e.actor ? e.actor.data : null;
                let s = {};
                if (a) {
                    s.ac = {
                        label: '<i class="mess-icon ac"></i>',
                        title: game.i18n.localize("DND5E.ArmorClass"),
                        value: a.data.attributes.ac.value
                    };
                    let e = a.data.traits.di.value.filter(e => "custom" !== e).map(e => game.i18n.localize("DND5E.Damage" + e[0].toUpperCase() + e.substring(1)));
                    a.data.traits.di.custom && e.push(a.data.traits.di.custom),
                    s.di = {
                        label: '<i class="mess-icon dam-inv"></i>',
                        title: game.i18n.localize("DND5E.DamImm"),
                        value: e.join(", ")
                    };
                    let t = a.data.traits.dr.value.filter(e => "custom" !== e).map(e => game.i18n.localize("DND5E.Damage" + e[0].toUpperCase() + e.substring(1)));
                    a.data.traits.dr.custom && t.push(a.data.traits.dr.custom),
                    s.dr = {
                        label: '<i class="mess-icon dam-res"></i>',
                        title: game.i18n.localize("DND5E.DamRes"),
                        value: t.join(", ")
                    };
                    let n = a.data.traits.dv.value.filter(e => "custom" !== e).map(e => game.i18n.localize("DND5E.Damage" + e[0].toUpperCase() + e.substring(1)));
                    a.data.traits.dv.custom && n.push(a.data.traits.dv.custom),
                    s.dv = {
                        label: '<i class="mess-icon dam-vuln"></i>',
                        title: game.i18n.localize("DND5E.DamVuln"),
                        value: n.join(", ")
                    }
                }
                const n = e.data.displayName === CONST.TOKEN_DISPLAY_MODES.ALWAYS || e.data.displayName === CONST.TOKEN_DISPLAY_MODES.HOVER,
                o = {
                    ...m,
                    target: e.data,
                    targetData: s,
                    flavor: i(r.data.data.chatFlavor, e),
                    allowed: t,
                    displayName: n
                };
                let c = await renderTemplate("modules/mess/templates/attack-card.html", o);
                (u.hit || u.dmg) && (c = await l(u, c, g));
                let d = {
                    user: game.user._id,
                    type: CONST.CHAT_MESSAGE_TYPES.OTHER,
                    content: c,
                    speaker: {
                        actor: r.actor._id,
                        token: r.actor.token,
                        alias: r.actor.name
                    }
                };
                game.user.isGM && game.settings.get("mess", "attack-card-always-public") || (["gmroll", "blindroll"].includes(g) && (d.whisper = ChatMessage.getWhisperRecipients("GM")), "selfroll" === g && (d.whisper = [game.user.id])),
                ChatMessage.create(d)
            }
            t.disabled = !1
        }
        async function l(e, t, a) {
            let n = document.createElement("div");
            const r = game.mess.diceSoNice;
            let i = null,
            o = !1;
            ["gmroll", "blindroll"].includes(a) && (i = ChatMessage.getWhisperIDs("GM")),
            "blindroll" === a && (o = !0),
            n.classList.add("message"),
            n.insertAdjacentHTML("afterbegin", t);
            let l = [];
            if (e.hit) {
                let e = n.querySelector(".mess-button-to-hit");
                if (e) {
                    let t = await Object(s.rollToHit)({
                        currentTarget: e
                    });
                    r && await game.dice3d.showForRoll(t, game.user, !0, i, o)
                }
            }
            if (e.dmg) {
                const e = Array.from(n.querySelectorAll(".mess-button-dmg"));
                for (const t of e)
                    l.push(await Object(s.rollDmg)({
                            currentTarget: t
                        }))
            }
            return r ? await game.dice3d.showForRoll(l, game.user, !0, i, o) : AudioHelper.play({
                src: CONFIG.sounds.dice
            }, !0),
            n.innerHTML
        }
        async function c(e, t, a) {
            const n = t[0].querySelectorAll(".ability-mod, .ability-name");
            $(n).off(),
            n.forEach(t => t.addEventListener("click", (function (t) {
                        t.stopPropagation(),
                        t.preventDefault();
                        const a = t.currentTarget.closest(".ability").dataset.ability,
                        n = CONFIG.DND5E.abilities[a],
                        r = ["@mod"],
                        i = {
                            mod: e.object.data.data.abilities[a].mod
                        },
                        o = e.object.data.flags.dnd5e || {},
                        l = getProperty(e.object, "data.data");
                        o.remarkableAthlete && DND5E.characterFlags.remarkableAthlete.abilities.includes(a) ? (r.push("@remarkable-athlete"), i["remarkable-athlete"] = Math.ceil(.5 * l.attributes.prof)) : o.jackOfAllTrades && (r.push("@jack-of-all-trades"), i["jack-of-all-trades"] = Math.floor(.5 * l.attributes.prof));
                        let c = getProperty(e.object.data.data.bonuses, "abilities.check");
                        return c && (r.push("@checkBonus"), i.checkBonus = c),
                        i.parts = r,
                        i.title = game.i18n.format("DND5E.AbilityPromptTitle", {
                            ability: n
                        }),
                        s.rollD20.bind(e.object)(i),
                        !1
                    })));
            const r = t[0].querySelectorAll(".ability-save");
            $(r).off(),
            r.forEach(t => t.addEventListener("click", (function (t) {
                        t.stopPropagation(),
                        t.preventDefault();
                        const a = t.currentTarget.closest(".ability").dataset.ability;
                        return e.object.rollAbilitySave(a),
                        !1
                    })));
            const i = t[0].querySelectorAll(".skill-name");
            $(i).off(),
            i.forEach(t => t.addEventListener("click", (function (t) {
                        t.stopPropagation(),
                        t.preventDefault();
                        const a = t.currentTarget.closest(".skill").dataset.skill,
                        n = e.object.data.data.skills[a],
                        r = ["@mod"],
                        i = {
                            mod: n.mod + n.prof
                        };
                        return n.bonus && (i.skillBonus = n.bonus, r.push("@skillBonus")),
                        i.reliableTalent = n.value >= 1 && e.object.getFlag("dnd5e", "reliableTalent"),
                        i.parts = r,
                        i.title = game.i18n.format("DND5E.SkillPromptTitle", {
                            skill: CONFIG.DND5E.skills[a]
                        }),
                        s.rollD20.bind(e.object)(i),
                        !1
                    })))
        }
        function d(e) {
            e || (e = $(document.getElementById("chat-log"))),
            e.on("click", ".card-buttons button", m.bind(this)),
            e.on("click", ".item-name", this._onChatCardToggleContent.bind(this)),
            e.on("mouseenter", ".mess-chat-target", u),
            e.on("mouseleave", ".mess-chat-target", g),
            e.on("dblclick", ".mess-chat-target", p),
            e.on("click", ".mess-button-to-hit", s.rollToHit),
            e.on("click", ".mess-button-dmg", s.rollDmg),
            e.on("click", ".mess-show-btn", h)
        }
        async function m(e) {
            return e.preventDefault(),
            e.stopPropagation(),
            "attack" === e.currentTarget.dataset.action || "damage" === e.currentTarget.dataset.action ? o(e) : e.currentTarget.dataset.placeTemplate ? renderTemplate(e) : this._onChatCardAction(e)
        }
        async function u(e) {
            e.preventDefault(),
            e.stopPropagation();
            const t = await f(e);
            if (!t)
                return !1;
            t._onHoverIn()
        }
        async function g(e) {
            e.preventDefault(),
            e.stopPropagation();
            const t = await f(e);
            if (!t || !t.visible)
                return !1;
            t._onHoverOut()
        }
        async function p(e) {
            e.preventDefault(),
            e.stopPropagation();
            const t = await f(e);
            if (!t || !t.visible)
                return !1;
            const a = t.center;
            canvas.animatePan({
                x: a.x,
                y: a.y
            })
        }
        async function f(e) {
            const t = e.currentTarget.closest(".mess-attack-card");
            if (t.dataset.sceneId !== canvas.scene.id)
                return !1;
            const a = t.dataset.targetId;
            if (!a)
                return !1;
            const s = canvas.tokens.placeables.find(e => e.id === a);
            return s || !1
        }
        async function h(e) {
            e.currentTarget.closest(".mess-chat-to-hit, .mess-chat-dmg").classList.toggle("mess-show-players");
            const t = e.currentTarget.closest(".mess-attack-card"),
            a = t.closest(".message").dataset.messageId;
            game.messages.get(a).update({
                content: t.parentNode.innerHTML
            })
        }
        t.default = function () {
            CONFIG.Item.entityClass.chatListeners = d.bind(CONFIG.Item.entityClass),
            Hooks.on("preCreateChatMessage", r),
            Hooks.on("renderActorSheet", c),
            Hooks.on("renderItemSheet", (e, t, a) => {
                let s = document.createElement("div");
                s.classList.add("form-group"),
                s.appendChild(document.createElement("label")).innerText = game.i18n.localize("MESS.itemSheet.bonusDmg");
                let n = s.appendChild(document.createElement("div"));
                n.classList.add("form-fields");
                let r = n.appendChild(document.createElement("input"));
                r.type = "checkbox",
                r.name = "flags.mess.isBonusDamage",
                r.checked = e.object.getFlag("mess", "isBonusDamage");
                const i = t[0].querySelector('[name="data.formula"]');
                i && i.closest(".form-group").after(s)
            }),
            game.mess.toggleItemBonusDamage = n,
            Hooks.once("diceSoNiceReady", e => {
                game.mess.diceSoNice = !0
            }),
            CONFIG.Actor.entityClass.prototype.rollAbilitySave = function (e) {
                const t = CONFIG.DND5E.abilities[e],
                a = this.data.data.abilities[e],
                n = ["@mod"],
                r = {
                    mod: a.mod
                };
                a.prof > 0 && (n.push("@prof"), r.prof = a.prof);
                const i = getProperty(this.data.data.bonuses, "abilities.save");
                i && (n.push("@saveBonus"), r.saveBonus = i),
                r.title = game.i18n.format("DND5E.SavePromptTitle", {
                    ability: t
                }),
                r.parts = n,
                s.rollD20.bind(this)(r)
            }
        }
    },
    "./src/scripts/rolls/util.js":
    /*!***********************************!*\
    !*** ./src/scripts/rolls/util.js ***!
    \***********************************/
    /*! exports provided: getTargetToken, hasTarget */
    function (e, t, a) {
        "use strict";
        function s(e) {
            const t = e.closest(".mess-attack-card"),
            a = t.dataset.targetId,
            s = t.dataset.sceneId,
            n = game.scenes.get(s);
            return new Token(n.getEmbeddedEntity("Token", a))
        }
        function n(e) {
            const t = e.closest(".mess-attack-card");
            return !!t && !!t.dataset.targetId
        }
        a.r(t),
        a.d(t, "getTargetToken", (function () {
                return s
            })),
        a.d(t, "hasTarget", (function () {
                return n
            }))
    },
    "./src/scripts/settings.js":
    /*!*********************************!*\
    !*** ./src/scripts/settings.js ***!
    \*********************************/
    /*! exports provided: MessSettings */
    function (e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "MessSettings", (function () {
                return s
            }));
        class s extends FormApplication {
            static init() {
                const e = "dnd5e" === game.system.id;
                game.settings.register("mess", "actor-item-sort", {
                    name: "Activate item sort button.",
                    hint: "Adds a button to actor sheets for sorting all items of that category alphabetically.",
                    scope: "world",
                    config: !1,
                default:
                    e,
                    type: Boolean
                }),
                game.settings.register("mess", "better-draggable", {
                    name: "Activate better drag'n'drop workflow.",
                    scope: "world",
                    config: !1,
                default:
                    e,
                    type: Boolean
                }),
                game.settings.register("mess", "better-draggable-lists", {
                    name: "Activate better drag'n'drop workflow for lists.",
                    scope: "world",
                    config: !1,
                default:
                    !0,
                    type: Boolean
                }),
                game.settings.set("mess", "better-draggable-lists", !1),
                game.settings.register("mess", "prepared-spell-tracker", {
                    name: "Activate prepared spell tracker",
                    hint: "Adds a tracker to the spellbook tab, providing a way to track the allowed maximum of prepared spells.",
                    scope: "world",
                    config: !1,
                default:
                    e,
                    type: Boolean
                }),
                game.settings.register("mess", "add-scrolling", {
                    name: "Activating numerical field scrolling.",
                    hint: "Lets you in-/decrease numerical fields in the Actor sheet using the mouse wheel when focused.",
                    scope: "world",
                    config: !1,
                default:
                    e,
                    type: Boolean
                }),
                game.settings.register("mess", "modify-rolling", {
                    name: "Alternative Rolling.",
                    hint: "Changes the way rolling is displayed and executed for DnD5e. Reload for all connected clients is required for this to take effect if changed!",
                    scope: "world",
                    config: !1,
                default:
                    e,
                    type: Boolean
                }),
                game.settings.register("mess", "attack-card-always-public", {
                    name: "Roll mode for alternative rolling.",
                    hint: "Always roll attack rolls public, with hidden rolls, but visible target.",
                    scope: "world",
                    config: !1,
                default:
                    e,
                    type: Boolean
                }),
                game.settings.register("mess", "modify-templates", {
                    name: "Activate modified templates.",
                    hint: "Makes templates texture fill scaling instead of tiling and does allow the usage of videos as texture. Reload for all connected clients is required for this to take effect if changed!",
                    scope: "world",
                    config: !1,
                default:
                    !0,
                    type: Boolean
                }),
                game.settings.register("mess", "change-placeables", {
                    name: "Activate placeables changes.",
                    hint: "Changes some behaviours of placeables, like preview snapping to grid. Reload for all connected clients is required for this to take effect if changed!",
                    scope: "world",
                    config: !1,
                default:
                    !0,
                    type: Boolean
                }),
                game.settings.registerMenu("mess", "templateTexture", {
                    name: game.i18n.localize("MESS.FVTTSettings.description"),
                    label: game.i18n.localize("MESS.FVTTSettings.button"),
                    icon: "fas fa-mug-hot",
                    type: s,
                    restricted: !0
                }),
                game.settings.register("mess", "templateTexture", {
                    name: "Activate placeables changes.",
                    hint: "Changes some behaviours of placeables, like preview snapping to grid. Reload for all connected clients is required for this to take effect if changed!",
                    scope: "world",
                default:
                    !0,
                    type: Object
                }),
                game.settings.register("mess", "max-critical", {
                    name: "Activate maximum critical rolls.",
                    hint: "Changes behaviour of critical damage rolls to maximize the damage of the extra dice for criticals!",
                    scope: "world",
                    config: !1,
                default:
                    !1,
                    type: Boolean
                }),
                game.settings.register("mess", "templateTexture", {
                    name: "Activate placeables changes.",
                    hint: "Changes some behaviours of placeables, like preview snapping to grid. Reload for all connected clients is required for this to take effect if changed!",
                    scope: "world",
                    config: !1,
                default:
                    !0,
                    type: Object
                }),
                game.settings.register("mess", "templateAutoTargeting", {
                    scope: "world",
                default:
                    !0,
                    type: Boolean
                }),
                game.settings.register("mess", "templateDrawBordersOnlyOnHighlight", {
                    scope: "world",
                default:
                    !0,
                    type: Boolean
                }),
                this.loadTemplates()
            }
            static loadTemplates() {
                loadTemplates(["modules/mess/templates/settings/templates.html", "modules/mess/templates/settings/dnd5e.html", "modules/mess/templates/settings/misc.html"])
            }
            static get defaultOptions() {
                return {
                    ...super.defaultOptions,
                    template: "modules/mess/templates/settings/settings.html",
                    height: "auto",
                    title: "Mess - Moerills enhancing super-suit(e) - Settings Menu",
                    width: 600,
                    classes: ["mess", "settings"],
                    tabs: [{
                            navSelector: ".tabs",
                            contentSelector: "form",
                            initial: "name"
                        }
                    ],
                    submitOnClose: !0
                }
            }
            constructor(e = {}, t) {
                super(e, t),
                this.object = game.settings.get("mess", "templateTexture")
            }
            _getHeaderButtons() {
                let e = super._getHeaderButtons();
                return e[0].label = "Save & Close",
                e
            }
            getSettingsData() {
                const e = "dnd5e" === game.system.id;
                let t = {
                    "modify-templates": game.settings.get("mess", "modify-templates"),
                    "change-placeables": game.settings.get("mess", "change-placeables"),
                    templateTexture: game.settings.get("mess", "templateTexture"),
                    templateAutoTargeting: game.settings.get("mess", "templateAutoTargeting"),
                    templateDrawBordersOnlyOnHighlight: game.settings.get("mess", "templateDrawBordersOnlyOnHighlight"),
                    "better-draggable-lists": game.settings.get("mess", "better-draggable-lists")
                };
                return e && (t.templateTexture = game.settings.get("mess", "templateTexture"), t["modify-rolling"] = game.settings.get("mess", "modify-rolling"), t["max-critical"] = game.settings.get("mess", "max-critical"), t["actor-item-sort"] = game.settings.get("mess", "actor-item-sort"), t["prepared-spell-tracker"] = game.settings.get("mess", "prepared-spell-tracker"), t["add-scrolling"] = game.settings.get("mess", "add-scrolling"), t["attack-card-always-public"] = game.settings.get("mess", "attack-card-always-public")),
                t
            }
            getData() {
                const e = "dnd5e" === game.system.id;
                let t = super.getData();
                return e && (t.dmgTypes = CONFIG.DND5E.damageTypes, t.templateTypes = CONFIG.MeasuredTemplate.types),
                t.isDnD = e,
                t.settings = this.getSettingsData(),
                t
            }
            activateListeners(e) {
                super.activateListeners(e)
            }
            _updateObject(e, t) {
                const a = expandObject(t);
                for (let[e, t]of Object.entries(a))
                    game.settings.set("mess", e, t);
                new Dialog({
                    content: `<p>${game.i18n.localize("MESS.reloadReminder.text")}</p>`,
                    buttons: {
                        yes: {
                            icon: '<i class="fas fa-check"></i>',
                            label: game.i18n.localize("MESS.reloadReminder.yes"),
                            callback: () => location.reload()
                        },
                        no: {
                            icon: '<i class="fas fa-times"></i>',
                            label: game.i18n.localize("MESS.reloadReminder.no")
                        }
                    }
                }).render(!0)
            }
        }
    }
});
//# sourceMappingURL=index.js.map
