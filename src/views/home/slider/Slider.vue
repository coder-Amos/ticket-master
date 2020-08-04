<template>
  <div id="slider">
    <el-row>
      <el-col :span="24" class="kinds">
        <div
          style="width:10vw;font-weight:normal;margin-left:19.6vw;background-color:#FC2E6A;color:#fff;"
        >全部演出分类</div>
        <div @click="toSongs">演唱会</div>
        <div @click="toMusicparty">音乐节</div>
        <div @click="toDrama">音乐剧</div>
        <div @click="toStage">舞台剧</div>
        <div @click="toOpera">戏曲综艺</div>
      </el-col>
      <!-- 卡片 -->
      <div class="card">
        <ul>
          <li @click="toSongs">
            <i class="iconfont">&#xe60c;</i>
            &nbsp;&nbsp;
            演 唱 会
          </li>
          <li @click="toMusicparty">
            <i class="iconfont">&#xe60b;</i> &nbsp;&nbsp;
            音 乐 节
          </li>

          <li @click="toDrama" style="padding-left:16px;">
            <i class="iconfont">&#xe60f;</i>
            &nbsp;&nbsp;音 乐 剧
          </li>
          <li @click="toStage">
            <i class="iconfont">&#xe645;</i> &nbsp;&nbsp;
            舞 台 剧
          </li>
          <li @click="toOpera">
            <i class="iconfont">&#xe620;</i> &nbsp;&nbsp;
            戏 曲 综 艺
          </li>
          <li @click="toSongs">
            <i class="iconfont">&#xe696;</i> &nbsp;&nbsp;
            &nbsp;更 多
          </li>
        </ul>
      </div>
    </el-row>
    <el-carousel indicator-position="inside" arrow="never" height="400px">
      <el-carousel-item v-for="(item,index) in sliderImgs" :key="index" :style="item.bgc">
        <div class="sliderBox">
          <img :src="item.src" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <img src="static/sliderImg/bar.PNG" alt style="margin:5px auto 10px 19.4vw;width:63vw" />
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      sliderImgs: [
        {
          src: "static/sliderImg/lunbo1.jpg",
          bgc: "background-color:#1C4586"
        },
        { src: "static/sliderImg/lunbo2.jpg", bgc: "background-color:#B4252B" },
        { src: "static/sliderImg/lunbo3.jpg", bgc: "background-color:#99a9bf" },
        { src: "static/sliderImg/lunbo4.jpg", bgc: "background-color:#FEE25B" },
        { src: "static/sliderImg/lunbo5.jpg", bgc: "background-color:#55B5DB" }
      ]
    };
  },
  methods: {
    toSongs() {
      if (this.$store.state.userLogined === false) {
        this.$message.error("您还未进行登录，请先进行登录!!!");
        return;
      }
      this.$router.push({
        path: "/kind",
        query: {
          kindid: 1
        }
      });
    },
    toMusicparty() {
      if (this.$store.state.userLogined === false) {
        this.$message.error("您还未进行登录，请先进行登录!!!");
        return;
      }
      this.$router.push({
        path: "/kind",
        query: {
          kindid: 2
        }
      });
    },
    toDrama() {
      if (this.$store.state.userLogined === false) {
        this.$message.error("您还未进行登录，请先进行登录!!!");
        return;
      }
      this.$router.push({
        path: "/kind",
        query: {
          kindid: 3
        }
      });
    },
    toStage() {
      if (this.$store.state.userLogined === false) {
        this.$message.error("您还未进行登录，请先进行登录!!!");
        return;
      }
      this.$router.push({
        path: "/kind",
        query: {
          kindid: 4
        }
      });
    },
    toOpera() {
      if (this.$store.state.userLogined === false) {
        this.$message.error("您还未进行登录，请先进行登录!!!");
        return;
      }
      this.$router.push({
        path: "/kind",
        query: {
          kindid: 5
        }
      });
    }
  }
};
</script>

<style>
.sliderBox {
  width: 53vw;
  height: 43vh;
  margin: 0 auto 0 29vw;
}
.sliderBox img {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.card {
  background-color: #fafafa;
  width: 10vw;
  height: 43vh;
  position: absolute;
  top: 5vh;
  left: 19.6vw;
  z-index: 199;
}
.card ul {
  width: 100%;
  list-style-type: none;
  margin-top: 2vh;
}
.card ul > li {
  list-style-type: none;
  width: 100%-1vw;
  height: 60px;
  padding-left: 1vw;
  line-height: 60px;
  font-size: 1.2rem;
  cursor: pointer;
  color: #000;
}
.card ul > li i {
  font-size: 1.3rem;
}
.card ul > li:hover {
  background-color: #fff;
  color: #fc2e6a;
}
.kinds div {
  float: left;
  width: 7vw;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
.kinds div:hover {
  color: #fc2e6a;
}
</style>
