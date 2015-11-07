/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _classesStatesBoot = __webpack_require__(1);

	var _classesStatesBoot2 = _interopRequireDefault(_classesStatesBoot);

	var _classesStatesPreload = __webpack_require__(2);

	var _classesStatesPreload2 = _interopRequireDefault(_classesStatesPreload);

	var _classesStatesMenu = __webpack_require__(3);

	var _classesStatesMenu2 = _interopRequireDefault(_classesStatesMenu);

	var _classesStatesPlay = __webpack_require__(4);

	var _classesStatesPlay2 = _interopRequireDefault(_classesStatesPlay);

	var game = new Phaser.Game(600, 600, Phaser.AUTO);

	game.state.add('Boot', _classesStatesBoot2['default'], false);
	game.state.add('Preload', _classesStatesPreload2['default'], false);
	game.state.add('Menu', _classesStatesMenu2['default'], false);
	game.state.add('Play', _classesStatesPlay2['default'], false);

	game.state.start('Boot');

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Boot = (function (_Phaser$State) {
		_inherits(Boot, _Phaser$State);

		function Boot() {
			_classCallCheck(this, Boot);

			_get(Object.getPrototypeOf(Boot.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Boot, [{
			key: 'preload',
			value: function preload() {
				this.load.image('preloader', 'assets/preloader.gif');
			}
		}, {
			key: 'create',
			value: function create() {
				this.game.state.start('Preload');
			}
		}]);

		return Boot;
	})(Phaser.State);

	exports['default'] = Boot;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Preload = (function (_Phaser$State) {
		_inherits(Preload, _Phaser$State);

		function Preload() {
			_classCallCheck(this, Preload);

			_get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Preload, [{
			key: 'preload',
			value: function preload() {
				this.preloader = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloader');
				this.preloader.anchor.setTo(0.5, 0.5);

				this.load.image('background', 'assets/background.jpg');
				this.load.image('car', 'assets/car.png');
				this.load.image('gameover', 'assets/gameover.png');
				this.load.image('get-ready', 'assets/get-ready.png');
				this.load.image('startButton', 'assets/start-button.png');
				this.load.image('tile', 'assets/tile.png');
				this.load.image('lamp', 'assets/lamp.png');

				this.load.bitmapFont('flappyfont', 'assets/font/flappyfont.png', 'assets/font/flappyfont.fnt');

				this.load.audio('hit', 'assets/hit.wav');
				this.load.audio('score', 'assets/score.wav');

				this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
			}
		}, {
			key: 'onLoadComplete',
			value: function onLoadComplete() {
				//this.game.state.start('Play');
				this.game.state.start('Menu');
			}
		}]);

		return Preload;
	})(Phaser.State);

	exports['default'] = Preload;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Menu = (function (_Phaser$State) {
		_inherits(Menu, _Phaser$State);

		function Menu() {
			_classCallCheck(this, Menu);

			_get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Menu, [{
			key: 'create',
			value: function create() {
				this.bgGroup = this.game.add.group();

				this.background = this.game.add.tileSprite(0, 0, 600, 600, 'background');
				this.background.autoScroll(-100, 0);
				this.bgGroup.add(this.background);

				this.ground = this.game.add.tileSprite(0, 495, 600, 110, 'tile');
				this.ground.autoScroll(-150, 0);
				this.bgGroup.add(this.ground);

				this.car = this.game.add.sprite(this.game.width / 2 - 100, 465, 'car');
				this.game.add.text(this.game.world.centerX - 160, 90, "Maroon", {
					font: '100px minecraft',
					fill: '#fffff0',
					align: 'center'
				});
				this.game.add.text(this.game.world.centerX - 100, 190, "Driver", {
					font: '100px minecraft',
					fill: '#fffff0',
					align: 'center'
				});

				this.startButton = this.game.add.button(this.game.width / 2, this.game.height / 2 + 80, 'startButton', this.startClick, this);
				this.startButton.anchor.setTo(0.5, 0.5);
			}
		}, {
			key: 'startClick',
			value: function startClick() {
				this.game.state.start('Play');
			}
		}]);

		return Menu;
	})(Phaser.State);

	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _objectsGround = __webpack_require__(5);

	var _objectsGround2 = _interopRequireDefault(_objectsGround);

	var _objectsCar = __webpack_require__(6);

	var _objectsCar2 = _interopRequireDefault(_objectsCar);

	var _objectsLampGroup = __webpack_require__(7);

	var _objectsLampGroup2 = _interopRequireDefault(_objectsLampGroup);

	var Play = (function (_Phaser$State) {
		_inherits(Play, _Phaser$State);

		function Play() {
			_classCallCheck(this, Play);

			_get(Object.getPrototypeOf(Play.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Play, [{
			key: 'create',
			value: function create() {
				this.game.physics.startSystem(Phaser.Physics.ARCADE);
				this.game.physics.arcade.gravity.y = 500;
				this.cursors = this.game.input.keyboard.createCursorKeys();

				this.background = this.game.add.sprite(0, 0, 'background');

				this.car = new _objectsCar2['default'](this.game, this.game.width / 2, 400, 85, 35);
				this.game.add.existing(this.car);

				this.ground = new _objectsGround2['default'](this.game, 0, 495, 600, 110);
				this.game.add.existing(this.ground);

				this.LampGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1.5, this.generateLamp, this);
				this.LampGenerator.timer.start();

				this.lamps = this.game.add.group();
				this.score = 0;

				this.scoreSound = this.game.add.audio('score');
				this.hitSound = this.game.add.audio('hit');
			}
		}, {
			key: 'update',
			value: function update() {
				var _this = this;

				this.game.physics.arcade.collide(this.car, this.ground);

				if (this.cursors.left.isDown) this.car.slow();
				if (this.cursors.right.isDown) this.car.fast();
				if (this.car.body.wasTouching.down && this.cursors.up.isDown) this.car.jump();
				this.car.body.velocity.x *= 0.9;

				this.lamps.forEach(function (lampGroup) {
					_this.game.physics.arcade.collide(_this.car, lampGroup, _this.deathHandler, _this.checkScore(lampGroup), _this);
				});
				this.scoreText = this.game.add.bitmapText(this.game.width / 2, 10, 'flappyfont', this.score.toString(), 50);
			}
		}, {
			key: 'generateLamp',
			value: function generateLamp() {
				var lampGroup = this.lamps.getFirstExists(false);
				if (!lampGroup) lampGroup = new _objectsLampGroup2['default'](this.game, this.lamps);
				lampGroup.reset(this.game.width + lampGroup.width / 2, 0);
			}
		}, {
			key: 'deathHandler',
			value: function deathHandler() {
				this.hitSound.play();
				this.lamps.callAll('stop');
				this.LampGenerator.timer.stop();
				this.ground.stopScroll();
				this.car.kill();
				this.game.state.start('Menu');
			}
		}, {
			key: 'checkScore',
			value: function checkScore(lampGroup) {
				if (lampGroup.exists && !lampGroup.hasScored && lampGroup.lamp.world.x <= this.car.world.x) {
					lampGroup.hasScored = true;
					this.score++;
					this.scoreSound.play();
				}
			}
		}]);

		return Play;
	})(Phaser.State);

	exports['default'] = Play;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Ground = (function (_Phaser$TileSprite) {
		_inherits(Ground, _Phaser$TileSprite);

		function Ground(game, x, y, width, height) {
			_classCallCheck(this, Ground);

			_get(Object.getPrototypeOf(Ground.prototype), 'constructor', this).call(this, game, x, y, width, height, 'tile');
			this.autoScroll(-200, 0);
			this.game.physics.arcade.enableBody(this);
			this.body.allowGravity = false;
			this.body.immovable = true;
		}

		return Ground;
	})(Phaser.TileSprite);

	exports['default'] = Ground;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Car = (function (_Phaser$TileSprite) {
		_inherits(Car, _Phaser$TileSprite);

		function Car(game, x, y, width, height) {
			_classCallCheck(this, Car);

			_get(Object.getPrototypeOf(Car.prototype), 'constructor', this).call(this, game, x, y, width, height, 'car');
			this.anchor.setTo(0.5, 0.5);
			this.game.physics.arcade.enableBody(this);
			this.body.collideWorldBounds = true;
			//this.body.bounce.y = 0.1;
		}

		_createClass(Car, [{
			key: 'jump',
			value: function jump() {
				this.body.velocity.y += -210;
			}
		}, {
			key: 'slow',
			value: function slow() {
				this.body.velocity.x += -50;
				if (!this.body.wasTouching.down) this.body.velocity.x *= 0.8;
			}
		}, {
			key: 'fast',
			value: function fast() {
				this.body.velocity.x += 50;
				if (!this.body.wasTouching.down) this.body.velocity.x *= 0.8;
			}
		}]);

		return Car;
	})(Phaser.TileSprite);

	exports['default'] = Car;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Lamp = __webpack_require__(8);

	var _Lamp2 = _interopRequireDefault(_Lamp);

	var LampGroup = (function (_Phaser$Group) {
		_inherits(LampGroup, _Phaser$Group);

		function LampGroup(game, parent) {
			_classCallCheck(this, LampGroup);

			_get(Object.getPrototypeOf(LampGroup.prototype), 'constructor', this).call(this, game, parent);
			this.lamp = new _Lamp2['default'](this.game, 0, 440);
			this.add(this.lamp);

			this.lamp.body.velocity.x = -200;
		}

		_createClass(LampGroup, [{
			key: 'reset',
			value: function reset(x, y) {
				this.lamp.reset(0, 440);
				this.x = x;
				this.y = y;
				this.setAll('body.velocity.x', -200);
				this.hasScored = false;
				this.exists = true;
			}
		}, {
			key: 'update',
			value: function update() {
				if (!this.lamp.inWorld) this.exists = false;
			}
		}]);

		return LampGroup;
	})(Phaser.Group);

	exports['default'] = LampGroup;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Lamp = (function (_Phaser$Sprite) {
		_inherits(Lamp, _Phaser$Sprite);

		function Lamp(game, x, y, frame) {
			_classCallCheck(this, Lamp);

			_get(Object.getPrototypeOf(Lamp.prototype), 'constructor', this).call(this, game, x, y, 'lamp', frame);
			this.anchor.setTo(0.5, 0.5);
			this.game.physics.arcade.enableBody(this);
			this.body.allowGravity = false;
			this.body.immovable = true;
		}

		return Lamp;
	})(Phaser.Sprite);

	exports['default'] = Lamp;
	module.exports = exports['default'];

/***/ }
/******/ ]);