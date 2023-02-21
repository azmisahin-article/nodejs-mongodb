/**
 * @file client site vue application
 * @author azmisahin@outlook.com
 * @description Creating Node Js api using MongoDB.
 * @see https://medium.com/@azmisahin/nodejs-mongodb-1cbf2cd8071c
 * @see https://www.mongodb.com/features/mongodb-rest-api
 * */

const { createApp } = Vue

// header app
createApp({
    //
    data() {
        return {
            // global process flag
            process: false,

            // create request form
            requestModel: { cityName: null, typeOfNeed: null, geolocation: null },

            // default init cities
            cities: [],

            // default init needs
            needs: []
        }
    },
    //
    methods: {
        // create a new request
        async requestCreate() {
            // process flag
            this.process = true

            // request create logic
            const response = await post("/api/request", this.requestModel)

            // response success
            if (response.ok) {
                // everything is ok
                const result = await response.json()
            }

            // process protection 
            setTimeout(() => {
                this.process = false
            }, 5000);
        }
    },
    // 
    created() {
        fetchPararlel().then(([cities, needs]) => {
            this.cities = cities
            this.needs = needs
        })
    }
}).mount('#header-app')

// main app
createApp({
    //
    data() {
        return {
            // global process flag
            process: false,

            // default init rvps
            rvps: [],
        }
    },
    //
    methods: {

    },
    // 
    created() {
        fetchRVP().then(([rvps]) => {
            this.rvps = rvps
        })
    }

}).mount('#main-app')