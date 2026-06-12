/**
 * Spiral Dynamics Journey – App-Logik
 * Vanilla JS, keine Abhängigkeiten. Rendert die Reise in jedes Element
 * mit der Klasse .sdj-app (siehe Shortcode bzw. demo/index.html).
 */
(function () {
	'use strict';

	var STORAGE_KEY = 'sdj-progress-v1';

	function el(tag, className, html) {
		var node = document.createElement(tag);
		if (className) node.className = className;
		if (html !== undefined) node.innerHTML = html;
		return node;
	}

	function textTone(level) {
		return level.textTone === 'dark' ? 'sdj-tone-dark' : 'sdj-tone-light';
	}

	function App(root, data) {
		this.root = root;
		this.data = data;
		this.locked = root.getAttribute('data-locked') !== 'no';
		this.useStorage = root.getAttribute('data-progress') !== 'no';
		this.unlocked = this.loadProgress();
		this.sections = [];
		this.dots = [];
		this.render();
		this.observe();
	}

	App.prototype.loadProgress = function () {
		if (!this.useStorage) return 0;
		try {
			var raw = window.localStorage.getItem(STORAGE_KEY);
			var n = parseInt(raw, 10);
			return isNaN(n) ? 0 : Math.min(n, this.data.levels.length - 1);
		} catch (e) {
			return 0;
		}
	};

	App.prototype.saveProgress = function () {
		if (!this.useStorage) return;
		try {
			window.localStorage.setItem(STORAGE_KEY, String(this.unlocked));
		} catch (e) { /* privater Modus o. ä. – Fortschritt gilt nur für die Sitzung */ }
	};

	App.prototype.resetProgress = function () {
		this.unlocked = 0;
		try {
			window.localStorage.removeItem(STORAGE_KEY);
		} catch (e) { /* ignorieren */ }
	};

	App.prototype.render = function () {
		var self = this;
		this.root.classList.add('sdj-ready');
		this.root.appendChild(this.renderIntro());

		var nav = el('nav', 'sdj-nav');
		nav.setAttribute('aria-label', 'Ebenen der Spirale');
		this.data.levels.forEach(function (level, i) {
			var dot = el('button', 'sdj-dot');
			dot.type = 'button';
			dot.style.setProperty('--sdj-color', level.color);
			dot.title = level.order + ' · ' + level.name;
			dot.setAttribute('aria-label', 'Zu Ebene ' + level.name + ' springen');
			dot.addEventListener('click', function () {
				self.scrollToLevel(i);
			});
			nav.appendChild(dot);
			self.dots.push(dot);
		});
		this.root.appendChild(nav);

		this.data.levels.forEach(function (level, i) {
			var section = self.renderLevel(level, i);
			self.sections.push(section);
			self.root.appendChild(section);
		});

		this.root.appendChild(this.renderSources());
		this.applyLocks();
	};

	App.prototype.renderIntro = function () {
		var self = this;
		var meta = this.data.meta;
		var intro = el('section', 'sdj-section sdj-intro sdj-visible');
		intro.appendChild(el('p', 'sdj-kicker', 'Spiral Dynamics'));
		intro.appendChild(el('h2', 'sdj-title', meta.title));
		intro.appendChild(el('p', 'sdj-subtitle', meta.subtitle));
		meta.intro.forEach(function (p) {
			intro.appendChild(el('p', 'sdj-text', p));
		});
		intro.appendChild(el('p', 'sdj-disclaimer', meta.disclaimer));
		var start = el('button', 'sdj-btn sdj-btn-start', meta.startLabel + ' ↓');
		start.type = 'button';
		start.addEventListener('click', function () {
			self.scrollToLevel(0);
		});
		intro.appendChild(start);
		return intro;
	};

	App.prototype.renderLevel = function (level, index) {
		var self = this;
		var meta = this.data.meta;
		var section = el('section', 'sdj-section sdj-level ' + textTone(level));
		section.id = 'sdj-level-' + level.id;
		section.style.setProperty('--sdj-color', level.color);

		var head = el('header', 'sdj-level-head');
		var badge = el('div', 'sdj-badge',
			'Ebene ' + level.order + ' · ' + level.code +
			(level.tier === 2 ? ' · 2. Rang' : ''));
		head.appendChild(badge);
		head.appendChild(el('h2', 'sdj-title', level.name +
			' <span class="sdj-level-sub">' + level.subtitle + '</span>'));
		head.appendChild(el('p', 'sdj-motto', level.motto));
		section.appendChild(head);

		section.appendChild(el('p', 'sdj-text sdj-world', level.world));

		var chips = el('div', 'sdj-chips');
		level.gains.forEach(function (g) {
			chips.appendChild(el('span', 'sdj-chip sdj-chip-gain', '+ ' + g));
		});
		level.shadow.forEach(function (s) {
			chips.appendChild(el('span', 'sdj-chip sdj-chip-shadow', '– ' + s));
		});
		section.appendChild(chips);

		if (level.conflict) {
			section.appendChild(this.renderConflict(level, index));
		} else if (level.reflection) {
			section.appendChild(this.renderReflection(level));
		}

		var oerBox = el('aside', 'sdj-oer');
		oerBox.appendChild(el('h3', 'sdj-oer-heading', meta.oerHeading));
		var list = el('ul', 'sdj-oer-list');
		level.oer.forEach(function (res) {
			var li = el('li');
			li.innerHTML = '<a href="' + res.url + '" target="_blank" rel="noopener">' +
				res.label + '</a> <span class="sdj-license">(' + res.license + ')</span>';
			list.appendChild(li);
		});
		oerBox.appendChild(list);
		section.appendChild(oerBox);

		if (level.kh) {
			section.appendChild(this.renderMethods(level.kh));
		}

		if (this.locked && index > 0) {
			var overlay = el('div', 'sdj-lock');
			var prev = this.data.levels[index - 1];
			overlay.appendChild(el('p', 'sdj-lock-text',
				'🔒 ' + meta.lockedHint.replace('vorherigen Ebene',
					'Ebene ' + prev.name)));
			section.appendChild(overlay);
		}
		return section;
	};

	App.prototype.renderMethods = function (kh) {
		var meta = this.data.meta;
		var box = el('aside', 'sdj-methods');
		box.appendChild(el('h3', 'sdj-oer-heading', meta.methodsHeading));
		box.appendChild(el('p', 'sdj-methods-intro', meta.methodsIntro));
		if (kh.article) {
			var article = el('p', 'sdj-methods-article');
			article.innerHTML = '→ <a href="' + kh.article.url +
				'" target="_blank" rel="noopener">' +
				meta.articleLabel + ': ' + kh.article.label + '</a>';
			box.appendChild(article);
		}
		if (kh.methods && kh.methods.length) {
			var tags = el('div', 'sdj-method-tags');
			kh.methods.forEach(function (m) {
				var a = el('a', 'sdj-method-tag', m.label);
				a.href = m.url;
				a.target = '_blank';
				a.rel = 'noopener';
				tags.appendChild(a);
			});
			box.appendChild(tags);
		}
		return box;
	};

	App.prototype.renderConflict = function (level, index) {
		var self = this;
		var meta = this.data.meta;
		var c = level.conflict;
		var box = el('div', 'sdj-conflict');
		box.appendChild(el('p', 'sdj-kicker', meta.conflictHeading));
		box.appendChild(el('h3', 'sdj-conflict-title', c.title));
		box.appendChild(el('p', 'sdj-text', c.intro));
		box.appendChild(el('p', 'sdj-question', meta.conflictQuestion));

		var tried = 0;
		var reveal = null;

		var optWrap = el('div', 'sdj-options');
		c.options.forEach(function (opt) {
			var btn = el('button', 'sdj-btn sdj-option', opt.label);
			btn.type = 'button';
			var outcome = el('div', 'sdj-outcome',
				'<strong>✗ ' + meta.deadEndLabel + ':</strong> ' + opt.outcome);
			outcome.hidden = true;
			btn.addEventListener('click', function () {
				if (btn.classList.contains('sdj-tried')) return;
				btn.classList.add('sdj-tried');
				outcome.hidden = false;
				tried += 1;
				if (reveal) reveal.hidden = false;
			});
			var holder = el('div', 'sdj-option-holder');
			holder.appendChild(btn);
			holder.appendChild(outcome);
			optWrap.appendChild(holder);
		});
		box.appendChild(optWrap);

		var transition = el('div', 'sdj-transition');
		transition.hidden = true;
		transition.appendChild(el('p', 'sdj-kicker', meta.transitionHeading));
		transition.appendChild(el('p', 'sdj-text sdj-crisis', c.crisis));
		transition.appendChild(el('h4', 'sdj-next-heading', meta.nextSolutionHeading));
		transition.appendChild(el('p', 'sdj-text', c.nextSolution));

		var next = this.data.levels[index + 1];
		if (next) {
			var go = el('button', 'sdj-btn sdj-btn-next',
				'Übergang erleben → ' + next.name);
			go.type = 'button';
			go.style.setProperty('--sdj-next-color', next.color);
			go.addEventListener('click', function () {
				self.unlock(index + 1);
				self.scrollToLevel(index + 1);
			});
			transition.appendChild(go);
		}

		reveal = el('button', 'sdj-btn sdj-btn-reveal', meta.revealLabel);
		reveal.type = 'button';
		reveal.hidden = true;
		reveal.addEventListener('click', function () {
			reveal.hidden = true;
			transition.hidden = false;
			transition.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
		});

		box.appendChild(reveal);
		box.appendChild(transition);
		return box;
	};

	App.prototype.renderReflection = function (level) {
		var self = this;
		var r = level.reflection;
		var box = el('div', 'sdj-conflict sdj-reflection');
		box.appendChild(el('p', 'sdj-kicker', r.title));
		box.appendChild(el('p', 'sdj-text', r.intro));
		var list = el('ul', 'sdj-questions');
		r.questions.forEach(function (q) {
			list.appendChild(el('li', null, q));
		});
		box.appendChild(list);

		var outro = el('div', 'sdj-transition');
		outro.hidden = true;
		outro.appendChild(el('p', 'sdj-text sdj-crisis', r.outro));
		var restart = el('button', 'sdj-btn', r.restartLabel);
		restart.type = 'button';
		restart.addEventListener('click', function () {
			self.resetProgress();
			window.location.reload();
		});
		outro.appendChild(restart);

		var finish = el('button', 'sdj-btn sdj-btn-reveal', r.finishLabel);
		finish.type = 'button';
		finish.addEventListener('click', function () {
			finish.hidden = true;
			outro.hidden = false;
		});
		box.appendChild(finish);
		box.appendChild(outro);
		return box;
	};

	App.prototype.renderSources = function () {
		var s = this.data.sources;
		var section = el('section', 'sdj-section sdj-sources sdj-visible');
		section.appendChild(el('h2', 'sdj-title', s.heading));
		section.appendChild(el('p', 'sdj-text sdj-disclaimer', s.note));
		var list = el('ul', 'sdj-oer-list');
		s.links.forEach(function (res) {
			var li = el('li');
			li.innerHTML = '<a href="' + res.url + '" target="_blank" rel="noopener">' +
				res.label + '</a> <span class="sdj-license">(' + res.license + ')</span>';
			list.appendChild(li);
		});
		section.appendChild(list);
		return section;
	};

	App.prototype.applyLocks = function () {
		var self = this;
		this.sections.forEach(function (section, i) {
			var isLocked = self.locked && i > self.unlocked;
			section.classList.toggle('sdj-is-locked', isLocked);
			section.setAttribute('aria-hidden', isLocked ? 'true' : 'false');
			if (self.dots[i]) {
				self.dots[i].classList.toggle('sdj-dot-open', !isLocked);
			}
		});
	};

	App.prototype.unlock = function (index) {
		if (index > this.unlocked) {
			this.unlocked = index;
			this.saveProgress();
		}
		this.applyLocks();
	};

	App.prototype.scrollToLevel = function (index) {
		if (this.locked && index > this.unlocked) {
			index = this.unlocked;
		}
		var target = this.sections[index];
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	App.prototype.observe = function () {
		var self = this;
		if (!('IntersectionObserver' in window)) {
			this.sections.forEach(function (s) { s.classList.add('sdj-visible'); });
			return;
		}
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('sdj-visible');
					var i = self.sections.indexOf(entry.target);
					if (i >= 0) {
						self.dots.forEach(function (d, j) {
							d.classList.toggle('sdj-dot-active', i === j);
						});
					}
				}
			});
		}, { threshold: 0.25 });
		this.sections.forEach(function (s) { io.observe(s); });
	};

	function init() {
		if (!window.SDJ_DATA) return;
		var roots = document.querySelectorAll('.sdj-app');
		Array.prototype.forEach.call(roots, function (root) {
			if (!root.classList.contains('sdj-ready')) {
				new App(root, window.SDJ_DATA);
			}
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
