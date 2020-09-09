# Vuex规定遵守的规则
1. 应用层级的状态应该集中到单个store对象中
2. Commit mutation是改变state的唯一途径 并且mutation 要是同步的
3. 异步逻辑应该封装到action中
