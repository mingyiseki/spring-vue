# 高校宿舍管理系统


#### 软件架构
1.  前端：Vue3、Element-Plus、Axios、ECharts、wangEditor
2.  后端：SpringBoot、Mybatis-Plus


#### 前端配置

1.  选择进入demo项目,打开终端
2.  cd demo/vue
3.  npm i
4.  添加配置npm，设置json和boot为serve
5.  运行npm,打开地址http://localhost:9876
  
#### 后端配置
1. 加载pom.xml文件
2. 连接数据库，新建dormitory架构并连接
3. 执行dormitory.sql文件（放在demo目录下）（另外一个sql文件只有表格，没有数据）
4. 运行SpringbootApplication
tomcat端口号:
server.port=9090
mysql配置:
  数据库名称（架构）:  dormitory
  username=root
  password=root
  url=jdbc:mysql://localhost:3306/dormitory?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8&useSSL=true

