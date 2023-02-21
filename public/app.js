/**
 * @file application model–view–viewmodel
 * @author azmisahin@outlook.com
 * @description Creating Node Js api using MongoDB.
 * @see https://medium.com/@azmisahin/nodejs-mongodb-1cbf2cd8071c
 * @see https://www.mongodb.com/features/mongodb-rest-api
 * */

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// header app
createApp({
    //
    data() {
        return {
            //api endpoint
            a: {
                city: "/city",
                need: "/need",
                rvp: "/",
                request: "/request",
            },
            // header data
            h: {
                // models
                m: {
                    // create request form
                    request: {
                        cityName: null, typeOfNeed: null, geolocation: {
                            latitude: null,
                            longitude: null,
                            accuracy: null,
                            altitude: null,
                            altitudeAccuracy: null,
                            heading: null,
                            speed: null,
                            timestamp: null
                        }
                    },
                },
                // global process flag
                process: false,

                // default init cities
                cities: [],

                // default init needs
                needs: []
            },
            // main data
            m: {
                // global process flag
                process: false,

                // default init rvps
                rvps: [],
            }
        }
    },
    //
    methods: {
        //
        async processProtection(process, protectionDuuration) {
            // before work
            this[""] = true;

            // process protection 
            setTimeout(() => {
                // done work
                process = false;
            }, protectionDuuration);
        },
        async setPostion(position) {

            this.h.m.request.geolocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy,
                altitude: position.coords.altitude,
                altitudeAccuracy: position.coords.altitudeAccuracy,
                heading: position.coords.heading,
                speed: position.coords.speed,
                timestamp: position.timestamp
            }
        },
        async geolocation() {

            function error() {
                alert('Sorry, no position available.');
            }

            const options = {
                enableHighAccuracy: true,
                maximumAge: 30000,
                timeout: 27000
            };

            const watchID = navigator.geolocation.watchPosition(this.setPostion, error, options);
        },
        // 
        async init() {

            // header
            this.h.cities = await get(this.a.city);
            this.h.needs = await get(this.a.need);

            // main
            this.m.rvps = await get(this.a.rvp);

            // 
            this.geolocation()
        },
        // create a new request
        async requestCreate() {

            // before work
            this.h.process = true
            // process protection 
            setTimeout(() => {
                // done work
                this.h.process = false
            }, 5000);

            // logic
            this.h.request = await post(this.a.request, this.h.m.request)
            // update main data
            this.m.rvps = await get(this.a.rvp);
        },
        // become a volunteer
        async becomeVolunteer() {

            // before work
            this.m.process = true
            // process protection 
            setTimeout(() => {
                // done work
                this.m.process = false;
            }, 5000);

            // logic

        }
    },
    // 
    created() {
        this.init()

    }
}).mount('#app')