<template>
    <div>
        <label for="runDate">Date:</label>
        <input type="text" v-model="dateInput" class="form-control" id="runDate" data-test="runDate" placeholder="01/01/1999" />
        <label for="runDistance">Distance:</label>
        <input type="text" v-model="distanceInput" class="form-control" id="runDistance" data-test="runDistance" />
        <button class="btn btn-primary" data-test="runLogButton" @click="send">Log</button>
    </div>
</template>

<script>
export default {
    name: 'Log',
    data() {
        return {
            dateInput: '',
            distanceInput: ''
        };
    },
    methods: {
        send() {
            this.dateInput = '';
            this.distanceInput = '';
        }
    }
}
</script>