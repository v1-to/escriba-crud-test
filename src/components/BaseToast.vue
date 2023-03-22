<script setup lang="ts">
import { useUIStore } from '@/stores/ui';
import { storeToRefs } from 'pinia';

const store = useUIStore();
const { showToast, toastMessage, toastColor } = storeToRefs(store);

</script>

<template>
    <Teleport to="body">
        <Transition name="slide-fade">
            <div class="toast" :style="{ backgroundColor: toastColor }" v-show="showToast">
                <button @click="store.closeToast">X</button>
                <span>{{ toastMessage }}</span>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped lang="scss">
div.toast {
    width: 300px;
    height: 150px;
    border-radius: 10px;
    position: absolute;
    display: flex;
    top: 15px;
    right: 15px;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 9999;

    button {
        position: absolute;
        top: 8px;
        right: 8px;
        border: 0;
        background-color: indianred;
        border-radius: 4px;
        padding: 4px 10px;
        cursor: pointer;
    }
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>