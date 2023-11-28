<template>
<div>
    <Vertical v-if="layoutType === 'vertical'" :layout="layoutType">
        <slot />
    </Vertical>
</div>
</template>

<script>
import {layout} from "../state/modules/layout";
import Vertical from "./vertical.vue";
import {mapState} from "pinia";

export default {
    components: {
        Vertical,
    },
    data() {
        return {};
    },
    computed: {
        ...mapState(layout, ['layoutType']),
    },
    mounted() {

    },
};
</script>

