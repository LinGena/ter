<template>
    
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Current tasks</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{{ count.tasks }}</h1>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Directories</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{{ count.monkey }}</h1>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Reviews</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{{ count.reviews }}</h1>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Count",
  data() { 
    return {
      count: {},
    } 
  },
  mounted: function() {
    this.fetchData()
    this.pullData()
  },
  methods: {
    pullData() {
      this.timer = setInterval(() => {
        this.fetchData()
      }, 3000)
    },

    async fetchData() {
      await axios.get('/api/count')
        .then(response => {
          console.log(response)
          this.count = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },   
  }
};
</script>

