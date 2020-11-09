<template>
  <div>
    <el-form ref="form" :model="form">
      <el-form-item
        v-for="item in form.data"
        :key="item.id"
        :label="item.label"
        :rules="item.rules"
        :prop="item.field"
      >
        <el-select
          v-if="item.component.type == 'select'"
          v-model="item.data.value"
          placeholder="请选择"
          @change="handleSelectChange"
          filterable
        >
          <el-option
            v-for="itm in item.data.options"
            :key="itm.value"
            :label="itm.label"
            :value="itm"
          >
            <span>{{ itm.template }}</span>
          </el-option>
        </el-select>
        <!-- input -->
        <el-input
          v-model="item.data"
          v-if="item.component.type == 'text'"
          :rules="item.rules"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import data from "./data.js";
export default {
  data() {
    return {
      form: {
        data: data
      }
    };
  },
  methods: {
    handleSelectChange(item) {
      console.log(item);
    }
  }
};
</script>

<style></style>
