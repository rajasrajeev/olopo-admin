<template>
<section class="event-section">
        <div class="container py-4">
            <h1>Events</h1>

            <!-- Tabs -->
            <ul class="nav nav-tabs my-3" id="eventTabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="available-tab" data-bs-toggle="tab" data-bs-target="#available" type="button" role="tab">Available</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="purchased-tab" data-bs-toggle="tab" data-bs-target="#purchased" type="button" role="tab">Purchased</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completed" type="button" role="tab">Completed</button>
              </li>
            </ul>

            <div class="tab-content" id="eventTabsContent">
              <div class="tab-pane fade show active" id="available" role="tabpanel">

                <!-- Event Card 1 -->
                <!-- <div class="card event-card">
                  <img src="/theme/frontend/assets/images/events/first-section.png" class="event-image" alt="Event Image" />
                  <div class="event-overlay">
                    <span class="purchased-label">Purchased</span>
                  </div>
                  <div class="event-details">
                    <h5 class="mb-1">Shanel Show</h5>
                    <small><i class="bi bi-calendar-event"></i> 03-11 Apr 2025 · 07:30 PM</small><br>
                    <small><i class="bi bi-geo-alt"></i> Kochi International Airport</small>
                  </div>
                </div> -->

                <!-- Event Card 2 -->
                <!-- <div class="card event-card">
                  <img src="/theme/frontend/assets/images/events/first-section.png" class="event-image" alt="Event Image" />
                  <div class="event-overlay">
                    <span class="coin"><i class="bi bi-coin gold-coin"> </i> 150</span>
                  </div>
                  <div class="event-details">
                    <h5 class="mb-1">Point And Cash Event</h5>
                    <small>04-11 Apr 2025 · 03:45 PM</small><br>
                    <small>Aluva, Kerala, India</small>
                  </div>
                </div> -->

                <!-- Event Card 3 -->
                <!-- <div class="card event-card">
                  <img src="/theme/frontend/assets/images/events/first-section.png"class="event-image" alt="Event Image" />
                  <div class="event-overlay">
                    <span class="coin"><i class="bi bi-coin gold-coin"> </i> 200</span>
                  </div>
                  <div class="event-details">
                    <h5 class="mb-1">Points Event</h5>
                    <small>04-12 Apr 2025 · 03:40 PM</small><br>
                    <small>Aluva, Kerala, India</small>
                  </div>
                </div> -->

                <!-- Event Card 4 -->
                <!-- <div class="card event-card">
                  <img src="/theme/frontend/assets/images/events/first-section.png" class="event-image" alt="Event Image" />
                  <div class="event-overlay">
                    <span class="sold-out">Sold Out</span>
                  </div>
                  <div class="event-details">
                    <h5 class="mb-1">Brenda Stephenson</h5>
                    <small>Description or date/time/location here</small>
                  </div>
                </div> -->

              </div>

              <div class="tab-pane fade" id="purchased" role="tabpanel">
                <p class="mt-3">No purchased events yet.</p>
              </div>

              <div class="tab-pane fade" id="completed" role="tabpanel">
                <p class="mt-3">No completed events yet.</p>
              </div>
            </div>
          </div>

    </section>
</template>
<script>
export default {
    name: "Events",
    mounted() {
    }
}
</script>
