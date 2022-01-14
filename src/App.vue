<template>
  <div>
    hello , vue + vite
    <div class="test">{{test}}</div>
    <div>{{count}}</div>
    <button @click="pre">+</button>
    <button @click="next">-</button>
    <JsxComp/>
    <div class="box">
      <div class="box-left">
        我是box 的子元素
      </div>
    </div>
    <a-button type="primary" class="mx-2">Primary Button</a-button>
  <a-button class="mx-2" >Default Button</a-button>
  <a-button type="dashed" >Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
  <div>
    <span>xxxxx</span>
    <span class="ml-2">jjjjj</span>
  </div>
  <Divider />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { JsxComp } from './components/jsxComponents'
import { Divider } from 'ant-design-vue'
const test:string = "测试"
const count = ref<number>(1)
const pre = ()=>{
  count.value ++
}
const next = ()=>{
  count.value --
}
</script>

<style lang="less">
.box{
  &-left{
    color: red;
    border-radius: 5px;
  }
}
</style>