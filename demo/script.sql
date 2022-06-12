SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
-- ----------------------------
-- Table structure for adjust_room
-- ----------------------------
create table adjust_room
(
    id             int auto_increment
        primary key,
    username       varchar(255)                           not null comment '账号',
    name           varchar(255)                           not null comment '姓名',
    currentroom_id int                                    not null comment '当前房间',
    currentbed_id  int                                    not null comment '当前床位号',
    towardsroom_id int                                    not null comment '目标房间',
    towardsbed_id  int                                    not null comment '目标床位号',
    state          enum ('未处理', '通过', '驳回') default '未处理' not null comment '申请状态',
    apply_time     varchar(255)                           not null comment '申请时间',
    finish_time    varchar(255)                           null comment '处理时间'
)
    charset = utf8;

create table admin
(
    username  varchar(255)                not null comment '用户名'
        primary key,
    password  varchar(32)                 not null comment '密码',
    name      varchar(255)                not null comment '姓名',
    gender    enum ('男', '女') default '男' not null comment '性别',
    age       int                         not null comment '年龄',
    phone_num varchar(11)                 null comment '手机号',
    email     varchar(255)                null comment '邮箱',
    avatar    varchar(255)                null comment '头像'
)
    charset = utf8;

create table dorm_build
(
    dormbuild_id     int          not null comment '宿舍楼号码',
    dormbuild_name   varchar(255) not null comment '宿舍楼名称',
    dormbuild_detail varchar(255) not null comment '宿舍楼备注',
    id               int auto_increment comment '主键'
        primary key
)
    charset = utf8;

create table dorm_manager
(
    username     varchar(255)                     not null comment '用户名'
        primary key,
    password     varchar(32)     default '123456' not null comment '密码',
    dormbuild_id int                              not null comment '所管理的宿舍楼栋号',
    name         varchar(255)                     not null comment '名字',
    gender       enum ('男', '女') default '男'      not null comment '性别',
    age          int                              not null comment '年龄',
    phone_num    varchar(11)                      null comment '手机号',
    email        varchar(255)                     null comment '邮箱',
    avatar       varchar(255)                     null comment '头像'
)
    charset = utf8;

create table dorm_room
(
    dormroom_id      int           not null comment '宿舍房间号'
        primary key,
    dormbuild_id     int           not null comment '宿舍楼号',
    floor_num        int           not null comment '楼层',
    max_capacity     int default 4 not null comment '房间最大入住人数',
    current_capacity int default 0 not null comment '当前房间入住人数',
    first_bed        varchar(255)  null comment '一号床位',
    second_bed       varchar(255)  null comment '二号床位',
    third_bed        varchar(255)  null comment '三号床位',
    fourth_bed       varchar(255)  null comment '四号床位'
)
    charset = utf8;

create table notice
(
    id           int auto_increment comment '主键'
        primary key,
    title        varchar(255) not null comment '主题',
    content      longtext     not null comment '内容',
    author       varchar(255) not null comment '作者',
    release_time datetime     not null comment '发布时间'
)
    charset = utf8;

create table repair
(
    id               int auto_increment comment '订单编号'
        primary key,
    repairer         varchar(255)                     not null comment '报修人',
    dormbuild_id     int                              not null comment '报修宿舍楼',
    dormroom_id      int                              not null comment '报修宿舍房间号',
    title            varchar(255)                     not null comment '表单标题',
    content          longtext                         not null comment '表单内容',
    state            enum ('完成', '未完成') default '未完成' not null comment '订单状态（是否维修完成）',
    order_buildtime  datetime                         not null comment '订单创建时间',
    order_finishtime datetime                         not null comment '订单完成时间'
)
    charset = utf8;

create table student
(
    username  varchar(255)                     not null comment '学号'
        primary key,
    password  varchar(32)     default '123456' not null comment '密码',
    age       int unsigned                     not null comment '年龄',
    name      varchar(255)                     not null comment '姓名',
    gender    enum ('男', '女') default '男'      not null comment '性别',
    phone_num varchar(11)                      null comment '手机号',
    email     varchar(255)                     null comment '邮箱',
    avatar    varchar(255)                     null comment '头像',
    constraint stu_num
        unique (username)
)
    charset = utf8;

create table visitor
(
    id          int auto_increment
        primary key,
    name        varchar(255)                not null comment '姓名',
    gender      enum ('男', '女') default '男' not null comment '性别',
    phone_num   varchar(255)                not null comment '电话',
    origin_city varchar(255)                not null comment '来源城市',
    visit_time  datetime                    not null comment '来访时间',
    content     varchar(255)                not null comment '事情'
)
    charset = utf8;


