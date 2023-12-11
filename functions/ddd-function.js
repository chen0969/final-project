document.addEventListener("DOMContentLoaded", function () {
    init();
    loadObjects();    
    people_scale();
    people_follow();
});

// function return setting
var people_stop_follow = false;

// 3d coin function
    // Create an object to encapsulate the scene setup
    var myScene = {
        scene: new THREE.Scene(),
        camera: new THREE.PerspectiveCamera(50, 1, 0.1, 1000),
        renderer: new THREE.WebGLRenderer({ alpha: true }),
        clock: new THREE.Clock(),
        isHovering: false,
    };

    //init setting
    function init() {
        myScene.camera.position.z = 8;
        myScene.camera.lookAt(new THREE.Vector3(0, 2, 0));

        myScene.renderer.setSize(300, 300);
        myScene.renderer.setClearColor(0xCBAA0D, 0);
        document.getElementById("dddcontain").appendChild(myScene.renderer.domElement);

        function getLight(color,intensity) {
            var pointLight = new THREE.PointLight(color, intensity);
            return pointLight;
        }
        var pointLight = getLight(0xfef617,5);
        var pointLights = getLight(0xE9057F,3);
        pointLight.position.set(0, 3, 2);
        pointLights.position.set(-3,2,2);
        myScene.scene.add(pointLight);
        myScene.scene.add(pointLights);
    }

    //object function
    function loadObjects() {
        var loader = new THREE.GLTFLoader();
        loader.load(
            'three/logo-coin.glb',
            function (glb) {
                const root = glb.scene;
                root.scale.set(0.1, 0.1, 0.1);
                myScene.scene.add(root);

                var container = document.getElementById("dddcontain");
                var mmeo = document.getElementById('mmeo');

                container.addEventListener('mouseenter', function () {
                    myScene.isHovering = true;
                });

                container.addEventListener('mouseleave', function () {
                    myScene.isHovering = false;
                });

                function animate() {
                    requestAnimationFrame(animate);
                    var delta = myScene.clock.getDelta();

                    if (!myScene.isHovering) {
                        root.rotation.y += delta*3;
                        mmeo.style.color = '#FD521B';
                        mmeo.style.fontSize = '3rem';
                    }
                    else{
                        root.rotation.y = delta;
                        mmeo.style.color = '#5774CD';
                        mmeo.style.fontSize = '3.5rem';
                    }

                    myScene.renderer.render(myScene.scene, myScene.camera);
                }

                animate();
            },
            function (xhr) { console.log((xhr.loaded / xhr.total * 100) + "% loaded"); },
            function (error) { console.log("error!"); }
        );
    }

// people scale function
    function people_scale(){
        const btn = document.getElementById('dddcontain');
            const circle = document.getElementById('cc');
            const audience = document.getElementById('people');


            btn.addEventListener('mouseover', function(){
                findclass();
                circle.classList.add('cbigger');
                audience.classList.add('gbigger');
            });

            btn.addEventListener('mouseleave', function(){
                findclass();
                circle.classList.add('csmall');
                audience.classList.add('gsmall');
            });

            function findclass(){
                if(circle.classList.contains('csmall')){
                    circle.classList.remove('csmall');
                }
                else if(circle.classList.contains('cbigger')){
                    circle.classList.remove('cbigger');
                }

                if(audience.classList.contains('gsmall')){
                    audience.classList.remove('gsmall');
                }
                else if(audience.classList.contains('gbigger')){
                    audience.classList.remove('gbigger');
                }
            }
    }


// dot(people) follow function
function people_follow(){
    var followElement = document.getElementById('follow');
    var fastElement = document.getElementById('fast');
    var midElement = document.getElementById('middle');
    var slowElement = document.getElementById('slow');
    var midBuilding = document.getElementById('mid-building');

    document.addEventListener('mousemove', function(event) {
    var mouseX = event.pageX.toFixed();

    // Do something with the mouse coordinates
    // console.log('Mouse X: ' + mouseX);
    
    var adjmxfl = mouseX /2.5 -250;
    var adjmxf = mouseX / 3 -250;
    var adjmxm = mouseX / 6 -250;
    var adjmxs = mouseX / 9 -250;
    var adjmxss = mouseX / 12 -250;
    
    followElement.style.transform = `translateX(${adjmxfl}px)`;
    fastElement.style.transform = `translateX(${adjmxf}px)`;
    midElement.style.transform = `translateX(${adjmxm}px)`;
    slowElement.style.transform = `translateX(${adjmxs}px)`;
    midBuilding.style.transform = `translateX(${adjmxss}px)`;
    });
}


