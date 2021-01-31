/**
 * Notes:
 * - Coordinates are specified as (X, Y, Z) where X and Z are horizontal and Y
 *   is vertical
 */

var mapW = 32, mapH = 32
var map = [
  [4,4,4,4,8,8,8,8,8,4,4,4,4,4,4,4,6,6,6,6,6,4,4,4,1,1,1,1,1,4,4,4],
  [4,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,6,6,6,6,6,0,0,0,1,1,1,1,1,0,0,4],
  [4,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,6,6,6,6,6,0,0,0,1,1,1,1,1,0,0,4],
  [4,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,6,6,6,6,6,0,0,0,1,1,1,1,1,0,0,4],
  [4,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,6,6,6,6,6,0,0,0,1,1,1,1,1,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0,4],
  [4,0,3,3,3,3,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0,4],
  [4,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,3,3,3,3,0,0,0,0,0,2,2,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,4],
  [4,0,3,3,3,3,0,0,0,0,0,2,2,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,4],
  [4,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,3,3,3,3,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
  [4,0,0,0,9,9,9,9,9,0,0,0,0,0,0,0,7,7,7,7,7,0,0,0,5,5,5,5,5,0,0,4],
  [4,0,0,0,9,9,9,9,9,0,0,0,0,0,0,0,7,7,7,7,7,0,0,0,5,5,5,5,5,0,0,4],
  [4,0,0,0,9,9,9,9,9,0,0,0,0,0,0,0,7,7,7,7,7,0,0,0,5,5,5,5,5,0,0,4],
  [4,0,0,0,9,9,9,9,9,0,0,0,0,0,0,0,7,7,7,7,7,0,0,0,5,5,5,5,5,0,0,4],
  [4,4,4,4,9,9,9,9,9,4,4,4,4,4,4,4,7,7,7,7,7,4,4,4,5,5,5,5,5,4,4,4],
]
var mapClassroom = [ //0 = no seat, 1 = seat
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
]
// Semi-constants
var WIDTH = window.innerWidth,
	HEIGHT = window.innerHeight,
	ASPECT = WIDTH / HEIGHT,
	UNITSIZE = 250,
	WALLHEIGHT = UNITSIZE / 3,
	MOVESPEED = 1000,
	LOOKSPEED = 0.075,
	BULLETMOVESPEED = MOVESPEED * 5,
	NUMAI = 5,
	PROJECTILEDAMAGE = 20;
// Global vars
var t = THREE, scene, cam, renderer, controls, clock, projector, model, skin;
var runAnim = true, mouse = { x: 0, y: 0 };

// Read a page's GET URL variables and return them as an object.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

// Initialize and run on document ready
$(document).ready(function() {
	$('body').append('<div id="intro">Click to start</div>');
  $('#floating-message').css("display", "none")
	$('#intro').css({width: WIDTH, height: HEIGHT}).one('click', function(e) {
		e.preventDefault();
		$(this).fadeOut();
		init();
		setInterval(drawRadar, 16);
		animate();
	});
  $("#video-modal").on("show.bs.modal", function (event) {
    if (controls) controls.freeze = true;
    $('.overlay').show();
    $("#three-renderer").off();
    let button = $(event.relatedTarget); // Button that triggered the modal
    let url = button.data("video");      // Extract url from data-video attribute
    $(this).find("iframe").attr({
        src : url,
        allow : "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    });
  }).on("hide.bs.modal", function () {
    if (controls) controls.freeze = false;
    $('.overlay').hide();
    $("#three-renderer").on();
  }).on("hidden.bs.modal", function() {
    $("#video-modal iframe").removeAttr("src allow");
  });
});

// Setup
function init() {
	clock = new t.Clock(); // Used in render() for controls.update()
	projector = new t.Projector(); // Used in bullet projection
	scene = new t.Scene(); // Holds all objects in the canvas
	scene.fog = new t.FogExp2(0xD6F1FF, 0.0005); // color, density

	// Set up camera
	cam = new t.PerspectiveCamera(60, ASPECT, 1, 10000); // FOV, aspect, near, far
	cam.position.y = UNITSIZE * .2;
	scene.add(cam);

	// Camera moves with mouse, flies around with WASD/arrow keys
	controls = new t.FirstPersonControls(cam);
	controls.movementSpeed = MOVESPEED;
	controls.lookSpeed = LOOKSPEED;
	controls.lookVertical = false; // Temporary solution; play on flat surfaces only
	controls.noFly = true;

	// World objects
	setupScene();


	// Handle drawing as WebGL (faster than Canvas but less supported)
	renderer = new t.WebGLRenderer({
    alpha: true
  });
	renderer.setSize(WIDTH, HEIGHT);

	// Add the canvas to the document
  renderer.domElement.id = "three-renderer"
	renderer.domElement.style.backgroundColor = '#D6F1FF'; // easier to see
	document.body.appendChild(renderer.domElement);
  // <div class="overlay"></div>

  // Add an overlay to block canvas from receiving mouse events
  const blockerDiv = document.createElement("div");
  blockerDiv.classList.add("overlay");
  document.body.appendChild(blockerDiv)

  const throttledOnMouseMove = _.throttle(onDocumentMouseMove, 16);
	// Track mouse position so we know where to shoot
	document.addEventListener( 'mousemove', throttledOnMouseMove, false );
  document.addEventListener( 'mousedown', onDocumentMouseDown, false );


  const cityULogoLink = 'https://upload.wikimedia.org/wikipedia/en/4/4a/CityU_logo.svg';
	// Display HUD
	$('body').append('<canvas id="radar" width="225" height="225"></canvas>');
	$('body').append('<div id="credits" class="glass"><div><img src="' + cityULogoLink +  '" alt="CityU Logo" id="cityu-logo" /></div></div>');
  $('body').append('<div id="instructions" class="glass">WASD: Move Characters<br />Hover over a room to learn more.</div>');
  $('body').append('<div id="credits-text" class="glass">Created by team CityHack21(?)<br />Based on <a href="https://github.com/IceCreamYou/Nemesis">Nemesis</a> by <a href="http://www.isaacsukin.com/">Isaac Sukin</a><br />Powered by <a href="http://mrdoob.github.com/three.js/">Three.js</a></div>')

	// Set up "hurt" flash
	$('body').append('<div id="hurt"></div>');
	$('#hurt').css({width: WIDTH, height: HEIGHT,});
}

// Helper function for browser frames
function animate() {
	if (runAnim) {
		requestAnimationFrame(animate);
	}
	render();
}

// Update and display
function render() {
	var delta = clock.getDelta(), speed = delta * BULLETMOVESPEED;
	var aispeed = delta * MOVESPEED;
	controls.update(delta); // Move camera
	renderer.render(scene, cam); // Repaint
}

var hash = new Map()

// Constants for types of objects
// The index of materials follow the different types of objects below
const WALKABLE_PATH = 0;
const CHAIR_TO_SIT = 2;
const AC1_STAGE = 3;
const AC1_WALL = 4;
const LT_1 = 1;
const LT_2 = 5;
const LT_3 = 6;
const LT_4 = 7;
const LT_5 = 8;
const LT_6 = 9;

const messageByType = {
  [CHAIR_TO_SIT]: 'Chill with Friends',
  [AC1_STAGE]: 'Attend concert',
  [LT_1]: 'Attend class MA1200',
  [LT_2]: 'Attend class CS1200',
  [LT_3]: 'Attend class GE1501',
  [LT_4]: 'Attend class GE1401',
  [LT_5]: 'Attend class CS2402',
  [LT_6]: 'Attend class CS2204',
}

const contentByType = {
  [CHAIR_TO_SIT]: {
    contentType: 'chat'
  },
  [AC1_STAGE]: {
    contentType: 'youtube-live',
    url: 'https://www.youtube.com/embed/94geQ2tKyXA'
  },
  [LT_1]: {
    contentType: 'youtube',
    url: 'https://www.youtube.com/embed/oeYBdghaIjc'
  },
  [LT_2]: {
    contentType: 'zoom',
    url: 'https://zoom.us/j/98516955650?pwd=eUM1TmhSUU5uanhIZGhRV1ZRQlhzQT09'
  },
  [LT_3]: {
    contentType: 'zoom',
    url: 'https://zoom.us/j/98516955650?pwd=eUM1TmhSUU5uanhIZGhRV1ZRQlhzQT09'
  },
  [LT_4]: {
    contentType: 'zoom',
    url: 'https://zoom.us/j/98516955650?pwd=eUM1TmhSUU5uanhIZGhRV1ZRQlhzQT09'
  },
  [LT_5]: {
    contentType: 'zoom',
    url: 'https://zoom.us/j/98516955650?pwd=eUM1TmhSUU5uanhIZGhRV1ZRQlhzQT09'
  },
  [LT_6]: {
    contentType: 'zoom',
    url: 'https://zoom.us/j/98516955650?pwd=eUM1TmhSUU5uanhIZGhRV1ZRQlhzQT09'
  },
}

// Set up the objects in the world
function setupScene() {
	var UNITSIZE = 250, units = mapW;

  const floorTexture = new THREE.TextureLoader().load('images/tiled-floor.jpg');
  floorTexture.wrapS = THREE.RepeatWrapping;
  floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.set(40, 40);

	// Geometry: floor
	var floor = new t.Mesh(
			new t.BoxGeometry(units * UNITSIZE, 10, units * UNITSIZE),
			new t.MeshLambertMaterial({color: 0xEDCBA0, map: floorTexture })
	);
	scene.add(floor);

	// Geometry: walls
	var cube = new t.BoxGeometry(UNITSIZE, WALLHEIGHT, UNITSIZE);
	var materials = [
   new t.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/wall-1.jpg') }),
   new t.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/wall-2.jpg') }),
   new t.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/wall-3.jpg') }),
   new t.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/wall-4.jpg') }),
   new t.MeshLambertMaterial({ color: 0xFBEBCD }),
   new t.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/wall-2.jpg') }),
   new t.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/wall-2.jpg') }),
   new t.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/wall-2.jpg') }),
   new t.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/wall-2.jpg') }),
   new t.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/wall-2.jpg') }),
 ];
  for (var i = 0; i < mapW; i++) {
  	for (var j = 0, m = map[i].length; j < m; j++) {
  		if (map[i][j]) {
        const materialIndex = map[i][j] - 1;
  			var wall = new t.Mesh(cube, materials[materialIndex]);
        wall.userData.type = materialIndex + 1;
  			wall.position.x = (i - units/2) * UNITSIZE;
  			wall.position.y = WALLHEIGHT/2;
  			wall.position.z = (j - units/2) * UNITSIZE;
        wall.callback = function () {
          if (!$("#video-modal").is(':visible')) {
            $('#video-modal').modal('show');
            const videoData = contentByType[materialIndex + 1];
            const titleElement = $("#video-modal-title");
            const query = getUrlVars()
            const userEmail = query.email || 'michalim3-c@my.cityu.edu.hk'
            const userName = query.userName || 'Michael Lim';
            switch (videoData.contentType) {
              case 'zoom':
                // titleElement.html("Current Lecture")
                document.querySelector("#video-modal-title").innerHTML = "Current Lecture"
                const zoomLink = videoData.url;
                const zoomIframeLink = `https://zoom.2vanx.com/?link=${encodeURIComponent(zoomLink)}&locale=en&userEmail=${encodeURIComponent(userEmail)}&userName=${encodeURIComponent(userName)}`
                $("#video-modal-body").html(`<iframe width="560" height="315" src="${zoomIframeLink}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
                break;
              case 'youtube':
                document.querySelector("#video-modal-title").innerHTML = "Lecture Recording"
                $("#video-modal-body").html(`<iframe width="560" height="315" src="${videoData.url}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
                break;
              case 'youtube-live':
                document.querySelector("#video-modal-title").innerHTML = "Live Concert"
                $("#video-modal-body").html(`<iframe width="560" height="315" src="${videoData.url}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
                break;
              case 'chat':
                document.querySelector("#video-modal-title").innerHTML = "Chill with Friends";
                $("#video-modal-body").html(`<iframe src="https://minnit.chat/chillwithfriends?embed&&nickname=${encodeURIComponent(userName)}" style="border:none;width:90%;height:500px;" allowTransparency="true"></iframe><br><a href="https://minnit.chat/chillwithfriends" target="_blank">Add a chatroom to your website for free with Minnit Chat</a>`)
            }
          }
        }
        hash.set(`${i}::${j}`, wall)
  			scene.add(wall);
  		}
  	}
  }

	// Lighting
	var directionalLight1 = new t.DirectionalLight( 0xF7EFBE, 0.7 );
	directionalLight1.position.set( 0.5, 1, 0.5 );
	scene.add( directionalLight1 );
	var directionalLight2 = new t.DirectionalLight( 0xF7EFBE, 0.5 );
	directionalLight2.position.set( -0.5, -1, -0.5 );
	scene.add( directionalLight2 );
}

function getMapSector(v) {
  // TODO: Remove this shitty max
	var x = Math.floor((v.x + UNITSIZE / 2) / UNITSIZE + mapW/2);
	var z = Math.floor((v.z + UNITSIZE / 2) / UNITSIZE + mapH/2);
	return {x: x, z: z};
}

/**
 * Check whether a Vector3 overlaps with a wall.
 *
 * @param v
 *   A THREE.Vector3 object representing a point in space.
 *   Passing cam.position is especially useful.
 * @returns {Boolean}
 *   true if the vector is inside a wall; false otherwise.
 */
function checkWallCollision(v) {
	var c = getMapSector(v);
	return map[c.x][c.z] > 0;
}

function resetAllEmissiveness() {
  for (let plane of hash.values()) {
    plane.material.emissive = new THREE.Color('black')
  }
}

function setEmissivenessByObjectType(type) {
  const floatingElement = document.querySelector('#floating-message');
  floatingElement.innerHTML = messageByType[type]
  $('#floating-message').fadeIn(75, function () {
    $('#floating-message').css("display", "flex")
  })
  for (let plane of hash.values()) {
    if (plane.userData.type === type) {
      plane.material.emissive = new THREE.Color('white')
    }
  }
}

function onDocumentMouseMove(event) {
    var mouse = new THREE.Vector2();
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    let planes = []
    for (let plane of hash.values()) {
      planes.push(plane)
    }
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera( mouse, cam );
    var intersects = raycaster.intersectObjects( planes );
    var nonPathIntersects = intersects.filter(({ object }) => ![WALKABLE_PATH, AC1_WALL].includes(object.userData.type));
    const hasIntersectingObjects = nonPathIntersects.length > 0;

    resetAllEmissiveness();
    if (hasIntersectingObjects) {
      nonPathIntersects.sort((a, b) => a.distance - b.distance);
      const nearestIntersectingObject = nonPathIntersects.shift();
      const intersectMaterialType = nearestIntersectingObject.object.userData.type;
      setEmissivenessByObjectType(intersectMaterialType);
    } else {
      $('#floating-message').fadeOut(300)
    }
}

function onDocumentMouseDown( event ) {
    event.preventDefault();
    var mouse = new THREE.Vector2();
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    let planes = []
    for (let plane of hash.values()) {
      planes.push(plane)
    }
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera( mouse, cam );
    var intersects = raycaster.intersectObjects( planes );
    var nonPathIntersects = intersects.filter(({ object }) => ![WALKABLE_PATH, AC1_WALL].includes(object.userData.type));
    const hasIntersectingObjects = nonPathIntersects.length > 0;
    if (hasIntersectingObjects) {
      nonPathIntersects.sort((a, b) => a.distance - b.distance);
      const nearestIntersectingObject = nonPathIntersects.shift();
      nearestIntersectingObject.object.callback()
    }
}

const colorByType = {
  [CHAIR_TO_SIT]: '#7E481C',
  [AC1_STAGE]: '#2C1503',
  [AC1_WALL]: '#000000',
  [LT_1]: '#DC143C',
  [LT_2]: '#DC143C',
  [LT_3]: '#FABD02',
  [LT_4]: '#FABD02',
  [LT_5]: '#03254C',
  [LT_6]: '#03254C',
}

// Radar
function drawRadar() {
	var c = getMapSector(cam.position), context = document.getElementById('radar').getContext('2d');
	context.font = '10px Helvetica';
	for (var i = 0; i < mapW; i++) {
		for (var j = 0, m = map[i].length; j < m; j++) {
			var d = 0;
      const multiplier = 7; // Multiplier to determine scale of objects in radar
			if (i == c.x && j == c.z && d == 0) {
				context.fillStyle = '#000000';
				context.fillRect(i * multiplier, j * multiplier, (i+1)*multiplier, (j+1)*multiplier);
			}
			else if (i == c.x && j == c.z) {
				context.fillStyle = '#AA33FF';
				context.fillRect(i * multiplier, j * multiplier, (i+1)*multiplier, (j+1)*multiplier);
				context.fillStyle = '#000000';
				context.fillText(''+d, i*multiplier+8, j*multiplier+12);
			}
			else if (d > 0 && d < 10) {
				context.fillStyle = '#FF0000';
				context.fillRect(i * multiplier, j * multiplier, (i+1)*multiplier, (j+1)*multiplier);
				context.fillStyle = '#000000';
				context.fillText(''+d, i*multiplier+8, j*multiplier+12);
			}
			else if (map[i][j] > 0) {
				context.fillStyle = colorByType[map[i][j]];
				context.fillRect(i * multiplier, j * multiplier, (i+1)*multiplier, (j+1)*multiplier);
			}
			else {
				context.fillStyle = '#CCCCCC';
				context.fillRect(i * multiplier, j * multiplier, (i+1)*multiplier, (j+1)*multiplier);
			}
		}
	}
}

// Handle window resizing
$(window).resize(function() {
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;
	ASPECT = WIDTH / HEIGHT;
	if (cam) {
		cam.aspect = ASPECT;
		cam.updateProjectionMatrix();
	}
	if (renderer) {
		renderer.setSize(WIDTH, HEIGHT);
	}
	$('#intro, #hurt').css({width: WIDTH, height: HEIGHT,});
});

// Stop moving around when the window is unfocused
$(window).focus(function() {
	if (controls) controls.freeze = false;
});
$(window).blur(function() {
	if (controls) controls.freeze = true;
});
