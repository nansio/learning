<template>
  <el-cascader
    :options="cityList"
    v-model="selectedOptions"
    :props="optionProps"
    clearable
    @change="handleChange">
  </el-cascader>
</template>

<script>
export default {
    data() {
        return {
            optionProps: {
                expandTrigger: 'hover',
                value: 'id',
                label: 'name',
                children: 'children'
            },
            cityList: [
                {
                    id: 1, name: '北京',
                    children: [{
                        id: 11, name: '大兴区',
                        children: [
                            {id: 111, name: '亦庄'},
                            {id: 112, name: 'somewhere', disabled: true}
                        ]
                    }]
                },
                {
                    id:2, name: '南京',
                    children: [{ id: 21, name: '雨花台'}]
                }
            ],
            selectedOptions: []
        }
    },
    methods: {
        handleChange() {
            console.log(this.selectedOptions.join(','))
        }
    }
};
</script>

<style>
</style>