<template>
  <div class="vr">
    <Navigation />
    <!-- pyramids -->
    <div class="vr-foreground">
      <img class="img-responsive" src="../assets/vr-foreground.jpg" />
    </div>

    <div class="vr-pyramids">
      <img class="img-responsive" src="../assets/vr-pyramids.png" />
    </div>

    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-sm-push-3">
            <div class="title">
              <h1>Paul Schneider</h1>
              <h3>VR . AR</h3>
              <h4>Development . Design</h4>
              <h2>Portfolio</h2>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="content">
      <!-- Pyrus Burns -->

      <section>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-sm-push-3">
              <div class="description">
                <div class="title">
                  <h1>Pyrus Burns</h1>
                  <h3>Microsoft HoloLens . Unity . ARToolkit . Blender</h3>
                  <h4>UI Developer . UX Developer</h4>
                  <h2>Pyrus</h2>
                </div>

                <p>
                  Traumatic burns are incredibly painful. Recovery from a severe
                  burn is possibly worse. The healing process is long and
                  demanding. Burn survivors must follow a specific regiment of
                  physical and psychological therapy. They must manage their
                  pain. Patient education is imperative. We built Pyrus Burns to
                  explore how augmented reality can help educate burn patients.
                  Using the Microsoft HoloLens, we project realistic burn
                  holograms onto the patient's arm. These holograms are designed
                  to help the patient understand their own burn, and how it's
                  appearance and feel will progress over time. I managed the UI
                  and UX development on this project.
                </p>

                <div class="image narrow">
                  <img
                    class="img-responsive blue-border"
                    src="../assets/pyrus-burns-demo.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="detail container-fluid">

          <!-- <div class="row">
            <div class="detail-border detail-top-border">
              <label @click="togglePBDetails">{{isPBDetailsVisible ? 'See Less' : 'See More!'}}</label>
              <label @click="togglePBDetails">{{isPBDetailsVisible ? 'See Less' : 'See More!'}}</label>
            </div>
          </div> -->

          <div class="row details">
            <div class="col-xs-12 col-sm-6 col-sm-push-3">
              <h3>UI Development</h3>

              <p>
                The UI has a lot of responsibility. It may seem like a simple
                tag along canvas, but it encapsulates a lot of functionality.
                The UI behaves as a guide, directing the user what to do, where
                to look, and how to interact with the system. It walks the user
                through the application - from the initial setup, through all
                the phases of a burn cycle. It plays back audio clips. It
                interprets commands. And it strives to keep its distance - close
                enough to be helpful, but far enough not to interfere.
              </p>

              <p>
                As UI developer, it was my responsibility to build and maintain
                this layer. I coordinated communication between the user and the
                system. I constructed the interface elements in Unity. I
                designed the wireframe holograms in Blender. I programmed the
                behavior of all these objects. Along the way, I learned the best
                practices for UI in mixed reality.
              </p>

              <div class="image-gallery blue-bg">
                <img class="img-responsive" src="../assets/ui-start.jpg" />
                <img
                  class="img-responsive"
                  src="../assets/ui-calibrate-arm.jpg"
                />
                <img
                  class="img-responsive"
                  src="../assets/ui-calibrate-cube.jpg"
                />
              </div>

              <h3>UX Development</h3>

              <p>
                Overlaying the burn realistically onto the patient's arm was our
                greatest development challenge. This was critical to our
                success. The hologram must be convincing enough to suspend the
                user's reality. We had to convince the user the burn was on
                their arm. The position, rotation, and scale of the hologram had
                to be perfect.
              </p>

              <p><b>Arm Tracking Prototype</b></p>

              <p>
                Our arm tracking prototype was very ambitious. We used
                <a href="https://github.com/qian256/HoloLensARToolKit"
                  >HoloLensARToolkit</a
                >, a library that leverages the HoloLens’ cameras to detect QR
                codes and calculate their position and orientation in space. We
                attached these QR codes onto a wristband, and strapped it to the
                arm.
              </p>

              <div class="image narrow">
                <img
                  class="img-responsive blue-border"
                  src="../assets/qr-cube.jpg"
                />
              </div>

              <p>
                Finding the offset vector between the QR cube and arm was
                difficult. After a few failed attempts, we came up with this
                procedure:
              </p>

              <ol>
                <li>The user attaches the cube to their wrist.</li>
                <li>
                  The user calibrates the cube. We now know the cube's location
                  in every frame.
                </li>
                <li>
                  We project a wireframe arm hologram in front of the user.
                </li>
                <li>
                  The user places their arm inside the hologram. We now know the
                  arm's location in the current frame.
                </li>
              </ol>

              <p>
                At this exact point in time, we know the exact location of both
                the cube and arm in space. We simply subtract one position from
                the other, and we have our vector.
              </p>

              <div class="video blue-border">
                <div
                  align="center"
                  class="embed-responsive embed-responsive-16by9"
                >
                  <video controls class="embed-responsive-item">
                    <source
                      src="../assets/pyrus-burns-arm-tracking-prototype.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>

              <p>
                Sadly, tracking wasn't consistent enough to suspend belief. For
                ARToolkit to accurately track the QR codes, they must be clearly
                visible in every frame. If they leave the viewing frustum for
                even a second, tracking is disrupted, and the illusion lost.
                This limitation is compounded by the HoloLens' small FOV. To fit
                both the cube and hologram into the field of view, the user had
                to look down their out-stretched arm. This was very
                uncomfortable. Too much visual noise in the background would
                also disrupt the tracking. Ultimately, this prototype was too
                uncomfortable and too inconsistent.
              </p>

              <p><b>Static Prototype</b></p>

              <p>
                We then pivoted to a simpler approach. Unable to reliably track
                the arm through space, we had to restrict the arm to a single
                point in space. We asked the user to place their arm in a
                wireframe hologram located comfortably at their side. We then
                projected the burn holograms on top. As long as the user held
                this pose, our illusion was convincing. Though more physically
                restrictive, the added comfort and persistence won out.
              </p>

              <div class="video blue-border">
                <div
                  align="center"
                  class="embed-responsive embed-responsive-16by9"
                >
                  <video controls class="embed-responsive-item">
                    <source
                      src="../assets/pyrus-burns-static-prototype.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="row">
            <div class="detail-border detail-bottom-border" v-if="isPBDetailsVisible">
              <label @click="togglePBDetails">{{isPBDetailsVisible ? 'See Less' : 'See More!'}}</label>
            </div>
          </div> -->

        </div>
      </section>

      <!-- Parachute Simulation -->

      <section>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-sm-push-3">
              <div class="description">
                <div class="title">
                  <h1>Parachute Simulation</h1>
                  <h3>
                    Z800 3DVisor . Xbox Kinnect . PlayStation Move . Phidgets
                    USB Relay . OGRE
                  </h3>
                  <h4>UX Designer . UX Developer</h4>
                  <h2>The University of Georgia</h2>
                </div>

                <p>
                  This project was the culmination of a virtual reality course I
                  took in college. This was my very first exposure to VR. My
                  team built a parachute simulation from inexpensive consumer
                  products. This virtual reality system featured motion
                  tracking, head tracking, stereoscopic rendering, and a 3D
                  haptic display.
                </p>

                <div class="video blue-border">
                  <div
                    align="center"
                    class="embed-responsive embed-responsive-16by9"
                  >
                    <video controls class="embed-responsive-item">
                      <source
                        src="../assets/parachute-sim.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>

                <p>
                  I lead the development on this project. I programmed the
                  physics engine that governed the fall of the sky diver and
                  resistance of the parachute. I engineered the haptic system:
                  the array of phidget fans, the parachute control lines, and
                  the analog rumble feature on the PS Move controllers. And I
                  built the controller that coordinated all these systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sandbox -->

      <section class="sandbox">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-sm-push-3">
              <h2>Sandbox</h2>

              <div class="description">
                <p><b>Head Tilt Control</b></p>

                <p>
                  At Pyrus, we were exploring an XR solution for a certain
                  medical procedure. Without going into too much detail, this
                  procedure required both of the doctor's hands at all times. I
                  was tasked with developing a hands-free solution for rotating
                  anatomical models in virtual space.
                </p>

                <p>
                  Too meet this challenge, I came up with a head tilt mechanism.
                  It’s pretty simple. The physician's head acts as a joystick.
                  Our hardware can detect very fine head movements, similar to
                  what you might find on a console joystick. This control
                  mechanism is quite intuitive; because the head can pitch and
                  roll and turn, these rotations translate quite nicely when
                  rotating a 3D model. I developed the following prototype as a
                  proof-of-concept. Originally developed for Unity + HoloLens, I
                  recreated it in A-Frame to share here. Put on an HMD and check
                  it out!
                </p>

                <div class="image">
                  <a href="../tilt"
                    ><img
                      class="img-responsive blue-border tilt-control-gif"
                      src="../assets/tilt-control.gif"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Vue from "vue";
