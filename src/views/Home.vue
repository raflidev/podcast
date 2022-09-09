<template>
  <div class="bg-gray-700 min-w-screen">
    <div class="flex justify-center" v-if="rssData.length != 0">
      <div class="w-full md:w-1/2 lg:w-1/3 min-h-screen bg-gray-900 p-4">
        <Header
          :description="rssData.description[0]"
          :image="rssData.image[0].url[0]"
          :title="rssData.title[0]"
        />
        <div>
          <iframe
            v-if="this.$route.params.slug"
            :src="
              'https://anchor.fm/kotakit/embed/episodes/' +
                this.$route.params.slug
            "
            height="110"
            width="100%"
            frameborder="0"
            scrolling="no"
          ></iframe>
           <iframe
            v-else
            :src="
              'https://anchor.fm/kotakit/embed/episodes/' +
                rssData.item[0].link[0].replace(
                  'https://anchor.fm/kotakit/episodes/',
                  ''
                )
            "
            height="110"
            width="100%"
            frameborder="0"
            scrolling="no"
          ></iframe>
          <div
            v-if="this.$route.params.slug"
            class="text-center mb-5"
            v-html="rssData.item[this.$route.params.item].description[0]"
          ></div>
          <div
            v-else
            class="text-center mb-5"
            v-html="rssData.item[0].description[0]"
          ></div>

          <div class="overflow-y-auto h-96">
            <router-link
              :to="
                '/episode/' +
                  episode.link[0].replace(
                    'https://anchor.fm/kotakit/episodes/',
                    ''
                  ) +
                  '/' +
                  index
              "
              v-for="(episode, index) in rssData.item"
              active-class="active"
              :key="episode.index"
              class="p-3 bg-gray-700 rounded-md mb-2 w-full inline-block group-list"
            >
              <div>
                {{ episode.title[0] }}
              </div>
              <div class="text-sm pt-1">
                {{ changeDate(episode.pubDate[0]) }} - {{ fromNow(episode.pubDate[0])}}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import axios from "axios";
import moment from "moment";
export default {
  name: "Test",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      rssData: [],
    };
  },
  methods: {
    changeDate(date){
      return moment(date).format('ll');
    },
    fromNow(date){
      const tgl = moment(date).format('YYYYMMDD');
      return moment(tgl, "YYYYMMDD").fromNow();
    },
    async cek() {
      var parseString = require("xml2js").parseString;
      axios.get("https://anchor.fm/s/1217ef64/podcast/rss").then((res) => {
        parseString(res.data, (err, result) => {
          this.rssData = result.rss.channel[0];
        });
      });
    },
  },
  created() {
    this.cek();
  },
}
</script>

<style>
.group-list.active {
  background-color: #FBBF24;
  border-color: #FBBF24;
  color: black;
}
</style>