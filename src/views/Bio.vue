<template>
  <div class="bio">
    <div class="spacer"></div>
    <v-container>
      <h1>My Experience Timeline</h1>
      <div class="spacer"></div>
      <v-timeline>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          :icon="year.icon"
          fill-dot
          :dense="$vuetify.breakpoint.smAndDown"
        >
          <template v-slot:opposite>
            <span :class="`${year.color}--text`" v-text="year.year"></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light  ${year.color}--text`">{{ year.job }}</h2>
            <v-list-item three-line v-if="year.tools">
              <v-list-item-content>
                <v-list-item-title>{{year.text }}</v-list-item-title>
                <v-list-item-subtitle>{{year.tools }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <div v-else class="pt-1">{{year.text }}</div>
            <!-- 
            <p>{{year.tools }}</p>-->
          </div>
        </v-timeline-item>
      </v-timeline>
      <div class="spacer"></div>
    </v-container>
  </div>
</template>


<script>
export default {
  data: () => ({
    years: [
      {
        color: "green",
        year: "November 2019 - Present",
        job: "Computer engineer",
        text: "Instituto de Emprego da Madeira",
        tools: "Technologies: PHP, Lumen, Node, Vue.js, Microsoft SQL, Docker",
        icon: "far fa-building"
      },
      {
        color: "orange",
        year: "September 2017 - Present",
        job: "Master in Informatics Engineering",
        text: "Universidade da Madeira",
        tools: "Technologies: Docker, IOT, Python, C#, PHP, Laravel, Node",
        icon: "fas fa-graduation-cap"
      },
      {
        color: "red",
        year: "May 2019 - November 2019",
        job: "Computer engineer",
        text: "Inocentro",
        tools:
          "Technologies: Kubernetes, Docker, Lumen, Laravel, Node.js, Vue.js, Python, C#, AWS, Code integration, MongoDB, Microsoft SQL",
        icon: "fas fa-cubes"
      },
      {
        color: "cyan",
        year: "August 2018 - May 2019",
        job: "Computer engineer",
        text: "ODKAS",
        tools:
          "Technologies: SAPUI5, OPENUI5, Laravel, PHP, JavaScript, CSS, Java, Android, SAP, ABAP, Microsoft SQL",
        icon: "fas fa-globe-africa"
      },
      {
        color: "green",
        year: "December 2017 - August 2018",
        job: "Professional internship",
        text: "Instituto de Emprego da Madeira",
        icon: "far fa-building"
      },
      {
        color: "orange",
        year: "September 2014 - July 2019",
        job: "Degree in Computer Engineering",
        text: "Universidade da Madeira",
        tools: "Technologies: Java, C++, Python, PHP",
        icon: "fas fa-graduation-cap"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.spacer {
  height: 2rem;
}
</style>
