<template>
  <div class="vr">
    <Navigation />
    <!-- pyramids -->
    <div class="vr-foreground">
      <img class="img-responsive" src="@/assets/vr-foreground.jpg" />
    </div>

    <div class="vr-pyramids">
      <img class="img-responsive" src="@/assets/vr-pyramids.png" />
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
      <!-- Solo EP -->

      <section class="solo-ep">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-sm-push-3">
              <div class="description">
                <div class="title">
                  <h1>SoloEP</h1>
                  <h3>
                    Microsoft HoloLens . HTC Vive . Unity . A-Frame . GIMP
                  </h3>
                  <h4>UI Designer . UX Designer</h4>
                  <h2>Pyrus Medical</h2>
                </div>

                <p>
                  Electrophysiologists are inundated with information in the
                  operating room. They must interpret EKGs, ultrasounds, X-Rays
                  - thousands of data points from half a dozen video feeds. And
                  they have to rely on several assistants to manage and
                  manipulate this constant stream of information. We built
                  SoloEP to return control to the physician. Using a HMD, the EP
                  can directly manage these visual displays by gazing,
                  gesturing, and speaking. I lead the UI and UX design on this
                  project.
                </p>

                <div class="image">
                  <img
                    class="img-responsive blue-border"
                    src="@/assets/solo-ep.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="detail-border detail-top-border">
              <label @click="toggleSoloEPDetails">{{
                isSoloEPDetailsVisible ? "See Less" : "See More!"
              }}</label>
            </div>
          </div>
        </div>

        <div class="detail container-fluid">
          <div
            :class="
              isSoloEPDetailsVisible
                ? 'dynamic-details expanded-details'
                : 'dynamic-details'
            "
          >
            <div class="row details">
              <div class="col-xs-12 col-sm-6 col-sm-push-3">
                <h3>UI and UX Design</h3>

                <p><b>Navigation</b></p>

                <p>
                  Electrophysiologists will use SoloEP to navigate between video
                  displays and interact with their content. Navigating between
                  displays is the single most important use case. It was
                  critical we nailed the user interface and the user experience.
                  From the outset, there were a couple obvious limitations.
                </p>

                <p>
                  <b>Limited field of view and pixel density</b><br />
                  Both the Microsoft HoloLens and the HTC Vive have constraining
                  FOVs and PPIs. This is problematic if you need to view large
                  videos in fine detail. If the video is too small and too far
                  away, fine detail becomes imperceptible. Too large and too
                  close, and the video will be clipped by the FOV. At the
                  correct size and distance, the video should fit just inside
                  the FOV.
                </p>

                <p>
                  <b>A simple interaction model</b><br />As the physician must
                  maintain absolute focus on the operation, we have to limit the
                  interface to a few, simple interactions. They can't waste time
                  fumbling through long menu systems or busy toolbars. All video
                  feeds must be easily and quickly accessible.
                </p>

                <div class="image narrow">
                  <img
                    class="img-responsive blue-border"
                    src="@/assets/solo-ep-static-layout.jpg"
                  />
                </div>

                <p>
                  I first came up with this Full Screen layout. All the displays
                  are visible. They all have the proper dimensions. The
                  physician must simply look around to navigate between the
                  displays. Very quick and intuitive. After closer inspection
                  though, I realized I was overlooking two other important
                  requirements.
                </p>

                <p>
                  <b>The UI must scale</b><br />
                  In reality, the EP would need to access more than the seven
                  displays in my sketch. As you add more video displays, it
                  becomes more cumbersome to find the correct one.
                </p>

                <p>
                  <b>The UI must be compact</b><br />As you add more video
                  displays, the content area becomes taller and wider, and the
                  distance between displays becomes greater. Because the
                  Electrophysiologist is immobilized at the patient's bed side,
                  a large UI is impractical. The EP can't shuffle their feet and
                  turn to another display every few seconds. Its possible they
                  could strain their back and neck to glance between videos, but
                  this would be very uncomfortable during a four hour procedure.
                  The UI should be as compact as possible.
                </p>

                <div class="image narrow">
                  <img
                    class="img-responsive blue-border"
                    src="@/assets/solo-ep-fluid-layout.jpg"
                  />
                </div>

                <p>
                  I finally settled on this Fluid layout. A single display
                  occupies the center of the physician's FOV, at optimal size
                  and distance. Smaller displays are arrayed along the
                  perimeter, just outside the viewing frustums. These are not
                  for viewing and interacting; rather, they serve as preview
                  icons to help the physician navigate between displays. To view
                  a new video, the EP need only select it's preview icon on the
                  periphery. The new video now streams in the central display.
                  All the displays are still visible and readily accessible.
                  Nothing is hidden behind menus or buttons or even text. It
                  scales. And it's organized - all displays are anchored to a
                  specific point in space allowing the physician to quickly
                  recall their location. The following storyboard illustrates
                  the user's experience.
                </p>

                <div class="image-gallery blue-bg">
                  <div class="legend row">
                    <div class="legend-entry selected col-xs-4">
                      <strong>Select</strong> <span>&nbsp;</span>
                    </div>
                    <div class="legend-entry hover col-xs-4">
                      <strong>Hover</strong> <span>&nbsp;</span>
                    </div>
                    <div class="legend-entry fov col-xs-4">
                      <strong>FOV</strong> <span>&nbsp;</span>
                    </div>
                  </div>
                  <img
                    class="img-responsive"
                    src="@/assets/gaze-at-fluro.jpg"
                  />
                  <p>[GAZE] at CARTO preview</p>
                  <img
                    class="img-responsive"
                    src="@/assets/gaze-at-carto-preset.jpg"
                  />
                  <p>[SELECT] CARTO preview</p>
                  <img
                    class="img-responsive"
                    src="@/assets/select-carto-preset.jpg"
                  />
                  <p>[GAZE] at CARTO</p>
                  <img
                    class="img-responsive"
                    src="@/assets/gaze-at-carto.jpg"
                  />
                </div>

                <p><b>Rotation</b></p>

                <p>
                  During a procedure, the Electrophysiologist relies heavily on
                  CARTO, an electroanatomical mapping system that models the
                  patient's heart. The EP must inspect this heart model from
                  many different perspectives. Unfortunately, the physician
                  can't rotate this model directly - they depend on their
                  assistants to adjust the heart's orientation for them. This is
                  a huge pain point. Their assistants must interpret "rotate
                  back five degrees" and "turn right a smidge". You can imagine
                  the confusion and frustration.
                </p>

                <p>
                  We had to give the physician direct control. This was a
                  difficult challenge. The EP must make very fine adjustments.
                  They need the precision of a mouse or trackpad. Unfortunately,
                  the EP's hands are occupied with instruments.
                </p>

                <p>
                  To meet these challenges, I developed a head tilt mechanism to
                  rotate the heart. It’s pretty simple. The physician's head
                  acts as a joystick. Our hardware can detect very fine head
                  movements, similar to what you might find on a console
                  joystick. This control mechanism is quite intuitive. Because
                  the head can pitch and roll and turn, these rotations
                  translate quite nicely when rotating a model heart. I
                  developed the following prototype as a proof-of-concept.
                  Originally developed for Unity + HoloLens, I recreated it in
                  A-Frame to share here. Put on an HMD and check it out!
                </p>

                <div class="image">
                  <a href="../tilt"
                    ><img
                      class="img-responsive blue-border tilt-control-gif"
                      src="@/assets/tilt-control.gif"
                  /></a>
                </div>

                <p>
                  Finally, here is a storyboard for the entire rotation
                  sequence.
                </p>

                <div class="image-gallery blue-bg">
                  <div class="legend row">
                    <div class="legend-entry selected col-xs-4">
                      <strong>Select</strong> <span>&nbsp;</span>
                    </div>
                    <div class="legend-entry hover col-xs-4">
                      <strong>Hover</strong> <span>&nbsp;</span>
                    </div>
                    <div class="legend-entry fov col-xs-4">
                      <strong>FOV</strong> <span>&nbsp;</span>
                    </div>
                  </div>
                  <img
                    class="img-responsive"
                    src="@/assets/gaze-at-carto.jpg"
                  />
                  <p>[SELECT] CARTO</p>
                  <img class="img-responsive" src="@/assets/select-carto.jpg" />
                  <p>[SELECT] 'Rotate Heart'</p>
                  <img
                    class="img-responsive"
                    src="@/assets/start-rotate-carto.jpg"
                  />
                  <p>[TILT] head</p>
                  <img class="img-responsive" src="@/assets/rotate-carto.jpg" />
                </div>
              </div>
            </div>

            <!-- <div class="row">
              <div class="detail-border detail-bottom-border">
                <label @click="toggleSoloEPDetails">See Less</label>
              </div>
            </div> -->
          </div>
        </div>
      </section>

      <!-- Pyrus Burns -->

      <section class="pyrus-burns">
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
                    src="@/assets/pyrus-burns-demo.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="detail-border detail-top-border">
              <label @click="toggleBurnDetails">{{
                isBurnDetailsVisible ? "See Less" : "See More!"
              }}</label>
            </div>
          </div>
        </div>

        <div class="detail container-fluid">
          <div
            :class="
              isBurnDetailsVisible
                ? 'dynamic-details expanded-details'
                : 'dynamic-details'
            "
          >
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-sm-push-3">
                <h3>UI Development</h3>

                <p>
                  The UI has a lot of responsibility. It may seem like a simple
                  tag along canvas, but it encapsulates a lot of functionality.
                  The UI behaves as a guide, directing the user what to do,
                  where to look, and how to interact with the system. It walks
                  the user through the application - from the initial setup,
                  through all the phases of a burn cycle. It plays back audio
                  clips. It interprets commands. And it strives to keep its
                  distance - close enough to be helpful, but far enough not to
                  interfere.
                </p>

                <p>
                  As UI developer, it was my responsibility to build and
                  maintain this layer. I coordinated communication between the
                  user and the system. I constructed the interface elements in
                  Unity. I designed the wireframe holograms in Blender. I
                  programmed the behavior of all these objects. Along the way, I
                  learned the best practices for UI in mixed reality.
                </p>

                <div class="image-gallery blue-bg">
                  <img class="img-responsive" src="@/assets/ui-start.jpg" />
                  <img
                    class="img-responsive"
                    src="@/assets/ui-calibrate-arm.jpg"
                  />
                  <img
                    class="img-responsive"
                    src="@/assets/ui-calibrate-cube.jpg"
                  />
                </div>

                <h3>UX Development</h3>

                <p>
                  Overlaying the burn realistically onto the patient's arm was
                  our greatest development challenge. This was critical to our
                  success. The hologram must be convincing enough to suspend the
                  user's reality. We had to convince the user the burn was on
                  their arm. The position, rotation, and scale of the hologram
                  had to be perfect.
                </p>

                <p><b>Arm Tracking Prototype</b></p>

                <p>
                  Our arm tracking prototype was very ambitious. We used
                  <a href="https://github.com/qian256/HoloLensARToolKit"
                    >HoloLensARToolkit</a
                  >, a library that leverages the HoloLens’ cameras to detect QR
                  codes and calculate their position and orientation in space.
                  We attached these QR codes onto a wristband, and strapped it
                  to the arm.
                </p>

                <div class="image narrow">
                  <img
                    class="img-responsive blue-border"
                    src="@/assets/qr-cube.jpg"
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
                    The user calibrates the cube. We now know the cube's
                    location in every frame.
                  </li>
                  <li>
                    We project a wireframe arm hologram in front of the user.
                  </li>
                  <li>
                    The user places their arm inside the hologram. We now know
                    the arm's location in the current frame.
                  </li>
                </ol>

                <p>
                  At this exact point in time, we know the exact location of
                  both the cube and arm in space. We simply subtract one
                  position from the other, and we have our vector.
                </p>

                <div class="video blue-border">
                  <div
                    align="center"
                    class="embed-responsive embed-responsive-16by9"
                  >
                    <video controls class="embed-responsive-item">
                      <source
                        src="@/assets/pyrus-burns-arm-tracking-prototype.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>

                <p>
                  Sadly, tracking wasn't consistent enough to suspend belief.
                  For ARToolkit to accurately track the QR codes, they must be
                  clearly visible in every frame. If they leave the viewing
                  frustum for even a second, tracking is disrupted, and the
                  illusion lost. This limitation is compounded by the HoloLens'
                  small FOV. To fit both the cube and hologram into the field of
                  view, the user had to look down their out-stretched arm. This
                  was very uncomfortable. Too much visual noise in the
                  background would also disrupt the tracking. Ultimately, this
                  prototype was too uncomfortable and too inconsistent.
                </p>

                <p><b>Static Prototype</b></p>

                <p>
                  We then pivoted to a simpler approach. Unable to reliably
                  track the arm through space, we had to restrict the arm to a
                  single point in space. We asked the user to place their arm in
                  a wireframe hologram located comfortably at their side. We
                  then projected the burn holograms on top. As long as the user
                  held this pose, our illusion was convincing. Though more
                  physically restrictive, the added comfort and persistence won
                  out.
                </p>

                <div class="video blue-border">
                  <div
                    align="center"
                    class="embed-responsive embed-responsive-16by9"
                  >
                    <video controls class="embed-responsive-item">
                      <source
                        src="@/assets/pyrus-burns-static-prototype.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="row">
              <div class="detail-border detail-bottom-border">
                <label @click="toggleBurnDetails">See Less</label>
              </div>
            </div> -->
          </div>
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
                        src="@/assets/parachute-sim.mp4"
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
                  <a href="@/tilt"
                    ><img
                      class="img-responsive blue-border tilt-control-gif"
                      src="@/assets/tilt-control.gif"
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

<style scoped src="./VR.css"/>

<script>
import Vue from "vue";
import Navigation from "@/components/Navigation.vue";

export default Vue.extend({
  name: "VR",
  components: { Navigation },
  data: function () {
    return {
      isBurnDetailsVisible: false,
      isSoloEPDetailsVisible: false,
    };
  },
  methods: {
    toggleBurnDetails: function () {
      this.isBurnDetailsVisible = !this.isBurnDetailsVisible;
    },
    toggleSoloEPDetails: function () {
      this.isSoloEPDetailsVisible = !this.isSoloEPDetailsVisible;
    },
  },
  computed: {
    classesBurnDetails: function () {
      let transitionClass = this.isBurnDetailsVisible
        ? "expanded-details"
        : "collapsed-details";
      return "details " + transitionClass;
    },
    classesBurnBottomBorder: function () {
      let transitionClass = this.isBurnDetailsVisible
        ? "expanded-border"
        : "collapsed-border";
      return "detail-border detail-bottom-border " + transitionClass;
    },
  },
});
</script>
