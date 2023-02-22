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
                volunteer: "/volunteer",
                participant: "/participant",
            },
            // models
            // geolocation
            geolocation: {
                latitude: null,
                longitude: null,
                accuracy: null,
                altitude: null,
                altitudeAccuracy: null,
                heading: null,
                speed: null,
                timestamp: null
            },
            // request model
            request: { _id: null, cityName: null, typeOfNeed: null, geolocation: this.geolocation },
            // volunter model
            volunteer: { _id: null, collaborator: null, typeOfNeed: null },
            // participant model
            participant: { _id: null, request_id: null, volunteer_id: null },
            // request process flag
            processR: false,
            // request process flag
            processV: false,
            // geopositon process flag
            processL: false,

            // default init cities
            cities: [],

            // default init needs
            needs: [],

            // default init rvps
            rvps: [],
        }
    },
    //
    methods: {
        async setPostion(position) {

            this.geolocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy,
                altitude: position.coords.altitude,
                altitudeAccuracy: position.coords.altitudeAccuracy,
                heading: position.coords.heading,
                speed: position.coords.speed,
                timestamp: position.timestamp
            }
            this.processL = true
            // process protection 
            setTimeout(() => {
                // done work
                this.processL = false
            }, 5000);
        },
        //
        async getGeolocation() {

            function error() {
                this.processL = true
                // process protection 
                setTimeout(() => {
                    // done work
                    this.processl = false
                }, 5000);
                this.geolocation.error = "Sorry, no position available"
            }

            const options = {
                enableHighAccuracy: true,
                maximumAge: 30000,
                timeout: 27000
            };

            this.watchID = navigator.geolocation.watchPosition(this.setPostion, error, options);
        },
        // 
        async init() {

            // header
            this.cities = await get(this.a.city);
            this.needs = await get(this.a.need);

            // main
            this.rvps = await get(this.a.rvp);

            // 
            this.getGeolocation()
        },
        // create a new request
        async requestCreate() {

            // before work
            this.processR = true
            // process protection 
            setTimeout(() => {
                // done work
                this.processR = false
            }, 5000);

            // logic
            this.request.geolocation = this.geolocation
            this.request = await create(this.a.request, this.request)
            // update main data
            this.rvps = await get(this.a.rvp);
        },
        async selectedRVP(rvp) {
            this.request = rvp
            this.volunteer.typeOfNeed = rvp.typeOfNeed
        },

        // create a participant
        async combineRequestAndVolunteer(participant) {

            // logic
            this.participant = await create(this.a.participant, participant)

        },

        // become a volunteer
        async becomeVolunteer() {

            // before work
            this.processV = true
            // process protection 
            setTimeout(() => {
                // done work
                this.processV = false;
            }, 5000);

            // logic
            this.volunteer.geolocation = this.geolocation
            this.volunteer = await create(this.a.volunteer, this.volunteer)
            // add logic
            // whenever a volunteer responds to the request, they join.
            this.combineRequestAndVolunteer({ request_id: this.request._id, volunteer_id: this.volunteer._id })

            // update main data
            this.rvps = await get(this.a.rvp);

        }
    },
    // 
    created() {
        this.init()

    }
}).mount('#app')