import Navigation from "../components/Navigation.vue";

export default Vue.extend({
  name: "VR",
  components: { Navigation },
  data: function () {
    return {
      isPBDetailsVisible: false,
    };
  },
  methods: {
      togglePBDetails: function () {
          this.isPBDetailsVisible = !this.isPBDetailsVisible;
      }
  }
});
</script>

<style scoped>
section {
  padding: 30px 0;
}

p {
  margin: 20px 0 0 0;
}

ol,
ul {
  margin: 20px 0 0 0;
}

p,
li {
  color: #16082d;
  font-family: "Quicksand", sans-serif;
  line-height: 30px;
}

h1,
h2,
h3,
h4 {
  font-family: "Bungee", cursive;
  margin: 10px 0 0 0;
  color: #fe2422;
}

h1 {
  font-size: 1.8rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1rem;
}

h4 {
  font-size: 1rem;
}

label {
  color: white;
  font-family: "Bungee", cursive;
  margin: 12px;
  font-weight: 100;
}

header {
  background-color: white;
  padding: 20px 0 20px 0;
  margin: 0 0 50% 0;
}

main {
  background-color: white;
}

@media (min-width: 768px) {
  .narrow {
    padding: 0 15%;
  }
}

/* always present */
.expand-transition {
  transition: all .3s ease;
  height: 100px;
  overflow: hidden;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter, .expand-leave {
  height: 0;
}


.image,
.image-gallery,
.video {
  margin: 30px 0 10px 0;
}

.image-gallery img {
  padding: 0 0 10px 0;
}

.image-gallery p {
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px 0;
  text-align: center;
}

.blue-border {
  border: #16082d solid;
  border-width: 10px 25px 20px 7px;
}

.blue-bg {
  background: #16082d;
  padding: 10px 25px 20px 7px;
}

.vr-pyramids {
  margin: 0 0 15% 0;
}

.vr-foreground {
  position: fixed;
  z-index: -2;
}

.description {
  margin: 45px 0;
}

.title h1 {
  color: #fe2422;
}

.title h2 {
  color: #b43dd5;
}

.title h3 {
  color: #f61f7f;
}

.title h4 {
  color: #f634b9;
}

.detail h2,
.detail h3,
.detail h4 {
  margin: 30px 0 0 0;
}

.detail-border {
  text-align: right;
}

.detail-border label {
  font-size: 18px;
  cursor: pointer;
}

.detail-top-border {
  background-color: #fe2422;
  width: 50%;
}

.detail-bottom-border {
  background-color: #b43dd5;
  width: 40%;
}

.details {
  padding: 45px 0;
}

@media (min-width: 768px) {
  .details {
    background-image: url("/public/img/detail-pink-bg.jpg");
    background-repeat: repeat-y;
  }
}

.legend {
  margin: 0 0 15px 0;
}

.legend-entry {
  display: inline-block;
  padding: 0 5%;
}

.legend-entry strong {
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.legend-entry span {
  width: 100%;
  display: block;
}

.selected strong {
  color: #f6ff00;
}

.selected span {
  height: 8px;
  background-color: #f6ff00;
}

.hover strong {
  color: #f6ff00;
}

.hover span {
  height: 4px;
  background-color: #f6ff00;
}

.fov strong {
  color: #fe256f;
}

.fov span {
  height: 4px;
  background-color: #fe256f;
}

.tilt-control-gif {
  cursor: pointer;
}

.sandbox {
  background-color: #fdffbe;
}
</style>