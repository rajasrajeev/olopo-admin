<template>
    <div>
        <div class="header bg-primary pb-6">
            <div class="container-fluid">
                <div class="header-body">
                    <div class="row align-items-center py-3">
                        <div class="col-lg-6 col-7">
                            <h6 class="h2 text-white d-inline-block mb-0">Dashboard</h6>
                        </div>
                    </div>
                    <Summary></Summary>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Summary from "./Summary";
export default {
    name: "Dashboard",
    components: {Summary},
}
</script>
